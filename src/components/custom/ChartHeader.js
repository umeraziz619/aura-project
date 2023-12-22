import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  COLOR,
  commonStyles,
  hp,
  setWidth,
  setHeight,
  setFontSize,
  FONTFAMILY,
} from '../../enums/StyeGuide';
import {TextBox} from '../reusable';
import {chartHeader} from '../../enums/DummyData';
const ChartHeader = () => {
  return (
    <View style={[styles.chartHeader, styles.row]}>
      <TextBox text="Monthly Orders" style={styles.chartHeaderText} />
      <View style={styles.row}>
      {chartHeader.map((item, index) => {
          return (
              <View key={index} style={[styles.boxContainer,styles.row]}>
            <View style={[styles.box, item.success ? styles.success : styles.danger]}></View>
            <TextBox text={item.text} style={styles.text}/>
          </View>
        );
    })}
    </View>
    </View>
  );
};

export default ChartHeader;

const styles = StyleSheet.create({
  chartHeader: {
    alignItems: 'center',
    ...commonStyles.betweenCenter,
    marginTop:hp(1),
    marginLeft:hp(1.5),
    marginRight:hp(1.5),
  },
  chartHeaderText: {
    marginTop: hp(0.5),
    ...setFontSize(12),
    color: COLOR.black,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  box: {
    ...setHeight(8),
    ...setWidth(8),
    marginRight:hp(0.5),
  },
  danger: {
    backgroundColor: COLOR.danger,
  },
  success: {
    backgroundColor: COLOR.success,
  },
  row: {
    flexDirection: 'row',
  },
  boxContainer:{
    marginLeft:hp(1.1),
    ...commonStyles.center
  },
  text:{
    ...setFontSize(10),
  }
});
