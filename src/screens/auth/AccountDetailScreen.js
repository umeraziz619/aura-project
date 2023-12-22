import React, {useContext, useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  BackgroundImage,
  BarStatus,
  InputText,
  TextBox,
  PickImage,
  DropDown,
  GraidentLinear,
  Label,
  SocialUrl,
  GradientButton,
  TouchableButton,
  Loader,
} from '../../components';
import {PATH} from '../../assests/images';
import {
  COLOR,
  hp,
  setFontSize,
  FONTFAMILY,
  wp,
  setBorderRadius,
  setPadding,
  commonStyles,
} from '../../enums/StyeGuide';
import {
  CategoryIcon,
  InstraIcon,
  LocationIcon,
  PlusIcon,
  YoutubeIcon,
} from '../../assests/svg';
import {CategoryItems, Gender, SocialItems} from '../../enums/DummyData';
import {SCREEN} from '../../enums/AppEnums';
import {useUser} from '../../context/AppStates';
import { useUserAccountDetails } from '../../hooks/auth';
const AccountDetailScreen = ({navigation}) => {
  const {accountDetails, loading} = useUserAccountDetails();
  const [accountData, setAccountData] = useState({
    userImgPath:'',
    userCategory: '',
    userBio: '',
    userGender: '',
    userLocation: '',
  });
  const [addMore, setAddMore] = useState(false);
  const [socialPlatforms, setSocialPlatforms] = useState([
    {name: 'Instragram', svg: <InstraIcon />},
    {name: 'Youtube', svg: <YoutubeIcon />},
  ]);
  const handleAccountDetails = async() => {
   await accountDetails(
      accountData.userImgPath,
      accountData.userCategory,
      accountData.userBio,
      accountData.userGender,
      accountData.userLocation,
    );
    // accountDetails()
  };

  const addSocialPlatform = platform => {
    // Check if the platform already exists in the socialPlatforms array
    // const exists = socialPlatforms.some(item => item.name === platform.name);
    // if (!exists) {
    setSocialPlatforms([...socialPlatforms, platform]);
    // }

    setAddMore(false);
  };
  return (
    <GraidentLinear>
      <BarStatus bg={COLOR.blue_status} />
      {loading && <Loader/>}
      <View style={styles.imgbgContainer}>
        <BackgroundImage src={PATH.imggradient} style={{flex: 1}}>
          <TextBox text="Account Details" style={styles.screenname} />
        </BackgroundImage>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContainer}>
          <PickImage style={{marginTop: hp(5)}} imageLink={value=>setAccountData({...accountData, userImgPath: value})} />
          <DropDown
            items={CategoryItems}
            iconComponent={<CategoryIcon />}
            iconSize={20}
            containerStyle={styles.categoryStyle}
            dropdownTextStyle={styles.dropdownText}
            style={styles.categoryDropDown}
            placeholder="Select a Category"
            onItemSelected={value =>
              setAccountData({...accountData, userCategory: value})
            }
          />
          <InputText
            style={styles.bioInput}
            placeholder="Add a Bio"
            onChangeText={text =>
              setAccountData({...accountData, userBio: text})
            }
          />
          <Label style={styles.label} text="Gender" />
          <DropDown
            items={Gender}
            containerStyle={styles.categoryStyle}
            dropdownTextStyle={styles.dropdownText}
            style={[styles.categoryDropDown, styles.gender]}
            placeholder="Select"
            onItemSelected={value =>
              setAccountData({...accountData, userGender: value})
            }
          />
          <InputText
            style={styles.location}
            placeholder="Location"
            iconComponent={<LocationIcon />}
            iconSize={30}
            onChangeText={text => setAccountData({...accountData, userLocation: text})}
          />
          <Label style={styles.label} text="Other Platforms" />
          {/* Render added social platforms */}
          {socialPlatforms.map((platform, index) => (
            <SocialUrl
              key={index}
              checked={true}
              setChecked={() => {}}
              onPress={() => {}}
              iconComponent={platform.svg}
              text={platform.name}
              inputPlaceholder="Add URL"
              socialPlatforms={socialPlatforms} // Pass socialPlatforms prop
              setSocialPlatforms={setSocialPlatforms}
            />
          ))}
          {/* Show add more button */}
          <View style={styles.row}>
            <GradientButton
              onPress={() => setAddMore(!addMore)}
              disabled={addMore}
              text="Add Other"
              style={styles.addOther}
              buttonText={styles.buttonText}
              iconComponent={<PlusIcon />}
            />
          </View>
          {/* Show social platforms to add when 'Add Other' is clicked */}
          {addMore && (
            <View style={styles.addMoreMainContainer}>
              {SocialItems.map((item, index) => {
                // Check if the item already exists in socialPlatforms
                const exists = socialPlatforms.some(
                  platform => platform.name === item.name,
                );
                // Render the item only if it doesn't exist in socialPlatforms
                if (!exists) {
                  return (
                    <TouchableButton
                      key={index}
                      style={styles.itemSocialContainer}
                      onPress={() => addSocialPlatform(item)}>
                      {item.svg}
                      <TextBox style={styles.textSocial} text={item.name} />
                    </TouchableButton>
                  );
                }
                return null; // Render nothing if the item exists in socialPlatforms
              })}
            </View>
          )}
          {/* Continue button */}
          <GradientButton
            text="Continue"
            onPress={handleAccountDetails}
            // () => navigation.navigate(SCREEN.IDENTITYVERIFY)
          />
        </View>
      </ScrollView>
    </GraidentLinear>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: hp(-9),
    zIndex: 2,
  },
  row: {
    flexDirection: 'row',
  },
  addMoreMainContainer: {
    marginLeft: wp(1.5),
    marginTop: hp(2),
    borderRadius: 15,
    width: wp(30),
    backgroundColor: COLOR.purple_thin,
  },
  itemSocialContainer: {
    flexDirection: 'row',
    ...setPadding(8),
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
    zIndex: 12,
    height: hp(35),
  },
  mainContainer: {
    width: wp(85),
    alignSelf: 'center',
    zIndex: 10,
    // marginTop: hp(-2),
  },
  categoryStyle: {
    backgroundColor: COLOR.purple_thin,
  },
  categoryDropDown: {
    ...commonStyles.border,
    borderColor: COLOR.grey_light,
    marginTop: hp(2.5),
    ...setBorderRadius(15),
  },
  dropdownText: {
    color: COLOR.grey_light,
  },
  bioInput: {
    marginTop: hp(3),
    ...setBorderRadius(15),
    paddingLeft: wp(4),
  },
  gender: {
    zIndex: 20,
    marginTop: hp(2),
  },
  label: {
    marginTop: hp(1),
  },
  location: {
    paddingLeft: wp(3),
    marginTop: hp(3),
    ...setBorderRadius(15),
  },
  addOther: {
    marginTop: wp(3),
    marginBottom: wp(3),
    width: wp(35),
    borderRadius: 10,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonText: {
    ...setFontSize(15),
  },
  textSocial: {
    ...setFontSize(13),
    fontFamily: FONTFAMILY.poppins_medium,
    fontWeight: 'bold',
    marginLeft: wp(3),
  },
});

export default AccountDetailScreen;
