
import React, { useState, useRef,memo } from 'react';
import { View, TextInput, StyleSheet, Button, Alert } from 'react-native';
import {
  hp,
  commonStyles,
  wp,
  setBorderRadius,
  COLOR,
  FONTFAMILY,
  setFontSize
} from '../../enums/StyeGuide';
const OTPInput = ({ onOTPChange }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const otpInputs = Array(6).fill(0);
  const otpInputRefs = useRef(otpInputs.map(() => React.createRef()));

  const handleOTPChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOtp(newOTP);
    if (value && index < otp.length - 1) {
      otpInputRefs.current[index + 1].focus();
    }
    onOTPChange(newOTP.join(''));
  };
  const handleBackspace = (index, value) => {
    if (!value && index > 0) {
      const newOTP = [...otp];
      newOTP[index - 1] = '';
      setOtp(newOTP);
      otpInputRefs.current[index - 1].focus();
      onOTPChange(newOTP.join(''));
  }
  };
  return (
    <View style={styles.container}>
      {otpInputs.map((_, index) => (
        <TextInput
          key={index}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(value) => handleOTPChange(index, value)}
          onKeyPress={({ nativeEvent }) =>
            nativeEvent.key === 'Backspace' ? handleBackspace(index, otp[index]) : null
          }
          value={otp[index]}
          ref={(ref) => (otpInputRefs.current[index] = ref)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    ...commonStyles.betweenCenter,
  },
  input: {
    ...commonStyles.bordermd,
    borderColor:COLOR.grey_light,
    ...setBorderRadius(15),
    width:wp(12),
    height:hp(6),
    textAlign: 'center',
    ...setFontSize(14),
    fontFamily:FONTFAMILY.poppins_medium,
  },
});

export default memo(OTPInput);
