import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import React, { memo } from "react";
import { images } from "../../../assets/images";
import MapViewMolecules from "./mapView";
import { DataMap } from "@app/ultils/type";
import LocationViewMolecules from "./locationView";

const width = Dimensions.get("screen").width;

interface MapProps {
  currentScreen: string;
  dataMap: DataMap;
}

const MapMoleculseComponents = ({ currentScreen, dataMap }: MapProps) => {
  console.log(dataMap.Map2)
  return (
    <View>
      {currentScreen === "MAP1" ? (
        <View style={{flex:1}}>
          <MapViewMolecules
            image1={images.Map1_1}
            image2={images.Map1_2}
            image3={images.Map1_3}
          />
         <LocationViewMolecules dataMap={dataMap.Map1}/>
        </View>
      ) : (
        <View>
          <MapViewMolecules
            image1={images.Map2_1}
            image2={images.Map2_2}
            image3={images.Map2_3}
          />
            <LocationViewMolecules dataMap={dataMap.Map2}/>
        </View>
      )}
    </View>
  );
};

export const MapMoleculse = memo(MapMoleculseComponents);

const styles = StyleSheet.create({});
