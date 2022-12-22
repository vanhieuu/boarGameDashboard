import { StyleSheet, Text, View, Image,Platform } from "react-native";
import React from "react";
import { AppTheme, useTheme } from "@app/theme";
import { width } from "@app/ultils/type";

interface DescriptionProps {
  description: string;
  irlImage: string;
}

const DescriptionView = ({ description, irlImage }: DescriptionProps) => {
  const theme = useTheme();
  const styles = rootStyle(theme);
  return (
    <View style={styles.root}>
      <View style={{ width: width / 2, padding: 8 }}>
        <Text style={{padding:8,fontWeight:'bold',fontSize:15}}  >Mô tả</Text>
        <Text style={{textAlign:'justify'}}   >{description}</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center",margin:7 }}>
        <Image
          source={{ uri: irlImage }}
          style={{ ...StyleSheet.absoluteFillObject }}
          resizeMode="center"
        />
      </View>
    </View>
  );
};

export default DescriptionView;

const rootStyle = (theme: AppTheme) =>
  StyleSheet.create({
    root: {
      marginTop: 16,
      borderWidth: 1,
      borderColor: theme.colors.darkBlue,
      //   flex: 1,
      flexDirection: "row",
      backgroundColor:theme.colors.backgroundCard,
      ...Platform.select({
        ios:{
            marginHorizontal:6
        }
      })
    //   marginHorizontal:16
      //   flexWrap: "wrap",
    },
  });
