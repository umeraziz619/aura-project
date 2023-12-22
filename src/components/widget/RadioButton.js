import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextBox, TouchableButton } from '../reusable';
import {COLOR, hp,setHeight,setWidth,setBorderRadius,setFontSize,wp,} from '../../enums/StyeGuide';
const RadioButton = ({ options, selectedOption, onSelect,style }) => {
  return (
    <View style={style}>
      {options.map((option) => (
        <TouchableButton
          key={option.id}
          style={styles.radioButton}
          onPress={() => onSelect(option)}
        >
          <View style={styles.radioCircle}>
            {selectedOption === option.id && <View style={styles.selectedRadioCircle} />}
          </View>
          <TextBox style={styles.radioLabel} text={option.label}/>
        </TouchableButton>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(0.5),
  },
  radioCircle: {
    ...setWidth(20),
    ...setHeight(20),
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLOR.blue_dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadioCircle: {
    ...setWidth(10),
    ...setHeight(10),
    ...setBorderRadius(5),
    backgroundColor: COLOR.blue_dark,
  },
  radioLabel: {
    marginLeft: wp(4),
    ...setFontSize(16),
  },
});

export default memo(RadioButton);
