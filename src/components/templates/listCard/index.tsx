import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Cards } from "@app/ultils/type";
import { AppTheme, useTheme } from "@app/theme";
import { HeaderBack } from "@app/components/molecules/headerBack/headerBack";
import { pop } from "@app/navigation/navigation-services";
import { ScrollCardOrgan } from "@app/components/organisms/listCards/scrollCard";
import { ModalCards } from "@app/components/organisms/listCards/modalCards";
import { onClick } from "@app/components/molecules/soundEffect/click";

interface ListCardsProps {
  listCards: Cards[];
}

const ListCardTemplates = ({ listCards }: ListCardsProps) => {
  const theme = useTheme();
  const styles = rootStyles(theme);
  const [show, setShow] = useState(false);
  const [items, setItems] = useState<Cards>({
    description: "",
    id: "",
    image: "",
    name: "",
    usingIn: "",
    borderColor:""
  });

  const onPressItems = React.useCallback((value: Cards) => {
    onClick()
    setShow(!show);
    setItems(value);
  }, []);

  const hideDrop = React.useCallback(() => {
    setShow(false);
  }, []);

  return (
    <>
      <View style={styles.root}>
        <HeaderBack onPress={() => pop(1)} title="Thẻ bài hỗ trợ" />
        <ScrollCardOrgan
          theme={theme}
          listCards={listCards}
          onPressItems={onPressItems}
        />
      </View>
      <ModalCards
        show={show}
        setShow={setShow}
        hideDrop={hideDrop}
        items={items}
      />
    </>
  );
};

export const ListCardTemp = React.memo(ListCardTemplates);

const rootStyles = (theme: AppTheme) =>
  StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: theme.colors.background,
      // alignItems:'center'
    },
  });
