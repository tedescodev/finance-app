import React, { useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { SignIn, SignUp } from "../components/auth";

const Auth = ({ newJWT }) => {
  const { container } = styles;

  const [showLogin, setShowLogin] = useState(false);

  const authSwitch = () => {
    setShowLogin(!showLogin)
  }

  const whichForm = () => {
    if(!showLogin){
      return(
        <SignUp newJWT={newJWT} authSwitch={authSwitch} />
      )
    } else {
      return(
        <SignIn newJWT={newJWT} authSwitch={authSwitch} />
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
