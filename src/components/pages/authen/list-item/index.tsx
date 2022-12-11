import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../../../theme'

const ListItemsScreens = () => {
  const theme = useTheme()
  return (
    <View
    style={{
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor:theme.colors.background
    }}
    >
      <Text>ListItemsScreens</Text>
    </View>
  )
}

export const  ListItems = React.memo(ListItemsScreens)

const styles = StyleSheet.create({})