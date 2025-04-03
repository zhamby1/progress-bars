import React, {useState} from "react";
import {View, TextInput, Button, Text, StyleSheet, Alert} from "react-native";
import styles from "./styles";



function App() {
  //create a way to add a tweet or post to an api/db
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  //lets set a stateful response so we can see the response from the api
  const [response, setResponse] = useState(null);

  //function that posts a tweet or post to the api
  const handlePost = async () =>{
    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        //when we are using fetch to add to a api/db we need to use the post method
        method: "POST",
        //then we need to say what data type we are sending over..we almost always use json
        headers: {
          "Content-Type": "application/json",
        },
        //body is the data we are sending over
        body: JSON.stringify({
          title,
          body,
          userId: 1})
      });
      //then we need to check if the response is ok
      setResponse(await res.json())
      Alert.alert("Success", "Post created successfully");

    }
    catch{
      Alert.alert("Error", "Failed to create post");
      
    }
  }
  

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput style={styles.input} placeholder="Body" value={body} onChangeText={setBody} />
      <Button title="Post" onPress={handlePost} />
      {response && (
        <View style={styles.response}>
          <Text>Response:</Text>
          <Text>{JSON.stringify(response, null, 2)}</Text>
        </View>
      )}
    </View>

  );
}

export default App;