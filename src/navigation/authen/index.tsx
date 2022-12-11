import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { APP_SCREEN, AuthenScreenParamsList } from '../screen-type';
import { BottomTab } from '../../components/pages/authen/bottomTab';



const Stack = createNativeStackNavigator<AuthenScreenParamsList>()

const AuthenticationStack = () => {
  return (
    <Stack.Navigator  screenOptions={{headerShown:false,gestureEnabled:false}}  >
    
        <Stack.Screen name={APP_SCREEN.BOTTOM_TAB} component={BottomTab}  />
    </Stack.Navigator>
  )
}

export default AuthenticationStack

const styles = StyleSheet.create({})