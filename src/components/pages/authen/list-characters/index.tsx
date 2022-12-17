import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { AppTheme, useTheme } from "../../../../theme";
import { useSelector } from "react-redux";
import { RootState } from "../../../../assets/store/store";
import { Characters } from "../../../../ultils/type";
import Constants from "expo-constants";
import debounce from "lodash.debounce";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Icons } from "../../../atoms/icon/icons";
import { navigate } from "../../../../navigation/navigation-services";
import { APP_SCREEN } from "../../../../navigation/screen-type";
import { SearchBar } from "@app/components/molecules/searchBar";

const { width, height } = Dimensions.get("screen");
const ITEM_SIZE = 180;
const ITEM_HEIGHT = width * 0.8 * 1.7;
const SPACING = 10;

const ITEM_SPACING = (width - ITEM_SIZE) / 2;
const ListCharactersScreens = () => {
  const theme = useTheme();
  const styles = rootStyle(theme);

  const scrollXIndex = useRef(new Animated.Value(0)).current;
  const scrollXAnimation = useRef(new Animated.Value(0)).current;

  const listCharacters: Characters[] = useSelector(
    (state: RootState) => state.characters.character
  );

  const [currentIndex, setCurrentIndex] = useState(listCharacters[0]);
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [filterData, setFilterData] = useState<Characters[]>(listCharacters);
  useEffect(() => {
    Animated.spring(scrollXAnimation, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  }, []);

  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../../../../../assets/fonts/Roboto-Bold.otf"),
    "Roboto-Medium": require("../../../../../assets/fonts/Roboto-Medium.otf"),
    "Roboto-Light": require("../../../../../assets/fonts/Roboto-Light.otf"),
    "Roboto-Regular": require("../../../../../assets/fonts/Roboto-Regular.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider style={styles.root}>
      <SearchBar setFilterData={setFilterData} setShow={setShow} />
      {show && (
        <View
          style={styles.filterItemView}
        >
          <View
            style={{
              marginHorizontal: 20,
              backgroundColor: theme.colors.background,
            }}
            // onTouchStart={() => setShow(false)}
          >
            {filterData.length > 0 ? (
              filterData.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                    onPress={() => {
                      navigate(APP_SCREEN.DETAILS_CHARACTERS, {
                        characters: item,
                      });
                    }}
                  >
                    <Image
                      source={{ uri: item.chess }}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 40,
                      }}
                      resizeMode="contain"
                    />
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                          color: theme.colors.black,
                        }}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "200",
                          color: theme.colors.border,
                        }}
                      >
                        {item.type}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })
            ) : (
              <View style={{ backgroundColor: theme.colors.background }}>
                <Text>Không tìm thấy</Text>
              </View>
            )}
          </View>
        </View>
      )}

      <View
        style={{
          marginTop: height > 800 ? 40 : 20,
          marginBottom: height > 800 ? 5 : 0,
        }}
      >
        <Text style={styles.textStyle}>Hãy chọn 1 nhân vật !</Text>
      </View>
      <Animated.FlatList
        data={listCharacters}
        horizontal
        keyExtractor={(item) => item.id}
        bounces={false}
        contentContainerStyle={styles.contentContainerStyle}
        snapToInterval={ITEM_SIZE}
        onMomentumScrollEnd={(ev) => {
          const index = Math.round(ev.nativeEvent.contentOffset.x / ITEM_SIZE);
          setCurrentIndex(listCharacters[index]);
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { x: scrollXAnimation },
              },
            },
          ],
          {
            useNativeDriver: true,
          }
        )}
        scrollEventThrottle={Number(currentIndex.id)}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        scrollEnabled={true}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
            (index + 1) * ITEM_SIZE,
          ];

          const scale = scrollXAnimation.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
          });
          const opacity = scrollXAnimation.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
          });

          return (
            <Animated.View
              style={[
                {
                  transform: [
                    {
                      scale,
                    },
                  ],
                  opacity,
                },
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  navigate(APP_SCREEN.DETAILS_CHARACTERS, {
                    characters: item,
                  });
                }}
              >
                <Image
                  source={{ uri: item.cover }}
                  style={styles.charImage}
                  resizeMode="center"
                />
              </TouchableOpacity>
            </Animated.View>
          );
        }}
      />
    </SafeAreaProvider>
  );
};

export const ListCharacters = React.memo(ListCharactersScreens);

const rootStyle = (theme: AppTheme) =>
  StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
    charImage: {
      width: ITEM_SIZE,
      height: ITEM_HEIGHT,
      // backgroundColor: "red",
    },

    contentContainerStyle: {
      paddingHorizontal: ITEM_SPACING,
      marginTop: height > 800 ? 30 : 0,
    },
    searchBarText: {
      width: "90%",
      // borderRadius:10,
      borderWidth: 2,
      height: 40,
      borderColor: theme.colors.searchBar,
      color: theme.colors.textTab,
      paddingLeft: 35,
      fontSize: 14,
      lineHeight: 16,
      fontFamily: "Roboto-Light",
    },
    textStyle: {
      fontFamily: "Roboto-Medium",
      fontSize: 16,
    },
    searchView: {
      marginTop: Constants.statusBarHeight + (height > 800 ? 10 : 0),
      alignItems: "center",
      flexDirection: "row",
    },
    iconView: {
      position: "absolute",
      left: 10,
      width: 20,
      height: 20,
    },
    filterItemView:{
      width: width,
      position: "absolute",
      zIndex: 10000,
      flex: 1,
      height: "100%",
      top: 90,
    }
  });
