import {StyleSheet,View} from 'react-native';
import React,{memo} from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import {COLOR, setFontSize, wp,hp, FONTFAMILY,commonStyles} from '../../enums/StyeGuide';
import { TextBox } from '../reusable';

const ProgressBar = props => {
  const {activeStroke, maximumValue, currVal, valSuffix,text} = props;
  return (
    <View style={styles.progressContainer}>
      <CircularProgress
          value={currVal}
          radius={30}
          duration={4000}
          progressValueColor={COLOR.black}
          maxValue={maximumValue}
          progressValueFontSize={14}
          titleStyle={styles.titleStyle}
          valueSuffixStyle={{marginLeft:wp(-0.4)}}
          valueSuffix={valSuffix}
          inActiveStrokeWidth={3.5}
          activeStrokeColor={activeStroke}
          activeStrokeWidth={3.5}
        />
          <TextBox style={styles.text} text={text}/>
        </View>
  );
};

export default memo(ProgressBar);

const styles = StyleSheet.create({
  progressContainer:{
    width:wp(24),
    ...commonStyles.center,
  },
  titleStyle: {
    fontWeight: 'bold',
    ...setFontSize(8),
  },
  text:{
    marginTop:hp(0.5),
    textAlign:'center',
    ...setFontSize(12),
    color: COLOR.black,
    fontFamily: FONTFAMILY.poppins_semibold,
  }
});
