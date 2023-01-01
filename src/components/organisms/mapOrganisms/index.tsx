import {

  ScrollView,
  StyleSheet,
  
} from "react-native";
import React from "react";
import { AppTheme } from "../../../theme";
import { MapMoleculse } from "../../molecules/map";
import TabViewMapMolecules from "./../../molecules/map/tabView";
import {DataMap} from '@app/ultils/type'
interface MapProps {
  theme: AppTheme;
  location:DataMap
}

const MapOrganismsComponents = ({ theme ,location}: MapProps) => {
  const [onPressItem, setOnPressItem] = React.useState("MAP1");

  return (
    <ScrollView style={styles(theme).rootScrollView}>
      <TabViewMapMolecules
        onPressItem={onPressItem}
        setOnPressItem={setOnPressItem}
      />
      <MapMoleculse currentScreen={onPressItem} dataMap={location} />
    </ScrollView>
  );
};

export const MapOrganisms = React.memo(MapOrganismsComponents);

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    rootScrollView: {
      // marginTop: 36,
      backgroundColor: theme.colors.background,
      flex: 1,
    },
  });
