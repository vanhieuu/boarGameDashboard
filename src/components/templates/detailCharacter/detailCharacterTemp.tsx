import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Animated,
} from "react-native";
import React from "react";
import { AppTheme, useTheme } from "@app/theme";
import { Characters, height, width } from "@app/ultils/type";
import Constants from "expo-constants";
import { pop } from "@app/navigation/navigation-services";
import { HeaderBack } from "@app/components/molecules/headerBack/headerBack";
import { TitleCharacters } from "@app/components/atoms/NameCharacters";

interface DetailCharactersTemp {
  characters: Characters;
}

const DetailCharactersTemplate = ({ characters }: DetailCharactersTemp) => {
  const theme = useTheme();
  const styles = rootStyle(theme);
  return (
    <View style={{ flex: 1 }}>
      <HeaderBack title="Chi tiết nhân vật" onPress={() => pop(1)} />
      <View style={styles.bodyView}>
        <TitleCharacters name={characters.name.toUpperCase()} />
        <View style={{ marginTop: 30, marginHorizontal: 16 }}>
          <View style={styles.rootOverView}>
            <View style={styles.characterView}>
              <View>
                <Image
                  source={{ uri: characters.image }}
                  style={styles.imageStyle}
                  resizeMode="contain"
                />
              </View>
              <Animated.Image
                source={{ uri: characters.chess }}
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
                <Text style={styles.textStyle}>{characters.type}</Text>
              </View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                alwaysBounceVertical={false}
                bounces={false}
                style={[styles.contentTitle, styles.descriptionView]}
              >
                <View style={styles.titleOverview}>
                  <Text style={{ fontFamily: "Roboto-Medium" }}>Mô tả</Text>
                </View>
                <Text
                  adjustsFontSizeToFit={true}
                  allowFontScaling={true}
                  style={styles.textOverview}
                >
                  {characters.description}
                </Text>
              </ScrollView>
              <ScrollView
                style={[styles.contentTitle, styles.missionView]}
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
                  {characters.mission}
                </Text>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export const DetailCharactersTem = React.memo(DetailCharactersTemplate);

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
      fontFamily: "Roboto-Bold",
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
      borderWidth: 1,
      borderColor: theme.colors.darkBlue,
      marginBottom: 10,
      backgroundColor: theme.colors.backgroundCard,
    },
    titleOverview: { justifyContent: "center", alignItems: "center" },
    textOverview: {
      fontSize: 13.7,
      fontFamily: "Roboto-Light",
      textAlign: "justify",
      paddingHorizontal: 15,
      paddingBottom: 5,
    },
    missionView: {
      height: height > 800 ? 355 : 300,
      marginBottom: 10,
      paddingTop: 4,
      paddingBottom: 30,
    },
    descriptionView: {
      height: height > 800 ? 355 : 300,
      marginBottom: 10,
      paddingTop: 4,
      paddingBottom: 30,
    },
    rootOverView: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
  });
