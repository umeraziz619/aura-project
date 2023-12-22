import {StyleSheet, View, Modal, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  GraidentLinear,
  TextBox,
  TouchableButton,
  Calendar,
  EarningsCard,
} from '../../components';
import {
  COLOR,
  commonStyles,
  hp,
  setBorderRadius,
  setWidth,
  setHeight,
  setFontSize,
  FONTFAMILY,
  wp,
  setPadding,
} from '../../enums/StyeGuide';
import {earningAnalytics, revenuesAnalytics} from '../../enums/DummyData';
const EarningScreen = () => {
  return (
    <GraidentLinear style={styles.gradientLinear}>
      {/* Top header which consist of total Balance */}
      <View style={styles.topHeaderContainer}>
        <TextBox text="$0" style={styles.balance} />
        <TextBox text="Withdraw available" style={styles.headerbottomText} />
      </View>
      {/* Analytical Container */}
      <EarningsCard items={earningAnalytics} title={'Analytics'} />
      <EarningsCard items={revenuesAnalytics} title={'Revenues'} modal={false} />
    </GraidentLinear>
  );
};

export default EarningScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  topHeaderContainer: {
    marginTop: hp(2),
    ...setBorderRadius(15),
    height: hp(13),
    ...setPadding(10),
    ...commonStyles.betweenCenter,
    backgroundColor: COLOR.purple_shade,
  },
  balance: {
    color: COLOR.blue_dark,
    ...setFontSize(30),
  },
  headerbottomText: {
    ...setFontSize(15),
  },
  analyticsContainer: {
    ...setPadding(10),
    marginTop: hp(2),
    backgroundColor: COLOR.purple_shade,
  },
  analyticsItem: {
    ...setPadding(10),
    ...commonStyles.betweenCenter,
  },
  grey_md: {
    color: COLOR.grey_md,
  },
  textBold: {
    ...setFontSize(12),
    fontFamily: FONTFAMILY.poppins_medium,
  },
  extraBold: {
    fontWeight: 'bold',
  },
  label: {
    color: COLOR.black,
    ...setFontSize(15),
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  arrowBlack: {
    marginLeft: hp(1),
  },
  calendarContainer: {
    flex: 1,
    ...commonStyles.center,
    marginTop: hp(8),
    marginLeft: hp(10),
  },
  gradientLinear: {
    paddingHorizontal: hp(1),
  },
});
