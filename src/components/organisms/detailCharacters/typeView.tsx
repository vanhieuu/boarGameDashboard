import { StyleSheet, Text, View,Platform } from "react-native";
import React from "react";
import { AppTheme, useTheme } from "@app/theme";

interface TypeViewProps {
  type: "exchange" | "material" | "primary";
  map: string;
}

const TypeViewOrganisms = ({ type, map }: TypeViewProps) => {
  const theme = useTheme();
  const styles = rootStyle(theme);

  return (
    <View style={styles.rootView}>
      <View style={styles.typeView}>
        <Text style={styles.textStyle}>
          {type === "exchange"
            ? "Trao đổi"
            : type === "primary"
            ? "Vật phẩm chính"
            : "Nguyên liệu"}
        </Text>
      </View>
      <View style={styles.mapView}>
        <Text style={styles.textStyle}>
          {map === "all"
            ? "Bàn chơi 1 + 2"
            : map == "1"
            ? "Bàn chơi 1"
            : "Bàn chơi 2"}
        </Text>
      </View>
    </View>
  );
};

export const TypeViewOrgan = React.memo(TypeViewOrganisms);

const rootStyle = (theme: AppTheme) =>
  StyleSheet.create({
    rootView: {
      flexDirection: "row",
      marginTop: 20,
      // justifyContent: "space-between",
      // marginHorizontal: 5,
      alignItems:'center',
      ...Platform.select({
        ios:{
          marginHorizontal:6
        },
        android:{
          marginHorizontal:0
        }
      })
      
    },
    typeView: {
      width: 10,
      height: 50,
      borderWidth: 1,
      borderColor: theme.colors.darkBlue,
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      marginRight: 16,
      backgroundColor:theme.colors.backgroundCard,
      // paddingRight:8
    },
    mapView: {
      width: 150,
      height: 50,
      borderWidth: 1,
      borderColor: theme.colors.darkBlue,
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      backgroundColor:theme.colors.backgroundCard,
      // paddingLeft:8
    },
    textStyle:{
      fontSize:16,
      fontWeight:'bold',
      color:theme.colors.darkBlue
    }
  });
