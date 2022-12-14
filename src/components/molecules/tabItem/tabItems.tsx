import { StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { AppTheme } from "../../../theme";
import { TabItemsProps } from "./type";
import { useTheme } from "./../../../theme/index";
import { Icons } from "../../atoms/icon/icons";

const TabItemsMolecules = ({
  index,
  onPress,
  source,
  stateIndex,
  textTitle,
  sourceActive
}: TabItemsProps) => {
  const theme = useTheme();
  
  return (
    <TouchableOpacity style={styles(theme).item} onPress={onPress}>
      {stateIndex === index ? (
        <Icons icon={sourceActive} size={ sourceActive === 'icHomeActive' ?   34 :30} colorTheme={"primary"} resizeMode='contain' />
      ) : (
        <Icons icon={source} size={source === 'icHomeInActive' ? 34 :30} resizeMode='contain' colorTheme="darkBlue" />
      )}
      <Text
        style={[
          styles(theme).txtItem,
          {
            color:
              stateIndex === index ? theme.colors.primary : theme.colors.textTab,
              fontWeight:'bold'
          },
        ]}
      >
        {textTitle}
      </Text>
    </TouchableOpacity>
  );
};

export const TabItems = React.memo(TabItemsMolecules);

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    item: {
      alignItems: "center",
      justifyContent: "center",
      width: "20%",
    
    },
    txtItem: {
      // fontFamily: "Quicksand",
      color: theme.colors.text,
      textAlign: "center",
      marginBottom:10,
      marginTop:5
    },
  });
