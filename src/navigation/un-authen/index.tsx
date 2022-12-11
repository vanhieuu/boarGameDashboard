import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { APP_SCREEN, UnAuthenParamsList } from '../screen-type';
import { Splash } from '../../components/pages/unAuthen/splash';


const UnAuthenStack  = createNativeStackNavigator<UnAuthenParamsList>()

const UnAuthentication = () => {
  return (
    <UnAuthenStack.Navigator  screenOptions={{ headerShown: false, gestureEnabled: true }}>
        <UnAuthenStack.Screen
        name={APP_SCREEN.SPLASH}
        component={Splash}
        
        />
    </UnAuthenStack.Navigator>
  )
}

export default UnAuthentication

const styles = StyleSheet.create({})