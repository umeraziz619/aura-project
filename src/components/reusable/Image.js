import { Image as RNImage} from 'react-native'
import React,{memo} from 'react'

const Image = ({source,style}) => {
  return <RNImage source={source} style={style}/>
}

export default memo(Image)