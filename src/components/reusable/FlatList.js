import { StyleSheet,FlatList as RNFlatList } from 'react-native'
import React from 'react'

const FlatList = ({ data, renderItem, keyExtractor}) => {
  return <RNFlatList data={data}
  renderItem={renderItem}
  keyExtractor={keyExtractor} />
}

export default FlatList

const styles = StyleSheet.create({})