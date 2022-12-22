import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { AppTheme, useTheme } from "@app/theme";
import { Items } from "@app/ultils/type";
import { HeaderBack } from "@app/components/molecules/headerBack/headerBack";
import { ImageView } from "@app/components/organisms/detailCharacters/ImageView";
import { NameView } from "@app/components/organisms/detailCharacters/nameView";
import { TypeViewOrgan } from "@app/components/organisms/detailCharacters/typeView";
import ObtainItemViewOrganisms from "@app/components/organisms/detailCharacters/obtainView";
import DescriptionView from "@app/components/organisms/detailCharacters/descriptionView";
import { pop } from "@app/navigation/navigation-services";

interface DetailItemsTemp {
  items: Items;
}

const DetailItemsTemplate = ({ items }: DetailItemsTemp) => {
  const theme = useTheme();
  const styles = rootStyle(theme);
  // const items =
  return (
    <View style={styles.rootStyle}>
      <HeaderBack title="Chi tiết vật phẩm" onPress={() => pop(1)} />
      <ScrollView
        style={styles.imageContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentView}>
          <ImageView image={items.image} />
          <NameView name={items.name} />
          <TypeViewOrgan map={items.usingIn} type={items.type} />
          <ObtainItemViewOrganisms items={items} />
          <DescriptionView
            description={items.description}
            irlImage={items.irlImage}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export const DetailItemsTemp = React.memo(DetailItemsTemplate);

const rootStyle = (theme: AppTheme) =>
  StyleSheet.create({
    rootStyle: {
      justifyContent: "center",
      backgroundColor: theme.colors.background,
    },
    imageContent: {
      backgroundColor: theme.colors.background,
      marginTop: 32,
      marginBottom: 40,
      marginHorizontal: 16,
    },
    contentView: {
      justifyContent: "center",
      alignItems: "center",
    },
  });
