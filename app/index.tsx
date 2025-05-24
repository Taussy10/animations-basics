import { View, Text, Animated, useAnimatedValue } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect } from 'expo-router';
import NoLibrary from './(tutorials)/(animated-api)/one-d-left-to-right';
import TwoD from './(tutorials)/(animated-api)/two-d';

const Index = () => {
    const fadeAnim = useAnimatedValue(0);
// if (true) {
//  return <Redirect href={'/no-library'} />
// }
  return (
      <SafeAreaView
       className='  flex-1 bg-black p-5 '
       >
         <Text className='text-white text-center    font-extrabold text-2xl underline mb-10'>Animations</Text>
         {/* Animated API */}

         {/* <NoLibrary /> */}
         <TwoD />
       </SafeAreaView>
  )
}

export default Index