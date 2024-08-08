import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View className="items-center justify-center h-[100%]">
      <Text className='text-3xl dark:text-white'>Helloo</Text>
      <Link href={'/profile'} className='rounded-md px-6 py-2 border border-neutral-400 font-pbold dark:text-white'>
        Go to profile
      </Link>
      <Link href={'/explore'} className='rounded-md px-6 py-2 border border-neutral-400  dark:text-white'>
        Go to explore
      </Link>
    </View>
  )
}

export default index

