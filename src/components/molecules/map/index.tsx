import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { memo } from "react";
import { images } from "../../../assets/images";

const width = Dimensions.get("screen").width;

interface MapProps {
  currentScreen: string;
}

const MapMoleculseComponents = ({ currentScreen }: MapProps) => {
  return (
    <ScrollView
      style={{
        width: "100%",
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      bounces={false}
    >
      {currentScreen === "MAP1" ? (
        <View style={{ flexDirection: "row" }}>
          <Image
            source={images.map1_1}
            style={{ width: width, height: width }}
          />
          <Image
            source={images.map1_2}
            style={{ width: width, height: width }}
          />
          <Image
            source={images.map1_3}
            style={{ width: width, height: width }}
          />
        </View>
      ) : (
        <View style={{ flexDirection: "row" }}>
          <Image
            source={images.map2_1}
            style={{ width: width, height: width }}
          />
          <Image
            source={images.map2_2}
            style={{ width: width, height: width }}
          />
          <Image
            source={images.map2_3}
            style={{ width: width, height: width }}
          />
        </View>
      )}
    </ScrollView>
  );
};

export const MapMoleculse = memo(MapMoleculseComponents);

const styles = StyleSheet.create({});
