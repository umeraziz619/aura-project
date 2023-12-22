import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {SCREEN} from '../../enums/AppEnums';
import {hp, wp,commonStyles, COLOR, FLEX} from '../../enums/StyeGuide';
import {PATH} from '../../assests/images';
import { Image } from '../../components';
const AnimationScreen = ({navigation}) => {
  const [showSecondImage, setShowSecondImage] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondImage(true);
      setTimeout(() => {
        navigation.replace(SCREEN.SPLASH);
      }, 2000);
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.container}>
      {!showSecondImage ? (
        <Image source={PATH.eclipsedark} style={styles.image} />
      ) : (
        <Image source={PATH.eclipselight} style={styles.visible} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.flexFull,
    ...commonStyles.center,
    backgroundColor: COLOR.black,
  },
  image: {
    width: wp(18),
    height: hp(18),
  },
  visible: {
    width: wp(70),
    height: hp(70),
  },
  none: {
    display: 'none',
  },
});

export default AnimationScreen;
