import {StyleSheet} from 'react-native';
import React, {memo} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLOR} from '../../enums/StyeGuide';

const GraidentLinear = ({children, style}) => {
  return (
    <LinearGradient
      colors={[COLOR.purple_extrasm, COLOR.white]}
      start={{x: 0.5, y: 0.0}} // Top
      end={{x: 0.5, y: 1.0}} // Bottom
      style={[styles.gradient, style]}>
      {children}
    </LinearGradient>
  );
};

export default memo(GraidentLinear);

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
