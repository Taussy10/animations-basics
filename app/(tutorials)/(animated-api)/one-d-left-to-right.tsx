import { View, Text, Animated, useAnimatedValue, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const NoLibrary = () => {
  // 1. Create an animated Value
  const [position, setPosition] = useState(0);

  // 3. Create a function for Animations logic
  // but wherere is step 2 to providing component ?

  // Actually we did step 2 but with whole screen whenever
  // component reder first time then useEffect will executes
  // then function will run
  useEffect(() => {
    //  let interval: NodeJS.Timeout;

    // so this function will execute after every 50 mili seconds
    let interval = setInterval(() => {
      // it will change the value of positon from prev(basically intial value) to +5
      // if it's til it's less than 200

      // Few things ? we re using 2D screen animations so we have two Axis (X:(Top and Bottom),Y(Top and Bottom))

      // prev value stores postion value before updation intially 0 then 5 then 10 till 195(cause it's less than 200 and incremeant is 5)
      //  then 0 then keep repeating cycle
      // In position value put either prev values or 0(for certian condition)
      // btw we are using immediate return here you should know 
      setPosition((prev: number) => (prev < 200 ? prev + 5 : 0));
    }, 50);

    //  Clean the memory: otehrwise
    // memory keeps leaking an performance can decrease
    return () => clearInterval(interval);
  }, []);

  return (
    <View className=" mb-10">
      {/* <Text className='text-white   text-center  font-semibold text-xl underline'>Animations using Animated API</Text> */}

      {/* We are not nesting any component in View so can create self closing */}
      {/* if we want to use for than one stlye then can use array */}

      {/* based on the postion it will move to margin left */}
      <View style={[styles.box, { marginLeft: position }]} />
      {/* </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'yellow',
  },
});

export default NoLibrary;
