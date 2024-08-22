import { View, Text, TextInput, TouchableOpacity, Image, KeyboardTypeOptions } from 'react-native'
import React, { useState } from 'react'
import icons from '@/constants/icons'
import images from '@/constants/images'


interface formProp {
    placeholder: string,
    handleTextChange?: (e:any) => void,
    value?: string,
    keyboardType?:KeyboardTypeOptions | undefined

}

const SearchBar = ({ placeholder, handleTextChange, value,keyboardType }: formProp) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className='space-y-2 mt-4'>
            <View className='bg-neutral-200 border border-neutral-300 rounded-xl py-2 pl-4 pr-6 justify-between flex-row items-center relative focus:border-primary'>
                <TextInput
                    autoCapitalize='none'
                    value={value}
                    placeholder={placeholder}
                    className='placeholder:text-lg h-10 w-full '
                    onChangeText={handleTextChange}
                    keyboardType={keyboardType}
                />
                <TouchableOpacity className=' absolute right-3'>
                    <Image source={icons.search} className='w-6 h-6' resizeMode='contain'/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchBar