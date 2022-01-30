import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

//Powered By GIPHY
const URI =
  "https://api.giphy.com/v1/gifs/search?api_key=RVpoNh1sWl1BUUzOZsatKpHZZ0SG5nvY&q=happy+birthday&limit=15&offset=0&rating=g&lang=en";

export default function App() {
  const [giff, setGiffs] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const num = Math.floor(Math.random() * 15);
    const response = await fetch(URI);
    const json = await response.json();
    console.log(num)
    setGiffs(json.data[num].images.original.url);
    setLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      <Text> FELIZ CUMPLEAÑOS :) </Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
          <Image style={styles.image} source={{ uri: giff }} />
      )}
      <Text>Powered By GIPHY </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
