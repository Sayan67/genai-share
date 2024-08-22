import { View, Text, FlatList, Image, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth0 } from 'react-native-auth0'
import images from '@/constants/images'
import SearchBar from '@/components/SearchBar'
import Trending from '@/components/Trending'
import EmptyState from '@/components/EmptyState'

const data: { id: number }[] = [
  // { id: 1 },
  // { id: 2 },
  // { id: 3 },
  // { id: 4 },
]

const Home = () => {

  const { user } = useAuth0();
  const [refreshing, setRefreshing] = useState(false)
  const onRefreshing = async () => {
    setRefreshing(true);
    //recall posts
    setRefreshing(false);
  }
  return (
    <SafeAreaView className='pt-8 h-full'>
      <FlatList
        data={data}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <Text className='text-3xl'>{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className='px-6'>
            <View className='flex-row justify-between  items-center'>
              <View>
                <Text className='text-lg font-pmedium text-neutral-500'>
                  Welcome back
                </Text>
                <Text className='text-2xl font-psemibold'>
                  {user?.nickname}
                </Text>
              </View>
              <View>
                <Image source={images.logoSmall} className='w-12 h-12 mr-2' resizeMode='contain' />
              </View>
            </View>
            <SearchBar placeholder='Search for a video' />
            <View className='w-full pt-5 pb-8 flex-1 '>
              <Text className='text-lg text-neutral-500'>
                Trending Videos
              </Text>
              <Trending post={data} />
            </View>
          </View>

        )}
        ListEmptyComponent={() => (
          <EmptyState title='No videos found' subtitle='Be the first one to post an exciting video' />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshing} />}
      />
    </SafeAreaView>
  )
}

export default Home