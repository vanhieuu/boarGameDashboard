import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useCallback, useState } from "react";
import { Map } from "@app/ultils/type";
import { AppTheme, useTheme } from "@app/theme";
import { ModalLocation } from "./ModalItem";
import { onClick } from "../soundEffect/click";

interface LocationViewMoleculesProps {
  dataMap: Map[];
}

const LocationViewMolecules = ({ dataMap }: LocationViewMoleculesProps) => {
  const theme = useTheme();
  const styles = rootStyles(theme);
  const [show, setShow] = useState(false);
  const [items, setItems] = useState<Map>({
    name: "",
    id: "",
    image: "",
    function: "",
    description: "",
    LocationId: "",
    shadowImage:""
  });

  const hideDrop = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <>
      <View style={{ marginTop: 32 }}>
        <View style={styles.headerContent}>
          <Text style={styles.textStyle}>Các địa danh trên bàn chơi </Text>
        </View>
        <View style={styles.rootView}>
          {dataMap.map((item, index) => {
            return (
              <TouchableOpacity key={item.name} onPress={() => {
                onClick()
                setShow(true)
                setItems(item)
              }}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.imageStyle}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <ModalLocation
        hideDrop={hideDrop}
        item={items}
        show={show}
        theme={theme}
      />
    </>
  );
};

export default LocationViewMolecules;

const rootStyles = (theme: AppTheme) =>
  StyleSheet.create({
    rootView: {
      flexDirection: "row",
      flexWrap: "wrap",
      margin: 5,
      marginTop: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    imageStyle: {
      width: 90,
      height: 80,
      margin: 5,
      marginBottom: 10,
    },
    headerContent: { justifyContent: "center", alignItems: "center" },
    textStyle: {
      fontSize: 16,
      fontWeight: "700",
      color: theme.colors.darkBlue,
    },
  });
