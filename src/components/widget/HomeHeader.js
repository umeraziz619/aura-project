import {StyleSheet,View} from 'react-native';
import React from 'react';
import {COLOR, hp, wp} from '../../enums/StyeGuide';
import {Auralogo, BellIcon} from '../../assests/svg';
import { TouchableButton } from '../reusable';

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Auralogo height={40} width={40} />
      <TouchableButton>
        <BellIcon />
      </TouchableButton>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLOR.white,
    height: hp(6),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingRight:wp(2),
    paddingLeft:wp(2),
  },
});
