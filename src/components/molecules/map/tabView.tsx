import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { AppTheme, useTheme } from "@app/theme";
import { images } from "@app/assets/images";
import { onClick } from "../soundEffect/click";

interface TabViewProps {
  setOnPressItem: React.Dispatch<React.SetStateAction<string>>;
  onPressItem: string;
}

const TabViewMapMolecules = ({ onPressItem, setOnPressItem }: TabViewProps) => {
  const theme = useTheme();

  return (
    <View style={styles(theme).containerButton}>
      <TouchableOpacity onPress={() => {
        onClick()
        setOnPressItem("MAP1")
      }}>
        <ImageBackground
          source={
            onPressItem == "MAP1" ? images.FrameActive : images.FrameInActive
          }
          style={styles(theme).buttonStyle}
          resizeMode="contain"
        >
          <Text
            style={[
              styles(theme).textStyle,
              {
                color:
                  onPressItem === "MAP1"
                    ? theme.colors.primary
                    : theme.colors.darkBlue,
              },
            ]}
          >
            Bàn chơi 1
          </Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        onClick()
        setOnPressItem("MAP2")
      }}>
        <ImageBackground
          source={
            onPressItem == "MAP2" ? images.FrameActive : images.FrameInActive
          }
          style={styles(theme).buttonStyle}
          resizeMode="contain"
        >
          <Text
            style={[
              styles(theme).textStyle,
              {
                color:
                  onPressItem === "MAP2"
                    ? theme.colors.primary
                    : theme.colors.darkBlue,
              },
            ]}
          >
            Bàn chơi 2
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default TabViewMapMolecules;

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    containerButton: {
      justifyContent: "space-around",
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 30,
      marginBottom: 20,
      marginTop: 45,
    },
    rootScrollView: {
      // marginTop: 36,
      backgroundColor: theme.colors.background,
      flex: 1,
    },
    buttonStyle: {
      width: 163,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    textStyle: {
      fontSize: 16,
      fontWeight: "700",
    },
  });
