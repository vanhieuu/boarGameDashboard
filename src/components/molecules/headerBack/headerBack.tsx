import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { Icons } from '@app/components/atoms/icon/icons'
import { AppTheme, useTheme } from '@app/theme';
import Constants from "expo-constants";
import { height } from '@app/ultils/type';

interface HeaderBackProps{
  onPress:() => void;
  title:string
}


const HeaderBackMolecules = ({onPress,title}:HeaderBackProps) => {
    const theme = useTheme();
  const styles = rootStyle(theme);
  return (
    <View style={styles.headerView}>
        <TouchableOpacity style={styles.borderIcon} onPress={onPress}>
          <Icons icon="iconBack" size={20} resizeMode="contain" />
        </TouchableOpacity>

        <View style={styles.titleView}>
          <Text style={styles.textTitleStyle}>{title}</Text>
        </View>
      </View>
  )
}

export const HeaderBack = memo(HeaderBackMolecules)

const rootStyle =(theme:AppTheme) =>StyleSheet.create({
    headerView: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: Constants.statusBarHeight + (height > 800 ? 10 : 0),
      },
  
      borderIcon: {
        borderWidth: 2,
        padding: 2,
        marginLeft: 10,
        borderColor: theme.colors.searchBar,
      },
      titleView: {
        //   flex: 1,
        marginLeft: 100,
        justifyContent: "center",
        alignItems: "center",
      },
      textStyle: {
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 20,
        fontFamily: "Roboto-Bold",
      },
      textTitleStyle: {
        fontSize: 18,
        fontWeight: "600",
        lineHeight: 20,
        fontFamily: "Roboto-Bold",
        color:theme.colors.textTab
      },
})