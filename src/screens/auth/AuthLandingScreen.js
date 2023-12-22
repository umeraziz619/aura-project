import {StyleSheet, View} from 'react-native';
import React from 'react';
import {hp, FONTFAMILY, COLOR,setFontSize, wp,commonStyles,setBorderRadius} from '../../enums/StyeGuide';
import {SCREEN} from '../../enums/AppEnums';
import { TouchableButton ,GradientButton,TextBox,BackgroundImage} from '../../components';
import { PATH } from '../../assests/images';
import En from '../../locals/En';
const AuthLandingScreen = ({navigation}) => {
  return (
    <BackgroundImage
      src={PATH.bgmen}
      style={styles.container}>
      <TextBox style={styles.auralogo} text={En.app_name} />
      <View>
        <GradientButton
          style={styles.button}
          text={En.login}
          onPress={() => navigation.navigate(SCREEN.LOGIN)}
        />
        <TouchableButton style={styles.registerButton} onPress={()=>navigation.navigate(SCREEN.USERTYPE)}>
          <TextBox style={styles.registerText} text={En.register} />
        </TouchableButton>
      </View>
    </BackgroundImage>
  );
};

export default AuthLandingScreen;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.flexFull,
    ...commonStyles.endCenter,
  },
  auralogo: {
    color: COLOR.white,
    position: 'absolute',
    right: wp(3),
    top: hp(3),
    color: COLOR.white,
    fontFamily: FONTFAMILY.poppins_semibold,
    ...setFontSize(20)
  },
  button: {
    height: hp(7),
    marginBottom: hp(2),
    ...setBorderRadius(30)
  },
  registerButton:{
    ...commonStyles.center,
    borderWidth:1,
    borderColor:COLOR.white,
    height: hp(7),
    marginBottom: hp(2),
    ...setBorderRadius(30)
  },
  registerText:{
    color:COLOR.white,
    fontFamily:FONTFAMILY.poppins_regular,
    ...setFontSize(20),
  }
});
