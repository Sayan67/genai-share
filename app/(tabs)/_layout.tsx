import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import icons from '@/constants/icons'

interface iconProps {
  icon: ImageSourcePropType,
  color: string,
  name: string,
  focused: boolean
}

const items = [
  'home','bookmark','create','home','profile'
]

const TabIcon = ({ icon, color, name, focused }: iconProps) => {
  return (
    <View
    className='items-center justify-center gap-2 pt-4'
    >
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='w-5 h-5'
      ></Image>
      <Text className={`${focused?"font-psemibold":'font-pregular'} text-xs`}>
        {name}
      </Text>
    </View>
  )
}



export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Tabs
      screenOptions={{
        tabBarShowLabel:false
      }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name='Home'
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name='bookmark'
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name='Bookmark'
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name='create'
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.upload}
                color={color}
                name='Create'
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name='Profile'
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  );
}
