import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Loading } from "./src/components/common";

import { Auth, Dashboard } from "./src/screens";

export default function App() {
  const [jwt, setJwt] = useState("");

  const newJWT = (jwt) => {
    debugger
    setJwt(jwt)
  }  

  return (
    <View style={styles.container}>{!jwt ? <Auth newJWT={newJWT} /> : <Dashboard />}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
