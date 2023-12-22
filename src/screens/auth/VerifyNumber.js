import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert
} from 'react-native';
import React, {useState, useRef} from 'react';
import {
  BackgroundImage,
  GradientButton,
  GraidentLinear,
  TextBox,
} from '../../components';
import {PATH} from '../../assests/images';
import PhoneInput from 'react-native-phone-number-input';
import {
  hp,
  commonStyles,
  wp,
  setBorderRadius,
  COLOR,
  FONTFAMILY,
  setFontSize,
} from '../../enums/StyeGuide';
import En from '../../locals/En';
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native';
import { SCREEN } from '../../enums/AppEnums';
const VerifyNumber = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);
  const handleOnSubmit = async() => {
    const checkValid = phoneInput.current?.isValidNumber(value);
    setShowMessage(true);
    setValid(checkValid ? checkValid : false);
    if(checkValid){
      console.log("hell sohil")
      navigation.navigate(SCREEN.VERIFYOTP)
      try {
            const confirmation = await auth().signInWithPhoneNumber(formattedValue)
            console.log(JSON.stringify(confirmation));
            navigation.navigate(SCREEN.VERIFYOTP, { verificationId: confirmation._verificationId })
          } catch (error) {
            Alert.alert(error.code)
            console.log(error);
         }
    }
  };
  return (
    <GraidentLinear>
    <View style={styles.imgbgContainer}>
      <BackgroundImage src={PATH.imggradient} style={{flex: 1}}>
        <TextBox text="Account Details" style={styles.screenname} />
      </BackgroundImage>
    </View>
    <ScrollView>
      <View style={styles.heading}>
        <TextBox text={En.phone} />
        {showMessage && (
          <View style={styles.message}>
            <Text>Value : {value}</Text>
            <Text>Formatted Value : {formattedValue}</Text>
            <Text>Valid : {valid ? "true" : "false"}</Text>
          </View>
        )}
      </View>
      <View style={styles.viewInputContainer}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="PK"
            layout="first"
            onChangeText={text => {
              setValue(text);
            }}
            onChangeFormattedText={text => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
            containerStyle={styles.phoneInputContainer}
            textContainerStyle={styles.phoneInputTextContainer}
            codeTextStyle={styles.phoneInputCodeText}
            textInputProps={{
              style: styles.phoneInputText,
            }}
            placeholder="0000000"
            flagButtonStyle={styles.flagButton}
          />
          </View>
        <GradientButton
          text="Verify"
          // disabled={handleDisable}
          onPress={handleOnSubmit}
          style={styles.graidnetButton}
        />
      </ScrollView>
    </GraidentLinear>
  );
};

export default VerifyNumber;

const styles = StyleSheet.create({
  img: {
    ...commonStyles.flexFull,
  },
  screenname: {
    marginTop: hp(6),
    marginLeft: wp(5),
    width: wp(60),
    color: COLOR.white,
    ...setFontSize(40),
    fontFamily: FONTFAMILY.poppins_medium,
    fontWeight: '500',
  },
  imgbgContainer: {
    height: hp(35),
  },
  heading: {
    marginTop: hp(5),
    marginLeft: wp(8),
    marginBottom: hp(3),
  },
  viewInputContainer: {
    marginLeft: wp(4),
    height: hp(5.5),
    width: wp(90),
    alignSelf: 'center',
    ...setBorderRadius(15),
  },
  phoneInputContainer: {
    height: hp(7),
    borderColor: COLOR.grey_light,
    ...setBorderRadius(15),
    borderWidth: 2,
    backgroundColor: COLOR.light_shade,
    width: wp(85),
  },
  phoneInputTextContainer: {
    paddingRight: wp(15),
    marginLeft: wp(-4),
    backgroundColor: COLOR.light_shade,
    ...setBorderRadius(23),
  },
  phoneInputCodeText: {
    height: hp(5.5),
    marginTop: hp(2),
    padding: 0,
  },
  phoneInputText: {
    height: hp(5.5),
    padding: 0,
    ...setFontSize(18),
    fontFamily: FONTFAMILY.poppins_medium,
  },
  graidnetButton: {
    marginTop: hp(10),
  },
});
