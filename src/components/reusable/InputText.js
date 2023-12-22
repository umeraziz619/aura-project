import {StyleSheet, TextInput, View} from 'react-native';
import React, {memo} from 'react';
import {COLOR, hp, wp,commonStyles,setBorderRadius,setFontSize} from '../../enums/StyeGuide';
import {LineIcon} from '../../assests/svg';
const InputText = props => {
  const {
    placeholder,
    iconComponent,
    value,
    onChangeText,
    style,
    keyboard,
    isPassword,
    multiline,
    inputStyle,
    placeholderTextColor,
    iconSize,
  } = props;
  return (
    <View style={[styles.container, style]}>
      {iconComponent &&
        React.cloneElement(iconComponent, {width: iconSize, height: iconSize})}
      {iconComponent && <LineIcon style={styles.lineIcon} />}
      <TextInput
        style={[styles.inputContainer, inputStyle]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboard}
        secureTextEntry={isPassword}
        multiline={multiline}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};
export default memo(InputText);

const styles = StyleSheet.create({
  container: {
    width: wp(85),
    ...commonStyles.border,
    borderColor: COLOR.grey_light,
    ...setBorderRadius(23),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height:hp(5.5),
  },
  inputContainer: {
    color:COLOR.grey_light,
    ...commonStyles.flexFull,
    marginLeft: wp(1),
    ...setFontSize(15)
  },
  lineIcon:{
    marginLeft: wp(2.7)
  }
});
