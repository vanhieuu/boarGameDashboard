import { Image, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { AppTheme } from "@app/theme";
import { Map, width } from "@app/ultils/type";
import Modal from "react-native-modal";

interface ModalProps {
  item: Map;
  show: boolean;
  hideDrop: () => void;
  theme: AppTheme;
}

const ModalItemMolecules = ({ hideDrop, item, show, theme }: ModalProps) => {
  const styles = rootStyles(theme);
  return (
    <View style={styles.rootView}>
      <Modal
        isVisible={show}
        onBackButtonPress={hideDrop}
        onBackdropPress={hideDrop}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.modalRootView}
        backdropColor={theme.colors.darkBlue}
        backdropOpacity={0.85}
      >
        <View style={styles.modalView}>
          <Image
            source={{ uri: item.shadowImage }}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.rootContentView}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <View style={styles.contentView}>
              <Text style={styles.contentTitle}>Mô tả:</Text>
              <Text style={styles.textContent}>{item.description}</Text>
              <Text style={styles.contentTitle}>Chức năng:</Text>
              <Text style={styles.textContent}>{item.function}</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export const ModalLocation = memo(ModalItemMolecules);

const rootStyles = (theme: AppTheme) =>
  StyleSheet.create({
    modalRootView: {
      //   width:'100%',
      height: "60%",
      backgroundColor: "transparent",
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      width: width - 32,
      height: 480,
      backgroundColor: theme.colors.backgroundOpacity,
      // opacity: 0.8,
      justifyContent: "center",
      backfaceVisibility: "visible",
      marginHorizontal: 15,
      alignItems: "center",
      paddingBottom: 32,
      //   flex:1
    },
    rootView: { justifyContent: "center", alignItems: "center" },
    image: {
      width: 180,
      height: 180,
      backgroundColor: theme.colors.transparent,
    },
    contentView: {
      marginHorizontal: 16,
      marginTop: 14,
    },
    contentTitle: { fontWeight: "700", marginRight: 6 },
    textContent: { fontSize: 14, fontWeight: "200", textAlign: "justify" },
    rootContentView: {
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 16,
    },
  });
