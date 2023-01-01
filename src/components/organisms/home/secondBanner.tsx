import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useMemo, useState } from "react";

import { AppTheme, useTheme } from "@app/theme";
import { width } from "@app/ultils/type";

import { icons } from "@app/assets/icons";
import { dataEvent } from "@app/ultils/event";
import * as Linking from "expo-linking";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";

const ITEM_SIZE = width;
const ITEM_SPACING = (width - ITEM_SIZE) / 2;
const ITEM_HEIGHT = width * (156 / 375);

const SecondBannerOrganism = () => {
  const theme = useTheme();
  const styles = rootStyles(theme);
  const [sound, setSound] = React.useState<Sound>();

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [indexScroll, setIndex] = useState(0);
  const [swipeEffect, setSwipeEffect] = useState<Sound>();

  const swipe = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../../assets/sound/swipe.mp3")
    );
    setSwipeEffect(sound);

    return await sound.playAsync();
  };

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../../assets/sound/click.mp3")
    );
    console.log("play");
    setSound(sound);

    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  React.useMemo(() => {
    swipe()
    return swipeEffect
      ? () => {
          swipeEffect.unloadAsync();
          console.log("unload");
        }
      : undefined;
  }, [indexScroll]);

  return (
    <View style={styles.rootView}>
      <Animated.FlatList
        data={dataEvent}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        initialScrollIndex={1}
        snapToInterval={ITEM_SIZE}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true },
        
        )  }
        onMomentumScrollEnd={(ev) => {
          const index = Math.round(ev.nativeEvent.contentOffset.x / ITEM_SIZE);
          setIndex(index);
        }}
        contentContainerStyle={{ paddingHorizontal: ITEM_SPACING }}
        style={{ flexGrow: 0, zIndex: 1000 }}
        decelerationRate={"fast"}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
            (index + 1) * ITEM_SIZE,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp",
          });
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.7, 1, 0.7],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              style={{
                justifyContent: "center",
                opacity,
                transform: [{ scale }],
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => {
                  // Linking.openURL(item.linking),
                  playSound();
                }}
              >
                <Image
                  source={item.image}
                  style={{
                    width: ITEM_SIZE,
                    height: ITEM_HEIGHT,
                  }}
                />
              </TouchableWithoutFeedback>
            </Animated.View>
          );
        }}
      />
      <View style={{ flexDirection: "row" }}>
        {dataEvent.length > 0 &&
          dataEvent?.map((item, index) => {
            return (
              <View
                key={item.id}
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <View
                  style={[
                    styles.pagingNation,
                    {
                      backgroundColor:
                        index === indexScroll
                          ? theme.colors.searchBar
                          : "transparent",
                    },
                  ]}
                />
              </View>
            );
          })}
      </View>
      <View
        style={{
          marginTop: 32,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 14 }}>Xem thêm để hiểu cách chơi nhé!</Text>
        <Animated.Image
          source={icons.iconBack}
          resizeMode="contain"
          style={[
            styles.arrowStyle,
            {
              transform: [
                {
                  rotate: "-90deg",
                },
              ],
            },
          ]}
        />
      </View>
    </View>
  );
};

export const SecondBanner = React.memo(SecondBannerOrganism);

const rootStyles = (theme: AppTheme) =>
  StyleSheet.create({
    rootView: {
      marginTop: 32,
      alignItems: "center",
      justifyContent: "center",
      // backgroundColor: theme.colors.primary,
    },
    pagingNation: {
      width: 8,
      height: 8,
      // borderRadius: 30,
      marginTop: 7,
      borderWidth: 2,
      borderColor: theme.colors.searchBar,
      marginHorizontal: 7,
    },
    arrowStyle: {
      width: 25,
      height: 25,
      tintColor: theme.colors.primary,
      marginTop: 10,
    },
  });
