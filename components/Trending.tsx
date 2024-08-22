import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Trending = ({post}:{post:{id:number}[]}) => {
  return (
    <FlatList
    data={post}
    keyExtractor={(item)=>`${item.id}`}
    renderItem={({item})=>(
        <Text>{item.id}</Text>
    )}
    horizontal
    />
  )
}

export default Trending

const styles = StyleSheet.create({})