import { Alert, Image, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '@/lib/appwrite'



const SignUp = () => {
  const [form, setForm] = useState(
    {
      email: '',
      password: '',
      username: ''
    }
  )
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submitForm = async () => {
    if (!form.email || !form.password || !form.username) {
      Alert.alert('Error, please fill all the fields.')
    }
    console.log(form);

    setIsSubmitting(true)
    try {
      const result = await createUser(form.email, form.password, form.username);
      //store the result  to a global context using contrext
      if (result) {
        router.replace('/home');
      }
    } catch (error: any) {
      Alert.alert('Error: ', error.message)
    } finally {
      setIsSubmitting(false);
      setForm({ email: '', password: '', username: '' });
    }

  }
  return (
    <SafeAreaView className='h-full'>
      <ScrollView>
        <View className='min-h-[85vh] w-full px-4 justify-center'>
          <Image source={images.logo}
            className='w-[160px] h-[52px]'
            resizeMode='contain'
          ></Image>
          <Text className='text-xl font-psemibold ml-2 mt-4'>
            Sign up to Vidcraft
          </Text>
          <View className='mt-8 space-y-4'>
            <FormField title='Username' handleTextChange={(e) => setForm({ ...form, username: e })} placeholder='Enter your username' />
            <FormField title='Email' keyboardType='email-address' handleTextChange={(e) => setForm({ ...form, email: e })} placeholder='Enter your email' />
            <FormField title='Password' handleTextChange={(e) => setForm({ ...form, password: e })} placeholder='Enter your password' />
            <CustomButton title='Sign Up' handlePress={submitForm} containerStyle='items-center' isLoading={isSubmitting} />
          </View>
          <View className='items-center'>
            <Text className='text-base mt-4'>Already have an account? <Link href={'/(auth)/signin'} className=' font-pmedium text-primary'>Sign In</Link></Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
