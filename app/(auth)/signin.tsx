import { Button, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'
import { useAuth0 } from 'react-native-auth0'


const LoginButton = () => {
  const { authorize } = useAuth0();

  const onPress = async () => {
    try {
      await authorize({ redirectUrl: "com.anonymous.GenAIShare.auth0://dev-mxdtckorexnxv6qj.us.auth0.com/ios/com.anonymous.GenAIShare" });
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title='Log in'/>
}

const LogoutButton = () => {
  const { clearSession } = useAuth0();

  const onPress = async () => {
    try {
      await clearSession({returnToUrl:"com.anonymous.GenAIShare.auth0://dev-mxdtckorexnxv6qj.us.auth0.com/ios/com.anonymous.GenAIShare"});
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title="Log out" />
}

const Signin = () => {
  const [form, setForm] = useState(
    {
      email: '',
      password: ''
    }
  )

  const { user } = useAuth0();
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submitForm = () => {
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
    }, 2000)
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
            Login to Vidcraft
          </Text>
          <View className='mt-8 space-y-4'>
            <FormField title='Email' handleTextChange={(e) => setForm({ ...form, email: e })} placeholder='Enter your email' />
            <FormField title='Password' keyboardType='email-address' handleTextChange={(e) => setForm({ ...form, password: e })} placeholder='Enter your password' />
            <CustomButton title='Sign In' handlePress={submitForm} containerStyle='items-center' isLoading={isSubmitting} />
          </View>
          <View className='items-center'>
            <Text className='text-base mt-4'>Don't have an account? <Link href={'/(auth)/signup'} className=' font-pmedium text-primary'>Sign up</Link></Text>
          </View>
          {
            user ?
              <LogoutButton />
              :
              <LoginButton />
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Signin
