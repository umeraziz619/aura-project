import React, {useState, memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {TickIcon} from '../../assests/svg';
import {COLOR, SVGSIZE, hp,commonStyles,wp,setBorderRadius} from '../../enums/StyeGuide';
import { TouchableButton } from '../reusable';
const CheckBox = ({children,checked,setChecked, onPress,style}) => {
  
  const toggleCheckbox = () => {
    const newValue = !checked;
    setChecked(newValue);
    onPress(newValue);
  };
  return (
    <View style={[styles.checkboxContainer,style]}>
      <TouchableButton onPress={toggleCheckbox} style={[styles.toogleCheck, checked && {backgroundColor:COLOR.blue_dark}]}>
       {checked && <TickIcon height={15} width={15} />}
      </TouchableButton>
      {children}
    </View>
  );
};

export default memo(CheckBox);

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(4),
  },
  toogleCheck: {
    ...commonStyles.border,
    ...setBorderRadius(5),
    borderColor: COLOR.grey_light,
    height: hp(2.7),
    width: wp(5.5),
    marginRight:wp(4),
    ...commonStyles.center,
  },
});
