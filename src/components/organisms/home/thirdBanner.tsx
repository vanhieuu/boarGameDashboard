import { StyleSheet } from 'react-native'
import React from 'react'
import { AppTheme, useTheme } from '@app/theme'

import ContentView from '@app/components/molecules/contentView'

interface ThirdBannerProps{
  setShow:React.Dispatch<React.SetStateAction<boolean>>
}

const ThirdBannerOrganisms = ({setShow}:ThirdBannerProps) => {
    const theme = useTheme()
    
  return (
    <>
    <ContentView setShow={setShow}/>
    <ContentView setShow={setShow}/>
    
    </>

   
  )
}

export const ThirdBanner  = React.memo(ThirdBannerOrganisms)

const rootStyles =(theme:AppTheme)  => StyleSheet.create({
    root:{
        marginTop:32
    }
})