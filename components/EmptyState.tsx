import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import CustomButton from './CustomButton'
import { router } from 'expo-router'


const EmptyState = ({title,subtitle}:{title:string,subtitle:string}) => {
  return (
    <View className='justify-center items-center px-6'>
        <Image source={images.empty} className='w-[270px] h-[215px]' resizeMode='contain'/>
      <Text className='text-lg font-psemibold'>
        {title}
      </Text>
      <Text className='text-lg'>
        {subtitle}
      </Text>
      <CustomButton title='Create video' handlePress={()=>router.push('/create')}/>
    </View>
  )
}

export default EmptyState

const styles = StyleSheet.create({})