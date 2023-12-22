import {StyleSheet, View, ScrollView,} from 'react-native';
import React, {useState} from 'react';
import {
  BackgroundImage,
  BarStatus,
  CheckBox,
  GradientButton,
  GradientText,
  GraidentLinear,
  InputText,
  TextBox,
  Loader
} from '../../components';
import {
  hp,
  FONTFAMILY,
  COLOR,
  setFontSize,
  wp,
  commonStyles,
  setBorderRadius,
  SVGSIZE,
} from '../../enums/StyeGuide';

import {LockIcon, MailIcon} from '../../assests/svg';
import {PATH} from '../../assests/images';
import En from '../../locals/En';
import auth from '@react-native-firebase/auth'
import {SCREEN} from '../../enums/AppEnums';
// import { useUser } from '../../context/AppStates';
import { useCreateUserWithEmailPassword } from '../../hooks/auth';
const CreateNewAccount = ({ navigation,route }) => {
 
  const userType = route?.params?.userType
  const { createUser,loading } = useCreateUserWithEmailPassword();
  // const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [checked, setChecked] = useState(false);
  const handleRegister =async() => {
   await createUser(
      formData.name,
      formData.lastName,
      formData.email,
      formData.password,
      formData.confirmPassword,
      userType,
    );
  };

  const handleInputChange = (key, value) => {
    setFormData(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };
  
  return (
    <GraidentLinear>
      <BarStatus bg={COLOR.blue_dark} />
      {loading && <Loader />}
      <View style={[styles.imgbgContainer,]}>
        {/* Replace BackgroundImage with your BackgroundImage component */}
        <BackgroundImage src={PATH.imggradient} style={styles.flex}>
          <TextBox text={En.createaccount} style={styles.screenname} />
        </BackgroundImage>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.inputFieldContainer}>
          <View style={[styles.row, { marginTop: hp(8) }]}>
            <InputText
              style={styles.textInputsm}
              placeholder="James"
              value={formData.name}
              onChangeText={(text) => handleInputChange('name', text)}
            />
            <InputText
              style={styles.textInputsm}
              placeholder="Walter"
              value={formData.lastName}
              onChangeText={(text) => handleInputChange('lastName', text)}
            />
          </View>
          <InputText
            style={styles.textInputlg}
            iconComponent={<MailIcon />}
            iconSize={SVGSIZE.md}
            placeholder={En.pass}
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
          <InputText
            style={styles.textInputlg}
            iconComponent={<LockIcon />}
            iconSize={SVGSIZE.md}
            placeholder={En.pass}
            isPassword={true}
            value={formData.password}
            onChangeText={(text) => handleInputChange('password', text)}
          />
          <InputText
            style={styles.textInputlg}
            isPassword={true}
            iconComponent={<LockIcon />}
            iconSize={SVGSIZE.md}
            placeholder={En.pass}
            value={formData.confirmPassword}
            onChangeText={(text) => handleInputChange('confirmPassword', text)}
          />
        </View>
        <View style={styles.checkBoxContainer}>
          <CheckBox
            checked={checked}
            setChecked={setChecked}
            onPress={isChecked => {}}
          >
            <TextBox text={En.agree} style={styles.gradientText} />
            <GradientText style={[styles.gradientText, styles.fontBold]}>
              Aura Terms
            </GradientText>
            <TextBox text={En.useof} style={styles.gradientText} />
            <GradientText style={[styles.gradientText, styles.fontBold]}>
              Privacy Policy
            </GradientText>
          </CheckBox>
        </View>
        <GradientButton
          style={styles.gradientContainer}
          text={En.regcap}
          onPress={handleRegister}
          disabled={!checked}
        />
        <View style={styles.row}>
          <TextBox text={En.alreadyacc} style={styles.bottomlogin} />
          <GradientText style={[styles.bottomlogin, styles.lg]}>
            {En.login}
          </GradientText>
        </View>
      </ScrollView>
    </GraidentLinear>
  );
};
export default CreateNewAccount;
const styles = StyleSheet.create({
  flex:{
    flex:1,
  },
  scrollView:{
    marginTop:hp(-8),zIndex:2
  },
  imgbgContainer: {
    height: hp(35),
    zIndex:10,
  },
  image: {
    ...commonStyles.flexFull,
    resizeMode: 'center',
  },
  screenname: {
    marginTop: hp(6),
    marginLeft: wp(5),
    width: wp(70),
    color: COLOR.white,
    ...setFontSize(40),
    fontFamily: FONTFAMILY.poppins_medium,
    fontWeight: '500',
  },
  createNewAccount: {
    marginTop: hp(5),
    marginLeft: wp(8),
    color: COLOR.white,
    ...setFontSize(40),
    fontFamily: FONTFAMILY.poppins_medium,
    fontWeight: '500',
  },
  inputFieldContainer: {
    ...commonStyles.center,
  },
  checkBoxContainer: {
    marginTop: hp(4),
    ...commonStyles.center,
  },
  textInputsm: {
    paddingLeft: wp(2),
    width: wp(40),
    alignSelf: 'center',
    marginRight: wp(3),
    ...setBorderRadius(10),
  },
  textInputlg: {
    paddingLeft: wp(5),
    width: wp(85),
    marginTop: hp(5),
    alignSelf: 'center',
    ...setBorderRadius(10),
  },
  gradientContainer: {
    marginTop: hp(5),
    marginBottom: hp(2),
  },
  row: {
    width: wp(100),
    ...commonStyles.center,
    flexDirection: 'row',
    width: wp(85),
    alignSelf: 'center',
  },
  gradientText: {
    ...setFontSize(9),
    fontFamily: FONTFAMILY.poppins_medium,
  },
  fontBold: {
    ...setFontSize(10),
    fontFamily: FONTFAMILY.poppins_bold,
  },
  bottomlogin: {
    fontFamily: FONTFAMILY.poppins_bold,
    ...setFontSize(11),
  },
  lg: {
    marginLeft: wp(1),
    ...setFontSize(11),
  },
});
