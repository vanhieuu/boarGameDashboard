import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AppTheme } from "../../../theme";
import { images } from "./../../../assets/images/index";
import { MapMoleculse } from "../../molecules/map";

interface MapProps {
  theme: AppTheme;
}

const MapOrganismsComponents = ({ theme }: MapProps) => {
  const [onPressItem, setOnPressItem] = React.useState("MAP1");

  return (
    <ScrollView style={styles(theme).rootScrollView}>
      <View style={styles(theme).containerButton}>
        <TouchableOpacity
          style={[
            styles(theme).tabButton,
            {
              borderColor:
                onPressItem === "MAP1"
                  ? theme.colors.secondary
                  : theme.colors.primary,
              borderWidth: onPressItem === "MAP1" ? 2 : 1,
            },
          ]}
          onPress={() => setOnPressItem("MAP1")}
        >
          <Image
            source={images.map1_1}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles(theme).tabButton,
            {
              borderColor:
                onPressItem === "MAP2"
                  ? theme.colors.secondary
                  : theme.colors.primary,
              borderWidth: onPressItem === "MAP2" ? 2 : 1,
            },
          ]}
          onPress={() => setOnPressItem("MAP2")}
        >
          <Text>Map2</Text>
        </TouchableOpacity>
      </View>
      <MapMoleculse currentScreen={onPressItem} />
      <Text>aaaa</Text>
    </ScrollView>
  );
};

export const MapOrganisms = React.memo(MapOrganismsComponents);

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    tabButton: {
      height: 50,
      borderWidth: 1,
      borderColor: theme.colors.primary,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      marginHorizontal: 10,
      marginBottom:20
    },
    containerButton: {
      justifyContent: "space-around",
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 30,
      marginBottom: 20,
      marginTop:40
    },
    rootScrollView: {
      // marginTop: 36,
      backgroundColor:theme.colors.background,
      flex:1
    },
  });
