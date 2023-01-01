import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import { AppTheme, useTheme } from "@app/theme";
import { Items } from "@app/ultils/type";

interface ItemsProps {
  map: string;
  obtain: string;
}
interface ObtainProps {
  items: Items;
}
const ObtainItemViewOrganisms = ({ items }: ObtainProps) => {
  const theme = useTheme();
  const styles = rootStyle(theme);
  
  return (
    <View style={styles.root}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Cách thu thập</Text>
      </View>
      {items.type != "exchange" ? (
        items.obtain.map((item: ItemsProps, index: number) => {
          return (
            <View key={index} style={{ paddingVertical: 5 }}>
              <Text>
                {Object.keys(items.obtain).length == 1 ? (
                  item.obtain
                ) : (
                  <Text>
                    Ở màn chơi {item.map}: {item.obtain}
                  </Text>
                )}
              </Text>
            </View>
          );
        })
      ) : (
        <View>
          <Text>{items.obtain[0].obtain || items.obtain[0]}</Text>
        </View>
      )}
    </View>
  );
};

export default ObtainItemViewOrganisms;

const rootStyle = (theme: AppTheme) =>
  StyleSheet.create({
    root: {
      borderWidth: 1,
      borderColor: theme.colors.darkBlue,
      backgroundColor: theme.colors.backgroundCard,
      flex: 1,
      // width:width,
      marginTop: 16,
      padding: 12,
      // width:'100%',
      // marginHorizontal:16
      ...Platform.select({
        ios: {
          marginHorizontal: 1,
          flex: 1,
        },
      }),

      // marginHorizontal: 10,
    },
    titleView: {
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 6,
    },
    titleText: {
      fontSize: 15,
      fontWeight: "bold",
      color: theme.colors.darkBlue,
    },
  });
