import {StyleSheet, View} from 'react-native';
import React,{cloneElement,memo} from 'react';
import {CheckBox} from '../widget';
import { FONTFAMILY, hp, wp,setFontSize,setBorderRadius } from '../../enums/StyeGuide';
import { InputText, TextBox } from '../reusable';

const SocialUrl = ({
  text,
  iconComponent,
  inputPlaceholder,
  checked,
  setChecked,
  onPress,
  socialPlatforms,
  setSocialPlatforms,
}) => {
  const toggleSocialPlatform = () => {
    if (checked) {
      // If checked and the platform exists, filter it out from the array
      const updatedPlatforms = socialPlatforms.filter(
        platform => platform.name !== text
      );
      setSocialPlatforms(updatedPlatforms);
    } else {
      // If unchecked and platform doesn't exist, add it to the array
      const newPlatform = { name: text, svg: cloneElement(iconComponent) };
      setSocialPlatforms([...socialPlatforms, newPlatform]);
    }
    setChecked(!checked);
  };

  return (
    <View>
      <CheckBox
        style={styles.checkBox}
        checked={checked}
        setChecked={toggleSocialPlatform}
        onPress={onPress}
      >
        {cloneElement(iconComponent)}
        <TextBox style={styles.textSocial} text={text} />
      </CheckBox>
      <InputText style={styles.input} placeholder={inputPlaceholder} />
    </View>
  );
};

export default memo(SocialUrl);


const styles = StyleSheet.create({
    textSocial: {
        ...setFontSize(13),
        fontFamily: FONTFAMILY.poppins_medium,
        fontWeight: 'bold',
        marginLeft: wp(4),
      },
      checkBox: {
        marginTop: hp(2),
        marginLeft: wp(3),
      },
      input: {
        marginTop: hp(3),
        ...setBorderRadius(15),
        paddingLeft: wp(4),
      },
});
