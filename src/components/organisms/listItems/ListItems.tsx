import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { images } from "@app/assets/images";
import { Items } from "@app/ultils/type";
import { useTheme, AppTheme } from "@app/theme";
import { navigate } from "@app/navigation/navigation-services";
import { APP_SCREEN } from "@app/navigation/screen-type";
import { Audio } from "expo-av";
interface ListItemsProps {
  items: Items[];
}

const ListItemsOrganism = ({ items }: ListItemsProps) => {
  const theme = useTheme();
  const styles = rootStyles(theme);
  const onClick = async() =>{
    const {sound} = await Audio.Sound.createAsync(require('../../../../assets/sound/click.mp3'))
    return await sound.playAsync()
  }
  return (
    <ScrollView
      style={{
        width: "100%",
      }}
    >
      <View style={styles.rootViewItem}>
        {items.map((item, index) => {
          return (
            <React.Fragment key={item.id}>
              <TouchableOpacity
                style={{ flexDirection: "row", margin: 11 }}
                onPress={() =>
                  {
                    onClick()
                    navigate(APP_SCREEN.DETAIL_ITEMS, { items: item })
                  }
                  
                }
              >
                <ImageBackground
                  source={images.FrameItems}
                  style={styles.frameItems}
                  resizeMode="contain"
                >
                  <Image
                    source={{ uri: item.image }}
                    style={styles.imageItems}
                    resizeMode="center"
                  />
                  <ImageBackground
                    source={images.FrameNameItems}
                    style={styles.frameNameItems}
                    resizeMode="contain"
                  >
                    <Text style={styles.itemName}>{item.name}</Text>
                  </ImageBackground>
                </ImageBackground>
              </TouchableOpacity>
            </React.Fragment>
          );
        })}
      </View>
    </ScrollView>
  );
};

export const ListItemOrgan = React.memo(ListItemsOrganism);

const rootStyles = (theme: AppTheme) =>
  StyleSheet.create({
    itemName: {
      fontSize: 12,
      fontWeight: "600",
      color: theme.colors.darkBlue,
      paddingBottom: 4,
      textAlign: "center",
    },
    rootViewItem: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    },
    frameItems: {
      width: 103,
      height: 130,
      justifyContent: "center",
      alignItems: "center",
    },
    imageItems: {
      width: 80,
      height: 80,
    },
    frameNameItems: {
      width: 83,
      height: 23,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
    },
  });
