import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

interface buttonProp{
    title:string,
    handlePress?:()=>void,
    isLoading?:boolean,
    containerStyle?:string

}

const CustomButton = ({title,handlePress,isLoading=false,containerStyle}:buttonProp) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    disabled={isLoading}
    className={`bg-primary px-6 py-3 rounded-lg mt-8 ${containerStyle}  ${ isLoading && 'bg-primary/50'}`}>
      <Text className='text-white text-base font-pmedium'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton