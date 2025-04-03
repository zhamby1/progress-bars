import React from "react";
import { View, Button } from "react-native";
import styles from "./styles";
import loading from "./loading";


const First = loading(({naviagtion}) => {
    <View style={styles.container}>
        <Button title="Go to Second" onPress={() => navigation.navigate("Second")}/>
        <Button title="Go to Third" onPress={() => navigation.navigate("Third")}/>
        
    </View>})

export default First;