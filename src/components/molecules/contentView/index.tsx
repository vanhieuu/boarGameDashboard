import {
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  Image,
  ImageSourcePropType,
  Text,
} from "react-native";
import React from "react";
import { AppTheme, useTheme } from "@app/theme";

interface ContentViewProps {
  onPress: () => void;
  image: ImageSourcePropType;
  title: string;
  subTitle: string;
}

const ContentView = ({ onPress, image, subTitle, title }: ContentViewProps) => {
  const theme = useTheme();
  const styles = rootStyles(theme);
  return (
    <TouchableOpacity style={styles.firstView} onPress={onPress}>
      <View style={styles.secondView}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={image}
            style={[{ width: 110, height: 90 }]}
            resizeMode="contain"
          />
        </View>

        <View style={{ marginHorizontal: 8, marginBottom: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>{title}</Text>
          <View style={{ maxWidth: 210, paddingTop: 16 }}>
            <Text style={styles.subTitleStyle}>{subTitle}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContentView;

const rootStyles = (theme: AppTheme) =>
  StyleSheet.create({
    firstView: {
      height: 123,
      borderWidth: 2,
      justifyContent: "center",
      backgroundColor: theme.colors.backgroundCard,
      ...Platform.select({
        ios: {
          shadowColor: theme.colors.searchBar,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 6,
        },
        android: {
          shadowColor: theme.colors.searchBar,
        },
      }),

      marginHorizontal: 16,
      flex: 1,
      marginBottom: 32,
      marginTop: 10,
    },
    secondView: {
      borderWidth: 2,
      borderColor: theme.colors.primary,
      marginHorizontal: 10,
      marginVertical: 10,
      height: 100,
      backgroundColor: "transparent",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    subTitleStyle: {
      fontWeight: "300",
      fontSize: 10,
      fontStyle: "italic",
      fontFamily:'Roboto'
    },
  });
