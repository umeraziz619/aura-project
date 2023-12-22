import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Image} from '../reusable';
import {setHeight, setWidth} from '../../enums/StyeGuide';

const UserImage = ({style}) => {
  return (
    <View style={style}>
      <Image
        source={require('../../assests/images/userimage.png')}
        style={styles.img}
      />
    </View>
  );
};

export default UserImage;

const styles = StyleSheet.create({
  img: {
    ...setHeight(90),
    ...setWidth(90)
  },
});
