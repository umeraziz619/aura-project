import { StatusBar } from 'react-native'
import React,{memo} from 'react'

const BarStatus = ({bg,content}) => {
  return <StatusBar backgroundColor={bg} barStyle={content} />
}

export default memo(BarStatus)
