import {
  Animated,
  Dimensions,
  ImageBackground,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import React, { memo, useEffect, useRef } from "react";
import { AppTheme, useTheme } from "../../../../theme";

import { images } from "../../../../assets/images";
import { navigate } from "../../../../navigation/navigation-services";
import { APP_SCREEN } from "../../../../navigation/screen-type";
const { width, height } = Dimensions.get("screen");

const heightImage = width * (640 / 360);

const SplashScreens = () => {
  const theme = useTheme();
  const styles = rootStyles(theme);
  const cloud1AnimationValue = useRef(new Animated.Value(0)).current;
  const cloud2AnimationValue = useRef(new Animated.Value(0)).current;
  const logoAnimatedValue = useRef(new Animated.Value(0)).current;
console.log(width,height,'size',Platform.OS)
  useEffect(() => {
    Animated.timing(cloud1AnimationValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    Animated.timing(cloud2AnimationValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    Animated.timing(logoAnimatedValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() =>{
     
    });
  }, []);

  const cloud1TranslateX = cloud1AnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [width * 0.6 - width * 0.8, 0],
  });
  const cloud2TranslateX = cloud2AnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [width * 0.8 - width * 0.6, 0],
  });
 

  return (
    <ImageBackground
      source={images.background}
      style={[styles.imageBackGroundStyle,{
        ...StyleSheet.absoluteFillObject
      }]}
      resizeMode="cover"
    >
     
      <Animated.Image
        source={images.Cloud2}
        style={[styles.cloud2Style,{
          opacity: cloud2AnimationValue,
          transform: [
            {
              translateX: cloud1TranslateX,
            },
          ],
        }]}
        resizeMode="contain"
      />
      <View style={styles.LogoViewStyle}>
        <Animated.Image
          source={images.Logo}
          style={[styles.logoStyle, { opacity: logoAnimatedValue }]}
          resizeMode="contain"
        />
      </View>

      <Animated.Image
        source={images.Cloud1}
        style={[
          styles.imageCloud1,
          {
            transform: [
              {
                translateX: cloud2TranslateX,
              },
            ],
          },
        ]}
        resizeMode="contain"
      />
    </ImageBackground>
  );
};

export const Splash = memo(SplashScreens);

const rootStyles = (theme: AppTheme) =>
  StyleSheet.create({
    root: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    imageCloud1: {
      width: 160,
      height: 80,
      opacity: 1,
      position: "absolute",
      top: 220,
      left: 200,
      ...Platform.select({
        android:{
          top:height/3.2,
          left:210
        }
      })
    
    },
    logoStyle: {
      width: 416,
      height: 212,
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      // zIndex: 800,
    },
    LogoViewStyle: {
      justifyContent: "center",
      alignItems: "center",
      zIndex: 800,
    },
    imageBackGroundStyle: {
      width: "100%",
      // height: ,
      justifyContent: "center",
      alignItems: "center",
      // aspectRatio:0.6,
      
      
    },
    cloud2Style:{
      width: 210,
      height: 100,
      position: "absolute",
      bottom: 210,
      zIndex: 1000,
      left: 30,
      ...Platform.select({
        android:{
          bottom:(height/3.4),
          
        }
      })
    }
  });
