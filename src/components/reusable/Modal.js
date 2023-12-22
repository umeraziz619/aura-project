import { StyleSheet,Modal as ReactModal} from 'react-native'
import React,{memo} from 'react'

const Modal = ({visible ,transparent=true,children}) => {
  return <ReactModal visible={visible} transparent={transparent}>
    {
        children
    }
  </ReactModal>
}

export default memo(Modal)

const styles = StyleSheet.create({})