import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GraidentLinear, ScreenHeader, SearchBar,FlatList,Image, TextBox} from '../../components';
import {userMessages} from '../../enums/DummyData';
import { hp ,wp,setFontSize,setBorderRadius,commonStyles,setHeight,setWidth} from '../../enums/StyeGuide';
import { VerticalDots } from '../../assests/svg';
const MessageScreen = () => {
  return (
    <>
      <ScreenHeader />
      <GraidentLinear>
        <SearchBar />
        <FlatList
          data={userMessages}
          renderItem={({item, index}) => {
            return (
              <View style={styles.itemContainer}>
                <View style={styles.userImgTxt}>
                  <Image source={item.userImg} style={styles.userImg}/>
                  <View>
                    <TextBox text={item.name} />
                    <TextBox text={item.lastSent} />
                  </View>
                </View>
                <VerticalDots/>
              </View>
            );
          }}
        />
      </GraidentLinear>
    </>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  itemContainer:{
    paddingVertical:hp(2),
    paddingHorizontal:hp(1.5),
    marginHorizontal:hp(2),
    borderWidth:1,
    marginVertical:hp(1.5),
    flexDirection:'row',
    ...commonStyles.betweenCenter,
  },
  userImg:{
    ...setHeight(70),
    ...setWidth(70),
  },
  userImgTxt:{
    alignItems:'center',
    flexDirection:'row',
  }
});
