import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextBox, TouchableButton } from '..'
import { BackArrow } from '../../assests/svg'
import { COLOR,FONTFAMILY,hp,setBorderRadius,setFontSize, wp } from '../../enums/StyeGuide'

const ScreenHeader = () => {
  return (
    <View style={styles.container}>
        <TouchableButton>
            <BackArrow height={20} width={20} style={{marginTop:hp(0.5),marginLeft:wp(4),marginRight:wp(5)}}/>
        </TouchableButton>
        <TextBox text="Messages" style={styles.text} />
    </View>
  )
}

export default ScreenHeader

const styles = StyleSheet.create({
    container:{
        padding:8,
        flexDirection:'row',
        backgroundColor:COLOR.white,
        borderBottomWidth:1,
        borderColor:COLOR.grey_extralight,
    },
    text:{
        color:COLOR.black,
        ...setFontSize(18),
        fontFamily:FONTFAMILY.poppins_bold
    }
})