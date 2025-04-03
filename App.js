import React, {useState, useEffect}from "react";
import { View } from "react-native";
import styles from "./styles";
import ProgressBar from "./ProgressBar";



export default function App() {

  //so we know that our progress bar can change state becasue it can go from 0 to 100 percent
  //use state to make a stateful variable that can change
  const [progress, setProgress] = useState(0);

  //we will use useEffect to simulate a progress bar that is loading by creating a timer
  useEffect(() => {
    function updateProgress(){
      //part of the statefull component above
      setProgress(currentProgress => {
        if(currentProgress < 1){
          //settimeout is a function in javascript that creates timers
          //form of recursion
          //so we are calling the function again after 300 milliseconds
          //recursion is when a function calls itself...it is a way to repeat a function similar to a loop without using a loop
          setTimeout(updateProgress, 300);
        }
        return currentProgress + 0.01
      })
    }

    updateProgress()
  }, []);
  return (
    <View style={styles.container}>
     <ProgressBar progress={progress}/>
    </View>

  );
}


