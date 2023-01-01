import {  StyleSheet, View, Image } from "react-native";
import React from "react";
import { isEqual } from "lodash";
import { AppTheme, useTheme } from "@app/theme";
import { Text } from "@app/components/atoms/text";
import { images } from "@app/assets/images";


const FirstBannerOrganism = () => {
  const theme = useTheme();
  const styles = rootStyles(theme);

  return (
    <View style={styles.rootView}>
      <View style={styles.contentView}>
        <View style={styles.textView}>
          <View style={styles.firstText}>
            <Text fontSize={13.5} fontWeight="400" color={theme.colors.primary}>
              Trải nghiệm khám phá vùng sơn cước
            </Text>
            <Text textAlign="center" fontSize={13.5}>
              cùng Board game
            </Text>
          </View>

          <View style={{
            zIndex:100000,
            position: "absolute",
            top:16,
            left:23,
            paddingHorizontal:5,
            
          }}>
            <Image
              source={images.firstBanner}
              style={{
                width:200,
                height: 138,
                padding:2
              
                // zIndex:10000
              }}
              resizeMode="contain"
            />
          </View>
        </View>
        <View
          style={{
            // backgroundColor:'red',
            zIndex: -100,
          }}
        >
          <Image
            source={images.imageHome}
            style={styles.imageStyle}
            resizeMode={"contain"}
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
      zIndex: 1000,
    },
    textView: {
      marginVertical: 43,
      // marginLeft: 16,
    },
    firstText: {
      marginBottom: 20,
      position: "absolute",
      zIndex: 1000,
      top: -30,
      left: 5,
    },
    imageStyle: {
      width: 175,
      height: 174 * (221 / 174),
      bottom: 5,
      // backgroundColor:'red',
      left: 210,
      zIndex: -1,
      // right:10
      // marginRight:10
    },
  });
