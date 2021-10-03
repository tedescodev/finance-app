import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Storage } from 'expo-storage'

import { Loading } from "./src/components/common";

import { Auth, Dashboard } from "./src/screens";

export default function App() {
  const [jwt, setJwt] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleJwt = (jwt) => {
    setJwt(jwt);
  };

  const loadJWT = async () => {
    try {
      debugger
      const value = await Storage.getItem({key: "id_token"})
      if (value !== null) {
        setLoading(false);
        setJwt(value) 
      } 
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  }

  useEffect(() => {
    debugger
    setLoading(true);
    loadJWT();
  }, []);

  return (
    <View style={styles.container}>
      {/* {loading && <Loading size={"large"} />} */}
      {!jwt ? (
        <Auth handleJwt={handleJwt} />
      ) : (
        <Dashboard handleJwt={handleJwt} />
      )}
    </View>
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
