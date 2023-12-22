import {StyleSheet, View} from 'react-native';
import React, {useState,useEffect} from 'react';
import {
  BackgroundImage,
  GradientButton,
  RadioButton,
  TextBox,
} from '../../components';
import {COLOR, FONTFAMILY, hp, wp, commonStyles} from '../../enums/StyeGuide';
import {Auralogo} from '../../assests/svg';
import {SCREEN} from '../../enums/AppEnums';

const UserTypeScreen = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState(1);
  // const {setUserType} = useUser();
  const options = [
    {id: 1, label: 'Influencer'},
    {id: 2, label: 'Business'},
  ];
  const handleSelectOption = option => {
      setSelectedOption(option.id)
      console.log(option.label)
  };
  return (
    <BackgroundImage
      src={require('../../assests/images/backgroundhalf.png')}
      style={styles.imgBackground}>
      <View style={styles.auraLogoContainer}>
        <Auralogo />
      </View>
      <TextBox style={styles.registerAs} text="Register as" />
      <View>
        <RadioButton
          options={options}
          selectedOption={selectedOption}
          onSelect={handleSelectOption}
          style={styles.radiobuttonContainer}
        />
      </View>
      <GradientButton
        text="CONTINUE"
        style={styles.button}
        onPress={() => navigation.navigate(SCREEN.CREATENEWACCOUNT,{userType:selectedOption===1?"influencer":"business"})}
      />
    </BackgroundImage>
  );
};
export default UserTypeScreen;

const styles = StyleSheet.create({
  radiobuttonContainer: {
    marginLeft: hp(3),
  },
  imgBackground: {
    flex: 1,
  },
  registerAs: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontWeight: '500',
    fontSize: 20,
    marginTop: hp(20),
    color: COLOR.black,
    marginBottom: hp(2),
    marginLeft: wp(5),
  },
  button: {
    marginTop: hp(7),
  },
  auraLogoContainer: {
    backgroundColor: COLOR.white,
    width: wp(40),
    height: hp(20),
    alignSelf: 'center',
    marginTop: hp(20),
    borderRadius: 20,
    ...commonStyles.center,
  },
});
