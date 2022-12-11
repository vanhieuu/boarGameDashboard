import { StyleSheet, TouchableOpacity, StyleProp,ImageStyle,Image } from "react-native";
import React, { useMemo } from "react";
import { IconProps } from "./type";
import { useTheme } from "../../../theme";
import { enhance } from "../../../ultils/handle";
import { icons } from "../../../assets/icons";

const SIZE = 24;

const IconComponents = ({
  icon,
  color,
  colorTheme,
  onPress,
  resizeMode,
  size = SIZE,
}: IconProps) => {
  const style = useMemo<StyleProp<ImageStyle>>(
    () => enhance([{ width: size, height: size }]),
    [size]
  );

  return (
    <TouchableOpacity
      disabled={typeof onPress !== "function"}
      onPress={onPress}
    >
      <Image
        style={style}
        // tintColor={colorTheme ? theme.colors[colorTheme] : color}
        resizeMode={resizeMode}
        source={icons[icon]}
      />
    </TouchableOpacity>
  );
};

export const Icons = React.memo(IconComponents);

const styles = StyleSheet.create({});
