import { StyleSheet, View, TouchableOpacity, Platform,Image } from "react-native";
import React from "react";
import { AppTheme, useTheme } from "@app/theme";
import { images } from "@app/assets/images";


interface ContentViewProps{
    
    onPress:() => void
}

const ContentView = ({onPress}:ContentViewProps) => {
  const theme = useTheme();
  const styles = rootStyles(theme);
  return (
    <TouchableOpacity style={styles.firstView} onPress={onPress}>
      <View style={styles.secondView}>
        <Image
        source={images.startSquare}
        style={[{width:'100%',height:96,paddingBottom:10}]}
        resizeMode='contain'        
        />
      </View>
    </TouchableOpacity>
  );
};

export default ContentView;

const rootStyles = (theme: AppTheme) =>
  StyleSheet.create({
    firstView: {
      height: 123,
      borderWidth: 2,
      justifyContent:'center',
      backgroundColor:theme.colors.backgroundCard,
      ...Platform.select({
        ios: {
          shadowColor: theme.colors.searchBar,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 6,
        },
        android: {
          shadowColor: theme.colors.searchBar,
        },
      }),
    
      marginHorizontal: 16,
      flex: 1,
      marginBottom:32,
      marginTop:10
    },
    secondView:{
        borderWidth:2,
        borderColor:theme.colors.primary,
        marginHorizontal:12,
        marginVertical:11,
        height:100,
        backgroundColor:'transparent',
    }
  });
