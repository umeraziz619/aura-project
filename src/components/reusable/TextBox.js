import {Text} from 'react-native';
import React,{memo} from 'react'

const TextBox = ({style, text}) => {
  return <Text style={style}>{text}</Text>;
};
export default memo(TextBox);

