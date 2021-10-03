import React from "react";
import { Fragment } from "react";
import { View, Text, Button } from "react-native";

import { Storage } from "expo-storage";

const Dashboard = ({ handleJwt }) => {
  const deleteJWT = async () => {
    debugger
    try {
      await Storage.removeItem({ key: "id_token" });
      const value = await Storage.getItem({ key: "id_token" });
      if (value === null) {
        handleJwt(null);
      }
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  };
  return (
    <Fragment>
      <View style={styles.container}>
        <Text>Adentro</Text>
        <Button onPress={deleteJWT}>Log Out</Button>
      </View>
    </Fragment>
  );
};

const styles = {
  spinnerContainer: {
    flex: -1,
    marginTop: 12,
    marginBottom: 12,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
};

export { Dashboard };
