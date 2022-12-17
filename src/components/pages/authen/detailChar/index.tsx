import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
  ScrollView,
} from "react-native";
import React, { memo } from "react";
import Constants from "expo-constants";
import { RouteProp, useRoute } from "@react-navigation/native";
import { AppTheme } from "../../../../theme";
import { useTheme } from "./../../../../theme/index";
import { Icons } from "../../../atoms/icon/icons";
import {
  APP_SCREEN,
  RootStackParamsList,
} from "../../../../navigation/screen-type";
import { TitleCharacters } from "../../../atoms/NameCharacters";
import { pop } from "../../../../navigation/navigation-services";

const { width, height } = Dimensions.get("screen");

const DetailCharactersScreen = () => {
  const theme = useTheme();
  const styles = rootStyle(theme);
  const params =
    useRoute<RouteProp<RootStackParamsList, APP_SCREEN.DETAILS_CHARACTERS>>()
      .params.characters;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerView}>
        <TouchableOpacity style={styles.borderIcon} onPress={() => pop(1)}>
          <Icons icon="iconBack" size={20} resizeMode="contain" />
        </TouchableOpacity>

        <View style={styles.titleView}>
          <Text style={styles.textTitleStyle}>Chi tiết nhân vật</Text>
        </View>
      </View>
      <View style={styles.bodyView}>
        <TitleCharacters name={params.name.toUpperCase()} />
        <View style={{ marginTop: 30, marginHorizontal: 16 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <View style={styles.characterView}>
              <View>
                <Image
                  source={{ uri: params.image }}
                  style={styles.imageStyle}
                  resizeMode="contain"
                />
              </View>
              <Animated.Image
                source={{ uri: params.chess }}
                style={[
                  styles.chessImage,
                  {
                    transform: [
                      {
                        rotateY: "180deg",
                      },
                    ],
                  },
                ]}
                resizeMode="contain"
              />
            </View>
            <View style={styles.overView}>
              <View
                style={[
                  styles.contentTitle,
                  { justifyContent: "center", alignItems: "center" },
                ]}
              >
                <Text style={styles.textStyle}>{params.type}</Text>
              </View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                alwaysBounceVertical={false}
                bounces={false}
                style={[
                  styles.contentTitle,
                  {
                    height: height > 800 ? 355 : 300,
                    marginBottom: 10,
                    paddingTop: 4,
                    paddingBottom: 30,
                  },
                ]}
              >
                <View style={styles.titleOverview}>
                  <Text style={{ fontFamily: "Roboto-Medium" }}>Mô tả</Text>
                </View>
                <Text
                  adjustsFontSizeToFit={true}
                  allowFontScaling={true}
                  style={styles.textOverview}
                >
                  {params.description}
                </Text>
              </ScrollView>
              <ScrollView
                style={[
                  styles.contentTitle,
                  {
                    height: height > 800 ? 200 : 180,
                    // marginBottom: 20,
                  },
                ]}
                alwaysBounceVertical={false}
                bounces={false}
                showsVerticalScrollIndicator={false}
              >
                <View style={styles.titleOverview}>
                  <Text style={{ fontFamily: "Roboto-Medium" }}>Nhiệm vụ</Text>
                </View>
                <Text
                  adjustsFontSizeToFit={true}
                  allowFontScaling={true}
                  style={styles.textOverview}
                >
                  {params.mission}
                </Text>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export const DetailCharacters = memo(DetailCharactersScreen);

const rootStyle = (theme: AppTheme) =>
  StyleSheet.create({
    headerView: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: Constants.statusBarHeight + (height > 800 ? 10 : 0),
    },

    borderIcon: {
      borderWidth: 2,
      padding: 2,
      marginLeft: 10,
      borderColor: theme.colors.searchBar,
    },
    titleView: {
      //   flex: 1,
      marginLeft: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    textStyle: {
      fontSize: 16,
      fontWeight: "600",
      lineHeight: 20,
      fontFamily: "Roboto",
    },
    textTitleStyle: {
      fontSize: 18,
      fontWeight: "600",
      lineHeight: 20,
      fontFamily: "Roboto-Bold",
    },
    bodyView: { flex: 1, marginTop: 30 },
    characterView: {
      width: width / 2 - 50,
      height: height > 800 ? 600 : 550,
      // borderWidth: 1,
      margin: 5,
      // justifyContent:'center',
      alignItems: "center",
    },
    overView: {
      width: width / 2 - 20,
      height: height > 800 ? 680 : 550,
      // borderWidth: 1,
      alignItems: "center",
    },
    imageStyle: {
      width: height > 800 ? 200 : 200,
      height: height > 800 ? 400 : 390,
    },
    chessImage: {
      width: 150,
      height: height > 800 ? 200 : 140,
      marginTop: height > 800 ? 30 : 20,
    },
    contentTitle: {
      width: width / 2 - 20,
      height: 40,
      borderWidth: 2,
      borderColor: theme.colors.darkBlue,
      marginBottom: 10,
    },
    titleOverview: { justifyContent: "center", alignItems: "center" },
    textOverview: {
      fontSize: 13.7,
      fontFamily: "Roboto-Light",
      textAlign: "justify",
      paddingHorizontal: 15,
      paddingBottom: 5,
    },
  });
