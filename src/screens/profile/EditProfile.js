import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {BackgroundImage,BarStatus,InputText,TextBox,PickImage,DropDown,GraidentLinear,Label,SocialUrl,GradientButton,TouchableButton} from '../../components';
import {PATH} from '../../assests/images';
import {COLOR,hp,setFontSize,FONTFAMILY,wp,setBorderRadius,setPadding,commonStyles,} from '../../enums/StyeGuide';
import {CategoryIcon,InstraIcon,LocationIcon,PlusIcon,YoutubeIcon,} from '../../assests/svg';
import {CategoryItems, Gender, SocialItems} from '../../enums/DummyData';
import {SCREEN} from '../../enums/AppEnums';

const EditProfile = ({navigation}) => {
  const [addMore, setAddMore] = useState(false);
  const [socialPlatforms, setSocialPlatforms] = useState([
    {name: 'Instragram', svg: <InstraIcon />},
    {name: 'Youtube', svg: <YoutubeIcon />},
  ]);

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
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContainer}>
          <PickImage style={styles.pickImg}/>
          <DropDown
            items={CategoryItems}
            iconComponent={<CategoryIcon />}
            iconSize={20}
            containerStyle={styles.categoryStyle}
            dropdownTextStyle={styles.dropdownText}
            style={styles.categoryDropDown}
            placeholder="Select a Category"
          />
          <InputText style={styles.bioInput} placeholder="Add a Bio" />
          <Label style={styles.label} text="Gender" />
          <DropDown
            items={Gender}
            containerStyle={styles.categoryStyle}
            dropdownTextStyle={styles.dropdownText}
            style={[styles.categoryDropDown, styles.gender]}
            placeholder="Select"
          />
          <InputText
            style={styles.location}
            placeholder="Location"
            iconComponent={<LocationIcon />}
            iconSize={30}
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
            onPress={() => navigation.navigate(SCREEN.IDENTITYVERIFY)}
          />
        </View>
      </ScrollView>
    </GraidentLinear>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  pickImg:{
    marginTop:hp(3),
    ...setBorderRadius(30),
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
  mainContainer: {
    width: wp(85),
    alignSelf: 'center',
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

export default EditProfile;
