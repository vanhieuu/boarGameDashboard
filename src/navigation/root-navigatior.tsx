import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { APP_SCREEN, RootStackParamsList } from './screen-type';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import UnAuthentication from './un-authen';
import AuthenticationStack from './authen';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './navigation-services';
import { MyAppTheme } from '../theme';


const RootStack = createNativeStackNavigator<RootStackParamsList>();


const RootNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef} theme={MyAppTheme['default']}  >
        <RootStack.Navigator 
        initialRouteName={APP_SCREEN.UNAUTH}
        screenOptions={{headerShown:false,gestureEnabled:false}}
        >
            <RootStack.Screen  name={APP_SCREEN.UNAUTH} component={UnAuthentication}  />
            <RootStack.Screen  name={APP_SCREEN.AUTHEN} component={AuthenticationStack}   />
        </RootStack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})