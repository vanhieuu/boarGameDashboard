import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { AppTheme, useTheme } from "@app/theme";

import ContentView from "@app/components/molecules/contentView";
import { useCallback } from "react";
import { navigate } from "@app/navigation/navigation-services";
import { APP_SCREEN } from "@app/navigation/screen-type";
import { images } from "@app/assets/images";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";

interface ThirdBannerProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThirdBannerOrganisms = ({ setShow }: ThirdBannerProps) => {
  const theme = useTheme();

  async function clickSound() {
  
    const { sound } = await Audio.Sound.createAsync(
      require("../../../../assets/sound/click.mp3")
    );
  
    await sound.playAsync();
  }

  const onPress = useCallback(() => {
    clickSound();
    setShow(true);
  }, []);
  const onPressItem = useCallback(() => {
    clickSound();
    return navigate(APP_SCREEN.LIST_CARDS);
  }, []);

  return (
    <>
      <ContentView
        onPress={onPress}
        image={images.videoImage}
        title="Hướng dẫn chơi Board game"
        subTitle="Video hướng dẫn chi tiết cách chơi Board game Miền ngược"
      />
      <ContentView
        onPress={onPressItem}
        image={images.listCardImage}
        title="Thẻ bài hỗ trợ"
        subTitle="Chi tiết chức năng và cách sử dụng các thẻ bài hỗ trợ trong Board game Miền Ngược"
      />
    </>
  );
};

export const ThirdBanner = React.memo(ThirdBannerOrganisms);

const rootStyles = (theme: AppTheme) =>
  StyleSheet.create({
    root: {
      marginTop: 32,
    },
  });
