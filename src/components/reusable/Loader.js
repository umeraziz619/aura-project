import {StyleSheet, ActivityIndicator, View} from 'react-native';
import React from 'react';
import {COLOR, commonStyles, hp} from '../../enums/StyeGuide';
const Loader = () => {
  return (
    <View style={styles.container}>
    <ActivityIndicator
      style={styles.loader}
      size={40}
      color={COLOR.blue_dark}
      />
      </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
    container:{
        zIndex:30,
        flex:1,
        backgroundColor:COLOR.grey_light,
        position:'absolute',
        height:'100%',
        width:'100%',
        ...commonStyles.center,
    },
  loader: {
  },
});
