import { Platform, StyleSheet, View,Image } from "react-native";
import React from "react";
import { isEqual } from "lodash";
import { AppTheme, useTheme } from "@app/theme";
import { Text } from "@app/components/atoms/text";
import { images } from "@app/assets/images";
import { width } from '@app/ultils/type';



const FirstBannerOrganism = () => {
  const theme = useTheme();
  const styles = rootStyles(theme);

  return (
    <View style={styles.rootView}>
      <View style={styles.contentView}>
        <View style={styles.textView}>
          <View style={styles.firstText}>
            <Text fontSize={16}>Cùng Board game </Text>
            <Text
              fontSize={18}
              color={theme.colors.primary}
              fontWeight="800"
              fontFamily={Platform.OS === "ios" ? "bold" : "primary"}
              //   fontWeight=''
            >
              MIỀN NGƯỢC
            </Text>
          </View>

          <View>
            <Text fontSize={16}>Trải nghiệm khám phá </Text>
            <Text fontSize={16}>vùng sơn cước </Text>
          </View>
        </View>
        <View style={{
            // backgroundColor:'red'
        }}>
            <Image
            source={images.imageHome}
            style={styles.imageStyle}
            resizeMode={'center'}
            />
        </View>
      </View>
      
    </View>
  );
};

export const FirstBanner = React.memo(FirstBannerOrganism, isEqual);

const rootStyles = (theme: AppTheme) =>
  StyleSheet.create({
    rootView: {
      flex: 1,
    },
    contentView: {
      flex: 1,
      marginHorizontal: 16,
      height: 204,
      flexDirection: "row",
      borderBottomWidth: 2,
      borderBottomColor: theme.colors.searchBar,
      zIndex:1000
    },
    textView: {
      marginVertical: 43,
      marginLeft: 16,
    },
    firstText: {
      marginBottom: 20,
    },
    imageStyle:{
        width:174,
        height:174 * (221/174)
    }
  });
