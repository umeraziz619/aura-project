import {StyleSheet,View} from 'react-native';
import React, { memo } from 'react';
import {TextBox} from '../reusable';
import {
  COLOR,
  commonStyles,
  hp,
  setBorderRadius,
  setFontSize,
  FONTFAMILY,
  wp,
  setPadding,
} from '../../enums/StyeGuide';

const Cardsm = props => {
  return (
    <View style={styles.mapStatistics} >
      <View style={[styles.mapStatisticsTop, styles.row]}>
        <TextBox text={props.title} style={styles.textTitle} />
        {/* {props.svg} */}
        {React.cloneElement(props.iconCom)}
      </View>
      <View style={styles.center}>
        <TextBox text={props.totalValue} style={styles.totalValue} />
        <TextBox text={props.more} style={styles.more} />
      </View>
    </View>
  );
};

export default memo(Cardsm);

const styles = StyleSheet.create({
  mapStatistics: {
    ...commonStyles.shadow_10,
    marginTop: hp(1.5),
    height: hp(15),
    width: wp(43),
    marginLeft: hp(0.5),
    ...setBorderRadius(20),
    backgroundColor: COLOR.white,
    ...setPadding(13),
  },
  row: {
    flexDirection: 'row',
  },
  mapStatisticsTop: {
    ...commonStyles.betweenCenter,
  },
  textTitle: {
    // ...setFontSize(),
    color: COLOR.black,
    fontFamily: FONTFAMILY.poppins_medium,
  },
  totalValue: {
    ...setFontSize(23),
    color: COLOR.black,
    fontFamily: FONTFAMILY.poppins_medium,
  },
  more: {
    marginTop: hp(-1),
    ...setFontSize(9),
    color: COLOR.green_medium,
  },
  center:{
    alignSelf:'center'
  }
});
