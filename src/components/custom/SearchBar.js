import {StyleSheet, Text, View} from 'react-native';
import React,{memo} from 'react';
import {GradientButton, InputText} from '..';
import {
  COLOR,
  commonStyles,
  setWidth,
  setHeight,
  setBorderRadius,
  hp,
  setFontSize,
  FONTFAMILY,
  wp,
} from '../../enums/StyeGuide';
import {SearchIcon, StepsIcon} from '../../assests/svg';
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <InputText
          inputStyle={styles.userInput}
          style={styles.inputContainer}
          placeholder="Search"
        />
        <GradientButton
          style={styles.iconSearchBox}
          iconComponent={<SearchIcon height={17} width={17} />}
        />
      </View>
      <StepsIcon style={{alignSelf:'center'}}/>
    </View>
  );
};

export default memo(SearchBar);

const styles = StyleSheet.create({
  container: {
    marginTop:hp(1),
    marginHorizontal:wp(3),
    flexDirection:'row',
    ...commonStyles.aroundCenter,
  },
  searchBar: {
    width: '85%',
    flexDirection: 'row',
    backgroundColor: COLOR.purple_shade,
    ...commonStyles.aroundCenter,
    ...setBorderRadius(15),
  },
  iconSearchBox: {
    height: 27,
    width: 27,
    backgroundColor: 'black',
    borderRadius: 100,
    flexDirection: 'row',
    ...commonStyles.center,
  },
  userInput: {
    marginLeft:0,
    borderColor:'red',
    ...setFontSize(13),
    fontFamily: FONTFAMILY.poppins_medium,
  },
  inputContainer: {
    width: hp(32),
    // height: hp(6.5),
    // paddingTop:hp(1),
    padding:0,
    marginLeft:0,
    borderWidth:0,
  },
});
