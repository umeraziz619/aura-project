import {TouchableOpacity} from 'react-native';
import React, {memo} from 'react';

const TouchableButton = ({children, style, onPress, disabled,touchOpacity}) => {
  return (
    <TouchableOpacity activeOpacity={touchOpacity&&touchOpacity} style={style} onPress={onPress} disabled={disabled}>
      {children}
    </TouchableOpacity>
  );
};
export default memo(TouchableButton);
