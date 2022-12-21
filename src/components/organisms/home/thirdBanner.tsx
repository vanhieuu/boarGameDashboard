import { StyleSheet } from "react-native";
import React from "react";
import { AppTheme, useTheme } from "@app/theme";

import ContentView from "@app/components/molecules/contentView";
import { useCallback } from "react";
import { navigate } from "@app/navigation/navigation-services";
import { APP_SCREEN } from "@app/navigation/screen-type";

interface ThirdBannerProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThirdBannerOrganisms = ({ setShow }: ThirdBannerProps) => {
  const theme = useTheme();

  const onPress = useCallback(() => {
    setShow(true);
  }, []);
  const onPressItem = useCallback(() => {
    return navigate(APP_SCREEN.LIST_CARDS);
  }, []);

  return (
    <>
      <ContentView onPress={onPress} />
      <ContentView onPress={onPressItem} />
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
