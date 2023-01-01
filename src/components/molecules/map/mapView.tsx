import { Image, ImageSourcePropType, ScrollView } from "react-native";
import React from "react";
import { width } from "@app/ultils/type";

interface MapViewMoleculesProps {
  image1: ImageSourcePropType;
  image2: ImageSourcePropType;
  image3: ImageSourcePropType;
}

const MapViewMolecules = ({
  image1,
  image2,
  image3,
}: MapViewMoleculesProps) => {
  return (
    <ScrollView
      style={{
        flexDirection: "row",
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      bounces={false}
    >
      <Image source={image1} style={{ width: width, height: width }} />
      <Image source={image2} style={{ width: width, height: width }} />
      <Image source={image3} style={{ width: width, height: width }} />
    </ScrollView>
  );
};

export default MapViewMolecules;
