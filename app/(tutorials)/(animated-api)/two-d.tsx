import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

// motive is that it should move from bottom to top then after certain height it should from
// left to right for certain seconds
// first let it move from top to bottom

const TwoD = () => {
  // Creaetd an animated value
  const [positionY, setpositionY] = useState(0);
  const [positionX, setpositionX] = useState(0);

  // we got certain thing as box connected it with state so that we can track it's movement
  // now it's time to write timing
  //   prev <= 400 ? prev + 20 : setpositionX((prev) => (prev <= 200 ? prev + 20 : 0))
 useEffect(() => {
  const interval = setInterval(() => {

    // Firstly we want to move Y to certain second 
    // when it reaches then it should move X
    // then if Y and X completes then it should move back to Y 

    // if you look at here Y and X it's is working one by one: and only 
    // X is working when Y is finished  
    // so we need to write X inside Y cause it depends on taht 
    setpositionY((prevY) => {
        // move only after certain condiiton
        if (prevY<400) {
            
          return prevY + 20 
        //   return (prevY <= 200 ? prevY + 20 : 0) 
        }


        // For X 
        setpositionX((prevX) => {
            if (prevX < 200) {
                return prevX + 20
            }
            setpositionY(0)
            return 0

        })



    })
    // setpositionY((prevY) => {
    //   if (prevY < 400) return prevY + 20;

    //   // If Y done, now handle X
    //   setpositionX((prevX) => {
    //     if (prevX < 200) return prevX + 20;
        
    //     // If both done, reset both
    //     setpositionY(0);
    //     return 0;
    //   });

    //   return prevY;
    // //   return prevX;
    // });



  }, 200);
    // console.log("Postion :",positionY);
    // based on inteval id we are clearing it
    //   by this as soon as setInterval execute this
    // so execute so nothing happens
    // by returning this will execute only after component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    // you need aukat agar chadar failani hai
    <View className=" flex-1 ">
      {/* <Text className=" text-white">Two Dimension</Text> */}
      {/* 2. Connected to the component */}
      {/* we need to go from bottom to top that's why bottom position */}
      <View style={[styles.box, { bottom: positionY, left: positionX }]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    position: 'absolute',
    borderRadius: 50,
  },
});

export default TwoD;
