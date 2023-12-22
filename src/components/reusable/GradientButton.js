import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {LinearGradient} from 'react-native-linear-gradient';
// import { SPACING, BorderRadius, wp} from '../../../data/StyleGuides';
import {
  COLOR,
  wp,
  hp,
  FONTFAMILY,
  commonStyles,
  setBorderRadius,
  setFontSize,
} from '../../enums/StyeGuide';
import TouchableButton from './TouchableButton';

const GradientButton = props => {
  const {
    text,
    style,
    buttonText,
    onPress,
    iconComponent,
    disabled=false
  } = props;
  let buttonColors = !disabled
    ? [COLOR.blue_dark, COLOR.blue_light]
    : [COLOR.grey_extralight,COLOR.grey_extralight];
  return (
    <TouchableButton onPress={onPress} disabled={disabled}>
      <LinearGradient
        style={[styles.container, style]}
        colors={buttonColors}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        {iconComponent &&
        React.cloneElement(iconComponent)}
        <Text style={[styles.text, buttonText]}>{text}</Text>
      </LinearGradient>
    </TouchableButton>
  );
};
export default memo(GradientButton);

const styles = StyleSheet.create({
  container: {
    height: hp(6),
    width: wp(90),
    ...commonStyles.center,
    alignSelf: 'center',
    ...setBorderRadius(20),
  },
  text: {
    color: COLOR.white,
    fontFamily: FONTFAMILY.poppins_medium,
    ...setFontSize(20),
  },
});
