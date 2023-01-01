import React from "react";
import { BackHandler } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { APP_SCREEN, AuthenScreenParamsList } from "../screen-type";
import { BottomTab } from "../../components/pages/authen/bottomTab";
import { DetailCharacters } from "../../components/pages/authen/detailChar";
import { DetailItem } from "@app/components/pages/authen/detailItems";
import ListCardPage from "@app/components/pages/authen/listCard";

const Stack = createNativeStackNavigator<AuthenScreenParamsList>();

const AuthenticationStack = () => {
 

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <Stack.Screen
        name={APP_SCREEN.BOTTOM_TAB}
        component={BottomTab}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name={APP_SCREEN.DETAILS_CHARACTERS}
        component={DetailCharacters}
      />
      <Stack.Screen name={APP_SCREEN.DETAIL_ITEMS} component={DetailItem} />
      <Stack.Screen name={APP_SCREEN.LIST_CARDS} component={ListCardPage} />

    </Stack.Navigator>
  );
};

export default AuthenticationStack;
