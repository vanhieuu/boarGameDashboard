import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { isEqual } from 'lodash';




const DetailItemScreen = () => {
  return (
    <View>
      <Text>DetailItemScreen</Text>
    </View>
  )
}

export const DetailItem = React.memo(DetailItemScreen,isEqual)

const styles = StyleSheet.create({})