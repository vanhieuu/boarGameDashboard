import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppTheme, useTheme } from "../../../theme";

interface TitleCharactersProps {
  name: string;
}

const TitleCharactersAtoms = ({ name }: TitleCharactersProps) => {
  const theme = useTheme();
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={styles(theme).first}>
        <Text style={styles(theme).textStyle}>{name}</Text>
        <View style={styles(theme).second} />
      </View>
    </View>
  );
};

export const TitleCharacters = React.memo(TitleCharactersAtoms);

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    first: {
      width: 200,
      height: 40,
      borderColor: theme.colors.red,
      borderWidth: 2,
      justifyContent: "center",
      alignItems: "center",
      zIndex:10000,
      backgroundColor:theme.colors.backgroundCard,
      
    },
    second: {
      width: 180,
      height: 55,
      borderColor: theme.colors.searchBar,
      borderWidth: 2,
      position: "absolute",
      // zIndex: 1000,
      backgroundColor:'transparent'
    },
    textStyle: {
      fontSize: 18,
      fontWeight: "600",
      lineHeight: 20,
      fontFamily: "Roboto-Bold",
      zIndex:3000
    },
  });
