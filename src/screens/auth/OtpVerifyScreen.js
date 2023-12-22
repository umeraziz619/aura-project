import {StyleSheet, Alert, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  BackgroundImage,
  GradientButton,
  GraidentLinear,
  TextBox,
} from '../../components';
import {PATH} from '../../assests/images';
import {
  hp,
  commonStyles,
  wp,
  COLOR,
  FONTFAMILY,
  setFontSize,
} from '../../enums/StyeGuide';
import En from '../../locals/En';
import {SCREEN} from '../../enums/AppEnums';
import {OTPInput} from '../../components/custom';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
const OtpVerifyScreen = ({route}) => {
  const navigation = useNavigation();
  const [userOtp, setUserOtp] = useState();
  const {verificationId} = route.params || {};
  console.log('ID: ' + verificationId);
  // console.log(data)

  const handleOTPChange = otp => {
    console.log(otp);
    if (otp.length >= 5) {
      setUserOtp(otp);
    }
  };

  const handleOnSubmit = async () => {
    try {
      if (verificationId) {
        const credential = auth.PhoneAuthProvider.credential(
          verificationId, userOtp // Replace '123456' with the actual OTP code
        );
        const userCredential = await auth().signInWithCredential(credential);
        console.log(userCredential);
        if(userCredential?.additionalUserInfo){
          Alert.alert("Success!!")
          navigation.navigate(SCREEN.ACCOUNTDETAIL);
        }
      } else {
        console.log('No verification ID found.');
      }
    } catch (error) {
      Alert.alert("Invalid OTP Try Again!")
      console.log(error);
    }
    // navigation.navigate(SCREEN.ACCOUNTDETAIL);
  };
  return (
    <GraidentLinear>
      <View style={styles.imgbgContainer}>
        <BackgroundImage src={PATH.imggradient} style={{flex: 1}}>
          <TextBox text="OTP Verification" style={styles.screenname} />
        </BackgroundImage>
      </View>
      <View style={styles.heading}>
        <TextBox text={En.otptext} style={styles.otpTitle} />
      </View>
      <View style={{paddingLeft: wp(7), paddingRight: wp(7)}}>
        <OTPInput onOTPChange={handleOTPChange} />
      </View>
      <GradientButton
        text="Verify"
        // disabled={handleDisable}
        onPress={handleOnSubmit}
        style={styles.graidnetButton}
      />
    </GraidentLinear>
  );
};

export default OtpVerifyScreen;

const styles = StyleSheet.create({
  screenname: {
    marginTop: hp(6),
    marginLeft: wp(5),
    width: wp(70),
    color: COLOR.white,
    ...setFontSize(40),
    fontFamily: FONTFAMILY.poppins_medium,
    fontWeight: '500',
  },
  imgbgContainer: {
    height: hp(35),
  },
  heading: {
    paddingLeft: wp(10),
    paddingRight: wp(10),
    marginBottom: hp(2),
  },
  otpTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
  },
  graidnetButton: {
    marginTop: hp(8),
  },
});
