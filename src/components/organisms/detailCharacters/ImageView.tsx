import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { images } from "@app/assets/images";
import { AppTheme, useTheme } from "@app/theme";

interface ImageViewProps {
  image: string;
}

const ImageViewOrganism = ({ image }: ImageViewProps) => {
  const theme = useTheme();
  const styles = rootStyle(theme);

  return (
    <ImageBackground
      source={images.borderView}
      style={styles.imageBackground}
      resizeMode="contain"
    >
      <Image
        source={{ uri: image }}
        style={styles.imageStyle}
        resizeMode="contain"
      />
    </ImageBackground>
  );
};

export const ImageView = memo(ImageViewOrganism);

const rootStyle = (theme: AppTheme) =>
  StyleSheet.create({
    imageBackground: {
      width: 212,
      height: 201,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 16,
      // borderRadius:50
    },
    imageStyle:{
        width: 130,
        height: 130,
      }
  });
