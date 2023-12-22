import {StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';
import {BarChart,BarStatus,Cardsm,ChartHeader,GraidentLinear,HomeHeader,Label,ProgressBar,TextBox,TouchableButton,UserImage,} from '../../components';
import {COLOR,commonStyles,hp,setBorderRadius,setWidth,setHeight,setFontSize,FONTFAMILY,wp,setPadding,} from '../../enums/StyeGuide';
import {EditIcon} from '../../assests/svg';
import {homeSocialItems,progress,socialStatistics,userData,} from '../../enums/DummyData';
import { useNavigation } from '@react-navigation/native';
import { SCREEN } from '../../enums/AppEnums';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <GraidentLinear style={{flex: 1}}>
      <BarStatus bg={COLOR.white} content="dark-content" />
      <ScrollView>
        {/* Header With Aura logo and bell Icon */}
        <HomeHeader />
        <View style={styles.mainContainer}>
          {/* Profile Component */}
          <View style={styles.userSection}>
            {/* User Top Image and its text section Container */}
            <View style={[styles.userSectionTop,styles.row]}>
              {/* Image componetnt to show the user Image */}
              <UserImage style={styles.imageUser} />
              <View style={styles.userTextSection}>
                <TextBox text="Hazel Finch" style={styles.nameText} />
                <TextBox text="Food Blogger" style={styles.textBold} />
                <TextBox
                  text="San Francisco, LA United States"
                  style={styles.textBold}
                />
                <TextBox
                  text="Lorem Ipsum is simply dummy text of the printing."
                  style={styles.nameText}
                />
              </View>
              <TouchableButton
                onPress={() => {navigation.navigate(SCREEN.EDITPROFILE)}}
                style={styles.editIconContainer}>
                <EditIcon />
              </TouchableButton>
            </View>
            {/* user Social Items container */}
            <ScrollView horizontal>
              <View style={[styles.userSectionBottom,styles.row]}>
                {homeSocialItems.map((item, index) => {
                  return (
                    <View style={styles.mapContainer} key={index}>
                      {item.svg}
                      <TextBox text={item.name} style={styles.homeSocialItemsText} />
                      <TextBox text={item.followers} style={styles.homeSocialItemsText}/>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
          {/* user statistic section || middle */}
          <View style={[styles.userStatisticsSection,styles.row]}>
            {socialStatistics.map((item, index) => {
              return (
                <Cardsm title={item.title} iconCom={item.svg} totalValue={item.totalValue} more={item.more}/>
              );
            })}
          </View>
          {/* earnings container of the user || middle */}
          <View style={styles.purpleBoxContainer}>
            <View style={[styles.earningView,styles.row]}>
              <Label text="Earnings" textStyle={styles.textStyle} />
              <TouchableButton onPress={()=>navigation.navigate(SCREEN.EARNINGS)}>
              <TextBox text="Details" style={styles.detailsText} />
              </TouchableButton>
            </View>
            {/* SHow the actual statistics */}
            <View style={styles.totalEarningsContainer}>
              <View style={[styles.totalEarningBox,styles.row]}>
                {userData.map((item, index) => {
                  const isOddIndex = index % 2 !== 0;
                  return (
                    <View
                      style={[
                        styles.mapViewEarning,
                        isOddIndex && styles.isOddIndex,
                      ]}>
                      <TextBox text={item.title} style={styles.earningTitle} />
                      <View style={[styles.row]}>
                        <TextBox text={item.val} style={styles.earningsValue} />
                        <TextBox text={item.total} style={styles.totalText} />
                      </View>
                    </View>
                  );
                })}
              </View>
              {/* Rendering the four progress bar below the earnings  */}
              <View style={[styles.progressBox,styles.row]}>
                {progress.map((item, index) => {
                  return (
                    <ProgressBar key={index} activeStroke={item.activeStroke} maximumValue={item.maximumValue} currVal={item.currVal} valSuffix={item.valSuffix} text={item.text}
                    />
                  );
                })}
              </View>
            </View>
            <View style={[styles.earningView,styles.row]}>
              <Label text="Earnings" textStyle={styles.textStyle} />
            </View>
            <View style={styles.chartContainer}>
              <View>
              <ChartHeader/>
              </View>
              {/* React Native Chart Component */}
              <View>
                <BarChart/>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </GraidentLinear>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  fullwidth: {
    ...commonStyles.flexFull,
  },
  // Main COntainer of the screen
  mainContainer: {
    marginLeft: hp(1),
    marginRight: hp(1),
  },
  imageUser: {
    marginLeft: wp(-1),
  },
  // user section container which consist profile section and social Secetion
  userSection: {
    paddingLeft: hp(1),
    paddingRight: hp(1),
    marginTop: hp(2),
    paddingBottom: hp(1.3),
    backgroundColor: COLOR.purple_shade,
    ...setBorderRadius(15),
  },
  // User top profile section
  userSectionTop: {
    marginTop: hp(1),
  },
  userTextSection: {
    paddingLeft: hp(2),
    width: hp(30),
  },
  nameText: {
    ...setFontSize(12),
    color: COLOR.black,
    fontFamily: FONTFAMILY.poppins_medium,
  },
  textBold: {
    fontWeight: '400',
    color: 'gray',
    ...setFontSize(11),
  },
  editIconContainer: {
    backgroundColor: COLOR.white,
    ...setHeight(20),
    ...setWidth(20),
    ...setBorderRadius(100),
    ...commonStyles.center,
  },
  // user bottom which consist of social Items
  userSectionBottom: {
    marginTop: hp(1.5),
    ...commonStyles.betweenCenter,
  },
  // use map to render and its styling
  mapContainer: {
    backgroundColor: COLOR.white,
    height: hp(14),
    width: wp(28),
    marginRight: wp(3),
    ...setBorderRadius(20),
    ...commonStyles.evenlyCenter,
    ...commonStyles.shadow_10,
  },
  homeSocialItemsText: {
    ...setFontSize(13),
    color: COLOR.black,
    fontFamily: FONTFAMILY.poppins_regular,
    fontWeight: '800',
  },
  userStatisticsSection: {
    paddingLeft: hp(1),
    paddingRight: hp(1.7),
    marginTop: hp(1.5),
    paddingBottom: hp(1.3),
    backgroundColor: COLOR.purple_shade,
    ...setBorderRadius(15),
    ...commonStyles.betweenCenter,
  },
  center: {
    ...commonStyles.center,
  },
  earningView: {
    marginLeft: hp(1.2),
    marginRight: hp(1.2),
    marginTop: hp(1),
    ...commonStyles.betweenCenter,
  },
  textStyle: {
    color: COLOR.black,
    ...setFontSize(16),
    fontFamily: FONTFAMILY.poppins_medium,
    fontWeight: '600',
  },
  detailsText: {
    color: COLOR.blue_dark,
    ...setFontSize(13),
    fontFamily: FONTFAMILY.poppins_medium,
    fontWeight: '600',
  },
  totalEarningsContainer: {
    ...setBorderRadius(25),
    backgroundColor: COLOR.white,
    ...commonStyles.shadow_10,
  },
  totalEarningBox: {
    ...setPadding(15),
    ...setBorderRadius(20),
    marginTop: hp(1),
    flexWrap: 'wrap',
  },
  mapViewEarning: {
    width: wp(40),
    marginBottom: hp(2),
  },
  earningTitle: {
    ...setFontSize(12),
    color: COLOR.grey_md,
  },
  earningsValue: {
    color: COLOR.black,
  },
  totalText: {
    color: COLOR.grey_esm,
  },
  progressBox:{
    marginBottom:wp(2),
    marginTop:hp(-2),
    ...commonStyles.aroundCenter
  },
  row: {
    flexDirection: 'row',
  },
  purpleBoxContainer:{
    ...setBorderRadius(15),
    paddingLeft: hp(1),
    paddingRight: hp(1),
    marginTop: hp(1.5),
    paddingBottom: hp(1.3),
    backgroundColor: COLOR.purple_shade,
  },
  chartContainer:{
    backgroundColor:COLOR.white,
    ...setBorderRadius(15),
    ...commonStyles.shadow_10,
  },
  isOddIndex:{
    marginLeft: wp(8), width: wp(30)
  }
});
