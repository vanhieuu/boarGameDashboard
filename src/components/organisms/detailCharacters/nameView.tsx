import { StyleSheet, Text, View,StyleProp,ViewStyle,TextStyle } from "react-native";
import React from "react";
import { AppTheme, useTheme } from "@app/theme";

interface NameViewProps {
  name: string;
  contentStyle?:StyleProp<ViewStyle>
  textStyle?:StyleProp<TextStyle>
}

const NameViewOrganisms = ({ name ,contentStyle,textStyle}: NameViewProps) => {
  const theme = useTheme();
  const styles = rootStyle(theme);
  return (
    <View style={[styles.nameView,contentStyle]}>
      <Text style={[styles.textName,textStyle]}>{name}</Text>
    </View>
  );
};

export const NameView = React.memo(NameViewOrganisms);

const rootStyle = (theme: AppTheme) =>
  StyleSheet.create({
    nameView: {
      backgroundColor: theme.colors.backgroundCard,
      width: 200,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
      borderColor: theme.colors.primary,
    },
    textName: {
      fontWeight: "bold",
      fontSize: 20,
      textTransform: "uppercase",
      color: theme.colors.primary,
    },
  });
