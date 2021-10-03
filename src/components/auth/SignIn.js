import React, { useState, Fragment } from "react";
import { View, Text } from "react-native";
import { Input, TextLink, Button, Loading } from "../common";
import axios from 'axios';
import deviceStorage from '../../services/deviceStorage';

const SignIn = ({ newJWT, authSwitch }) => {
  const { form, section, errorTextStyle } = styles;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onLoginFail = () => {
    setError('Login Failed')
    setLoading(false)
  }

  const loginUser = () => {
    setError("");
    setLoading(true);
    debugger
    axios
      .post("http://localhost:5000/v1/api/auth/signin", {
        username,
        password
      })
      .then((response) => {
        setLoading(false);
        deviceStorage.saveItem("id_token", response.data.token)
        newJWT(response.data.token)
        console.log(response)
        
      })
      .catch((error) => {
        console.log(error)
        onLoginFail();
      });
  };

  return (
    <Fragment>
      <View style={form}>
        <View style={section}>
          <Input
            placeholder="tinchodev"
            label="Username"
            value={username}
            onChangeText={(username) => setUsername(username)}
          />
        </View>

        <View style={section}>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <Text style={errorTextStyle}>{error}</Text>

        {!loading ? <Button onPress={loginUser}>Login</Button> : <Loading size={"large"} />}
      </View>
      <TextLink onPress={authSwitch}>
        Don't have an account? Register!
      </TextLink>
    </Fragment>
  );
};

const styles = {
  form: {
    width: "100%",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  section: {
    flexDirection: "row",
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#ddd",
  },
  errorTextStyle: {
    alignSelf: "center",
    fontSize: 18,
    color: "red",
  },
};

export { SignIn };
