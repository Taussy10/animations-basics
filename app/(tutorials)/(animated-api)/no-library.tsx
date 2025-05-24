import { View, Text, Animated, useAnimatedValue , StyleSheet} from 'react-native'
import {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const NoLibrary = () => {
  // Create an animated Value
    const [position, setPosition] = useState(0)

    useEffect(() => {
     let interval: NodeJS.Timeout;

     interval = setInterval(() => {
      setPosition((prev) => prev < 200? prev +5 :0 )
     }, 50);

    //  Clean the memory: otehrwise 
    // memory keeps leaking an performance can decrease 
    return () => clearInterval(interval)
    }, [])
    

  return (
    <SafeAreaView
    className='  flex-1 bg-black p-5 '
    >
    
      <Text className='text-white mb-5 text-center  font-semibold text-xl underline'>Animations using </Text>

{/* We are not nesting any component in View so can create self closing */}
{/* if we want to use for than one stlye then can use array */}

{/* based on the postion it will move to margin left */}
      <View style={[styles.box, {marginLeft: position}]} />
      {/* </View> */}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'yellow'
  }
})

export default NoLibrary