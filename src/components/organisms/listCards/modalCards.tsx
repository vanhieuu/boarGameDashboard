import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { Cards, height, width } from "@app/ultils/type";
import { useTheme, AppTheme } from "@app/theme";
import item from "@app/assets/store/api/slice/item";

interface ModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  items: Cards;
  hideDrop: () => void;
}

const IMAGE_WIDTH = 152;

const ModalCardsOrganisms = ({
  show,
  setShow,
  hideDrop,
  items,
}: ModalProps) => {
  const theme = useTheme();
  const styles = rootStyles(theme);
  return (
    <View style={styles.root}>
      <Modal
        isVisible={show}
        onBackButtonPress={hideDrop}
        onBackdropPress={hideDrop}
        backdropOpacity={0.85}
        backdropColor={theme.colors.darkBlue}
        style={styles.modalRootView}
      >
        <View style={styles.modalView}>
          <Image
            source={{ uri: items.image }}
            style={styles.imageStyle}
            resizeMode="contain"
          />
          <View style={[styles.textView, { borderColor: items.borderColor }]}>
            <Text style={[styles.textUsing, { color: items.borderColor }]}>
              {items.usingIn}
            </Text>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.textName}>{items.name}</Text>
            <Text
              style={{
                textAlign: "justify",
                // letterSpacing: 1.2,
                fontWeight: "300",
                fontSize: 14,
                marginHorizontal: 32,
                color: theme.colors.darkBlue,
              }}
            >
              {items.description}
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export const ModalCards = React.memo(ModalCardsOrganisms);

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
      height: 493,
      backgroundColor: "#FFF0E1E5",
      // opacity: 0.8,
      justifyContent: "center",
      backfaceVisibility: "visible",
      marginHorizontal: 15,
      alignItems: "center",
    //   flex:1
    },
    imageStyle: {
      width: 152,
      height: 228,
      aspectRatio: 1,
    },
    textView: {
      borderWidth: 2,
      marginTop: 32,
      paddingVertical: 10,
      backgroundColor: theme.colors.backgroundCard,
      marginBottom: 32,
      marginHorizontal:32,
      width:320,
      justifyContent:'center',
      alignItems:'center'
    //   flex:1
    
    },
    textUsing: { fontSize: 14, fontWeight: "700" },
    root: {
      justifyContent: "center",
      alignItems: "center",
      // flex:1
    },
    textName: {
      fontSize: 16,
      fontWeight: "700",
      marginBottom: 14,
    },
  });
