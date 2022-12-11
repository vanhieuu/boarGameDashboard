import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../../../theme'

const ListCharactersScreens = () => {
  const theme = useTheme()
  return (
    <View style={{
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor:theme.colors.background
    }}>
      <Text>ListCharactersScreens</Text>
    </View>
  )
}

export const ListCharacters = React.memo(ListCharactersScreens)

const styles = StyleSheet.create({})