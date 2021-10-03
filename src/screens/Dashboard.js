import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

const Dashboard = ({ size }) => {
  return (
    <View style={styles.spinnerContainer}>
      <Text>Adentro</Text>
    </View>
  );
};

const styles = {
  spinnerContainer: {
    flex: -1,
    marginTop: 12,
    marginBottom: 12,
  },
};

export { Dashboard };
