import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import styles from "./styles";
import { ProgressBarComponent, progressProps } from "./ProgressBarComponent";

//first we will create a progress label that comes from the react native library progress component
//we will round our progress to a percentage so that is a whole number percentage using the math.round function
function ProgressLabel({ show, progress}) {
  return (
    show && (
        <Text style={styles.progressText}>
            {Math.round(progress * 100)}%      

        </Text>
    )
   
  );
}
//Progress bar will take in a label and a progress prop
//the progress label will be shown if the label prop is true
//the label can then be switchted from IOS or Android
//the ProgressBar Component is just taking the ProgressLabl component from above and passing properties to it
//show is true or false..aka show the progress bar or not

//we need to destructure the progress prop from the props object. What I mean by destructing is that we aer taking the progress props from each of the platforms (ios or android) from our ProgressBarComponent files, and breaking them into their individual properties/variables/pieces

export default function ProgressBar({ progress, label }) {
    <View style={styles.progress}>
        <ProgressLabel show={label} progress={progress} />
        <ProgressBarComponent
            {...progressProps}
            style={styles.progress}
            progress={progress}
            
        />

        
    </View>
}

//lets add prop types to our bar so we make sure that we get the correct data types and components type for our progress bar

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
    label: PropTypes.bool.isRequired,
}


//we can also add default properties for when the page loads.  these properties are what the component starts out with

ProgressBar.defaultProps = {
    progress: 0,
    label: true,
};