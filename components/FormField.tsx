import { View, Text, TextInput, TouchableOpacity, Image, KeyboardTypeOptions } from 'react-native'
import React, { useState } from 'react'
import icons from '@/constants/icons'


interface formProp {
    title: string,
    placeholder: string,
    handleTextChange?: (e:any) => void,
    value?: string,
    keyboardType?:KeyboardTypeOptions | undefined

}

const FormField = ({ title, placeholder, handleTextChange, value,keyboardType }: formProp) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className='px-2 space-y-2 mt-4'>
            <Text className='text-base font-pmedium'>{title}</Text>
            <View className='bg-neutral-200/70 border border-neutral-300 rounded-lg py-2 pl-4 pr-6 justify-between flex-row items-center relative focus:border-primary'>
                <TextInput
                    autoCapitalize='none'
                    value={value}
                    placeholder={placeholder}
                    className='placeholder:text-lg h-10 w-full '
                    secureTextEntry={title.toLowerCase() === 'password' && !showPassword}
                    onChangeText={handleTextChange}
                    keyboardType={keyboardType}
                />
                {
                    title.toLowerCase() === 'password' ?
                        <TouchableOpacity
                        onPress={()=>setShowPassword(prev=>!prev)}
                        className='absolute right-4'
                        >
                            <Image source={!showPassword?icons.eye:icons.eyeHide}
                            className='w-6 h-6'
                            resizeMode='contain'
                            />
                        </TouchableOpacity>    
                    : ''
                }
            </View>
        </View>
    )
}

export default FormField