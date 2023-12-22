import {StyleSheet, TouchableOpacity, View,} from 'react-native';
import React, {useState} from 'react';
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
import {CalanderIcon, ArrowDownBlack, ArrowUp, RightArrow} from '../../assests/svg';
import {TextBox, TouchableButton, Calendar,Modal} from '../../components/index';
const EarningsCard = ({items, title, modal = true}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={[styles.analyticsContainer]}>
      <View style={[styles.row, styles.headerContainer]}>
        <TextBox text={title} style={styles.label} />
        {modal && (
          <>
            <TouchableButton
              onPress={() => setShowModal(!showModal)}
              style={[styles.row, {...commonStyles.center}]}
              touchOpacity={0.6}>
              <CalanderIcon />
              {showModal ? (
                <ArrowUp style={styles.arrowBlack} />
              ) : (
                <ArrowDownBlack style={styles.arrowBlack} />
              )}
            </TouchableButton>
            <Modal visible={showModal} transparent={true}>
              <TouchableButton
               touchOpacity={1}
                onPress={()=>setShowModal(false)}
                style={{flex:1,}}>
              </TouchableButton>
              <View style={styles.calendarContainer}>
                <Calendar />
              </View>
            </Modal>
          </>
        )}
      </View>
      {items.map((item, index) => {
        return (
          <View key={index} style={[styles.analyticsItem, styles.row]}>
            <TextBox
              text={item.title}
              style={[styles.textBold, styles.grey_md]}
            />
            <View style={styles.row}>
              <TextBox text={item.value} style={styles.extraBold} />
              <TextBox text={item.prefix} style={styles.grey_md} />
              {
                title=="Revenues" && <RightArrow style={{marginLeft:wp(1.7),alignSelf:'center'}}/>
              }
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default EarningsCard;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  headerContainer:{
    ...commonStyles.betweenCenter,
    borderBottomWidth:1.3,
    borderColor:"rgba(0, 0, 0, 0.2)",
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
    // ...setPadding(10),
    marginTop: hp(2),
    backgroundColor: COLOR.purple_shade,
    ...setBorderRadius(20),
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
    paddingLeft:hp(2.2),
    paddingTop:hp(1.3),
    paddingBottom:hp(1.2),
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  arrowBlack: {
    marginLeft: hp(1),
  },
  calendarContainer: {
    position:'absolute',
    alignSelf:'center',
    marginTop:hp(28),
    right:wp(10),
    ...commonStyles.center,
    // marginTop:hp(-20),
  },
});
