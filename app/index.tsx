import { View, Text, ScrollView, Image } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import React from 'react'
import { Link, router } from 'expo-router'
import images from '@/constants/images'
import CustomButton from '@/components/CustomButton'


const index = () => {
  return (
    <SafeAreaView className='h-full'>
      <Link href={'/(tabs)/home'}>Tabs Home</Link>
      <ScrollView contentContainerStyle={{height:"100%"}}>
        <View className='w-full justify-center items-center h-full px-4 space-y-5'>
          <Image source={images.logo}
          className='w-[160px] h-[52px]'
          resizeMode='contain'
          ></Image>
          <Image source={images.cards}
          className='w-[380px] h-[300px]'
          resizeMode='contain'
          ></Image>
          <View className='relative mt-5'>
            <Text className='text-2xl font-psemibold text-center'>Discover endless possibilities with <Text className='text-primary'>Vidcraft</Text></Text>
            <Image source={images.path} className='absolute right-[70px] bottom-1'></Image>
          </View>
          <Text className='text-center text-sm mt-7'>Where creative AI meets people : embark on a journey of limitless exploration with Vidcraft</Text>
          <CustomButton
          handlePress={()=>router.push('/signin')} 
          title='Get started' containerStyle='w-full items-center'/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index