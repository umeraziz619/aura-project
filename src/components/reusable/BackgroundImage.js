
import {ImageBackground} from 'react-native'
import React,{memo} from 'react'

const BackgroundImage = ({children,src,style}) => {
  return <ImageBackground source={src} style={style}>
    {
        children
    }
  </ImageBackground>
}

export default memo(BackgroundImage)
