import React from "react";
import { View, Button } from "react-native";
import styles from "./styles";
import loading from "./loading";


const First = loading(({naviagtion}) => {
    <View style={styles.container}>
        <Button title="Go to First" onPress={() => navigation.navigate("First")}/>
        <Button title="Go to Second" onPress={() => navigation.navigate("Second")}/>
        
    </View>})

export default Third;