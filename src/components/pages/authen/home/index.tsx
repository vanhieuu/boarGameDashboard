import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppTheme, useTheme } from "../../../../theme";

const HomePageScreens = () => {
  return (
    <View style={styles(useTheme()).root}>
      <Text style={{color:'black'}}  >HomePageScreens</Text>
    </View>
  );
};

export const HomePage = React.memo(HomePageScreens);

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:theme.colors.background
    },
  });
