import React, { useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { SignIn, SignUp } from "../components/auth";

const Auth = ({ handleJwt }) => {
  const { container } = styles;

  const [showLogin, setShowLogin] = useState(false);

  const authSwitch = () => {
    setShowLogin(!showLogin)
  }

  const whichForm = () => {
    if(!showLogin){
      return(
        <SignIn handleJwt={handleJwt} authSwitch={authSwitch} />
      )
    } else {
      return(
        <SignUp authSwitch={authSwitch} />
      )
    }
  }

  return <View style={container}>{whichForm()}</View>
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
};

export { Auth };
