import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextBox from './TextBox'
import { FONTFAMILY,setFontSize } from '../../enums/StyeGuide'
const Label = ({text,style,textStyle}) => {
  return <View style={style}>
    <TextBox text={text} style={[styles.text,textStyle]} />
  </View>
}

export default Label

const styles = StyleSheet.create({
    text:{
        ...setFontSize(13),
        fontFamily:FONTFAMILY.poppins_medium,
        fontWeight:'bold'
    }
})