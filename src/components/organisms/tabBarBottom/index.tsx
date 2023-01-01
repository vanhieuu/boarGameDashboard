import {  StyleSheet } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { navigationRef } from "../../../navigation/navigation-services";
import { AppTheme, useTheme } from "../../../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabItemsProps } from "./../../molecules/tabItem/type";
import { TabItems } from "../../molecules/tabItem/tabItems";
import { onClick } from "@app/components/molecules/soundEffect/click";

const BottomBar = (props: BottomTabBarProps) => {
  const { state, navigation } = props;
  const theme = useTheme();
  const pressNavigateTab = React.useCallback(
    (curTab: any) => async () => {
      const previousRouteName = navigationRef?.current?.getCurrentRoute()?.name;
      onClick()
      navigation.navigate(state.routes[curTab].name);
    },
    [navigation, state]
  );

  const itemTabBar: TabItemsProps[] = [
    {
      onPress: pressNavigateTab(0),
      index: 0,
      source: "icHomeInActive",
      stateIndex: state.index,
      textTitle: "Trang chủ",
      sourceActive:'icHomeActive'
    },
    {
      onPress: pressNavigateTab(1),
      index: 1,
      source: "icCharacterInActive",
      stateIndex: state.index,
      textTitle: "Nhân Vật",
      sourceActive:'icUserActive'
    },
    {
      onPress: pressNavigateTab(2),
      index: 2,
      source: "icItemInActive",
      stateIndex: state.index,
      textTitle: "Vật phẩm",
      sourceActive:'icItemActive'
    },
    {
      onPress: pressNavigateTab(3),
      index: 3,
      source: "icWorldInActive",
      stateIndex: state.index,
      textTitle: "Bản đồ",
      sourceActive:'icWorldActive'
    },
  ];

  return (
    <SafeAreaView style={styles(theme).container} edges={["right", "left"]}>
      {itemTabBar.map((item, index) => {
        return (
          <TabItems
            key={index}
            index={index}
            onPress={item.onPress}
            source={item.source}
            stateIndex={item.stateIndex}
            textTitle={item.textTitle}
            sourceActive={item.sourceActive}
          />
        );
      })}
    </SafeAreaView>
  );
};

export default BottomBar;

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-around",
      paddingHorizontal: 10,
      width: "100%",
    },
  });
