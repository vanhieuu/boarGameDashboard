import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppTheme, useTheme } from "@app/theme";
import { EventType, width } from "@app/ultils/type";
import { RootState } from "@app/assets/store/store";
import { icons } from "@app/assets/icons";

const ITEM_SIZE = width;
const ITEM_SPACING = (width - ITEM_SIZE) / 2;
const ITEM_HEIGHT = width * (156 / 375);

const SecondBannerOrganism = () => {
  const theme = useTheme();
  const styles = rootStyles(theme);
  const dataEvent: EventType[] = useSelector<RootState, any>(
    (state) => state.app.dataEvent
  );
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [indexScroll, setIndex] = useState(0);
  return (
    <View style={styles.rootView}>
      <Animated.FlatList
        data={dataEvent}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        initialScrollIndex={1}
        snapToInterval={ITEM_SIZE}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        onMomentumScrollEnd={(ev) => {
          const index = Math.round(ev.nativeEvent.contentOffset.x / ITEM_SIZE);
          setIndex(index);
        }}
        contentContainerStyle={{ paddingHorizontal: ITEM_SPACING }}
        style={{ flexGrow: 0, zIndex: 1000 }}
        decelerationRate={"fast"}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
            (index + 1) * ITEM_SIZE,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp",
          });
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.7, 1, 0.7],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              style={{
                justifyContent: "center",
                opacity,
                transform: [{ scale }],
              }}
            >
              <TouchableOpacity>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: ITEM_SIZE,
                    height: ITEM_HEIGHT,
                  }}
                />
              </TouchableOpacity>
            </Animated.View>
          );
        }}
      />
      <View style={{ flexDirection: "row" }}>
        {dataEvent?.map((item, index) => {
          return (
            <View
              key={item.id}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <View
                style={[
                  styles.pagingNation,
                  {
                    backgroundColor:
                      index === indexScroll
                        ? theme.colors.searchBar
                        : "transparent",
                  },
                ]}
              />
            </View>
          );
        })}
      </View>
      <View
        style={{
          marginTop: 32,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 14 }}>Xem thêm để hiểu cách chơi nhé!</Text>
        <Animated.Image
          source={icons.iconBack}
          resizeMode="contain"
          style={[
            styles.arrowStyle,
            {
              transform: [
                {
                  rotate: "-90deg",
                },
              ],
            },
          ]}
        />
      </View>
    </View>
  );
};

export const SecondBanner = React.memo(SecondBannerOrganism);

const rootStyles = (theme: AppTheme) =>
  StyleSheet.create({
    rootView: {
      marginTop: 32,
      alignItems: "center",
      justifyContent: "center",
      // backgroundColor: theme.colors.primary,
    },
    pagingNation: {
      width: 8,
      height: 8,
      // borderRadius: 30,
      marginTop: 7,
      borderWidth: 2,
      borderColor: theme.colors.searchBar,
      marginHorizontal: 7,
    },
    arrowStyle: { width: 25, height: 25, tintColor: theme.colors.primary,marginTop:10 },
  });
