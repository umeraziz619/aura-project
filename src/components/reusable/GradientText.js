import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import React,{memo} from 'react'
import {Text} from 'react-native';
import {COLOR} from '../../enums/StyeGuide';
import TouchableButton from './TouchableButton';
const GradientText = props => {
  return (
    <TouchableButton>
      <MaskedView maskElement={<Text {...props} />}>
        <LinearGradient
          colors={[COLOR.blue_fill, COLOR.blue_light]}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}>
          <Text {...props} style={[props.style, {}]} />
        </LinearGradient>
      </MaskedView>
    </TouchableButton>
  );
};

export default memo(GradientText);
