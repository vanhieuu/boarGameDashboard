import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { AppTheme } from "@app/theme";
import { Cards } from "@app/ultils/type";

interface ScrollCardProps {
  theme: AppTheme;
  listCards: Cards[];
  onPressItems: (value: Cards) => void;
}

const ScrollCardOrganism = ({
  listCards,
  theme,
  onPressItems,
}: ScrollCardProps) => {
  const styles = rootStyles(theme);
  return (
    <ScrollView style={styles.scrollViewRoot}>
      <View style={styles.rootViewItem}>
        {listCards.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{ flexDirection: "row", marginHorizontal: 8 }}
              onPress={() => onPressItems(item)}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.imageStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export const ScrollCardOrgan = React.memo(ScrollCardOrganism);

const rootStyles = (theme: AppTheme) =>
  StyleSheet.create({
    scrollViewRoot: {
      flex: 1,
      //   backgroundColor:'red',
      marginTop: 16,
    },
    rootViewItem: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    },
    imageStyle: {
      width: 180,
      height: 300,
    },
  });
