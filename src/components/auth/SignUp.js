import React, { useState, Fragment } from "react";
import { View, Text } from "react-native";
import { Input, TextLink, Button, Loading } from "../common";
import axios from "axios";

const SignUp = ({ authSwitch }) => {
  const { form, section, errorTextStyle } = styles;
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onRegistrationFail = () => {
    setError('Registration Failed')
    setLoading(false)
  }

  const registerUser = () => {
    setError("");
    setLoading(true);
    debugger
    axios
      .post("http://localhost:5000/v1/api/auth/signup", {
        name,
        username,
        email,
        password,
        requestedBy: "Finance App"
      })
      .then((response) => {
        setLoading(false);
        authSwitch()
        console.log(response)
        
      })
      .catch((error) => {
        console.log(error)
        onRegistrationFail()
      });
  };

  return (
    <Fragment>
      <View style={form}>
      <View style={section}>
          <Input
            placeholder="Martin Rodriguez"
            label="Name"
            value={name}
            onChangeText={(name) => setName(name)}
          />
        </View>

        <View style={section}>
          <Input
            placeholder="tincho"
            label="Username"
            value={username}
            onChangeText={(username) => setUsername(username)}
          />
        </View>

        <View style={section}>
          <Input
            placeholder="user@email.com"
            label="Email"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={section}>
          <Input
            secureTextEntry
            placeholder="gSst^xW$548"
            label="Password"
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <View style={section}>
          <Input
            secureTextEntry
            placeholder="gSst^xW$548"
            label="Confirm Password"
            value={password_confirmation}
            onChangeText={(password_confirmation) =>
              setPasswordConfirmation(password_confirmation)
            }
          />
        </View>

        <Text style={errorTextStyle}>{error}</Text>

        {!loading ? <Button onPress={registerUser}>Register</Button> : <Loading size={"large"} />}
      </View>
      <TextLink onPress={authSwitch}>Already have an account? Log in!</TextLink>
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

export { SignUp };
