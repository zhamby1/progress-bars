import React, {useState, useEffect}from "react";
import { View, Text, Button} from "react-native";
import styles from "./styles";
import * as Progress from "react-native-progress";



export default function App() {

  //so we know that our progress bar can change state becasue it can go from 0 to 100 percent
  //use state to make a stateful variable that can change
  const [progress, setProgress] = useState(0);

  //we will use useEffect to simulate a progress bar that is loading by creating a timer
  useEffect(() => {
    //this function will update the progress bar
    if(progress < 1){
      //setInterva; is a function that will run every second  and is part of the javascript library
      const interval = setInterval(() => {
        setProgress((prev) => prev + 0.1);
      }, 1000);

      //clearInterval is a function that will stop the timer and part of the javascript standard library
      return () => clearInterval(interval);

    }
    //remember the empty array is useEffect is tied to a variable change...previosuly we had an empty array so it would only run once
    //but now we have a variable that is changing so it will run every time the variable changes
  }, [progress]);

  //now we can use react-native-progress to create a progress bar
  //we grab the Progress dependecy/libary we used above and call its .Bar method/function
  return (
    <View style={styles.container}>
     <Text>Progress Bar</Text>
     <Progress.Bar progress={progress} width={200} />
     <Button title="Reset" onPress={() => setProgress(0)} />


    </View>

  );
}


