import { StyleSheet,  View ,BackHandler} from "react-native";
import React from "react";
import { useTransitionProgress } from "react-native-screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppTheme, useTheme } from "../../../theme";
import {
  APP_SCREEN,
  BottomTabParamsList,
} from "../../../navigation/screen-type";
import BottomBar from "../../organisms/tabBarBottom";
import { HomePage } from "../../pages/authen/home";
import { ListCharacters } from "../../pages/authen/list-characters";
import { ListItems } from "../../pages/authen/list-item";
import { Guide } from "../../pages/authen/guide";

const Tab = createBottomTabNavigator<BottomTabParamsList>();

const BottomTabTemplates = () => {
  const createStyle = styles(useTheme());
  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View style={createStyle.container}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          ...useTransitionProgress,
        
        }}
        tabBar={(props?: any) => <BottomBar {...props} />}
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        
      >
        <Tab.Screen component={HomePage} name={APP_SCREEN.HOME_PAGE} />
        <Tab.Screen
          component={ListCharacters}
          name={APP_SCREEN.LIST_CHARACTERS}
        />
        <Tab.Screen component={ListItems} name={APP_SCREEN.LIST_ITEMS} />
        <Tab.Screen component={Guide} name={APP_SCREEN.GUIDE} />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTabTemplates;

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
  });
