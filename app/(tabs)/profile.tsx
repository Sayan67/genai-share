import { View, Text, Image, ImageSourcePropType, Button } from 'react-native'
import React from 'react'
import { useAuth0 } from 'react-native-auth0'
import { Redirect } from 'expo-router';

const LogoutButton = () => {
  const { clearSession } = useAuth0();

  const onPress = async () => {
    try {
      await clearSession({ returnToUrl: "com.anonymous.GenAIShare.auth0://dev-mxdtckorexnxv6qj.us.auth0.com/ios/com.anonymous.GenAIShare" });
    } catch (e) {
      console.log(e);
    }
  };
  return <Button onPress={onPress} title="Log out" />
}

const Profile = () => {
  const { user, error, isLoading } = useAuth0();
  if (isLoading) return <Text>Loading...</Text>
  if (error) return <Text>Error : {error.message}</Text>
  if (!user) return <Redirect href={'/'} />
  if (user) return (
    <View className='flex justify-center h-full px-8'>
      <Text>Hi! {user?.nickname}</Text>
      <Text>Email : {user?.email}</Text>
      <Image source={user?.picture as ImageSourcePropType} width={96} height={96} />
      <LogoutButton />
    </View>
  )
}

export default Profile