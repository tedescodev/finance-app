import React, { useState, Fragment } from "react";
import { View, Text } from "react-native";
import { Input, TextLink, Button, Loading } from "../common";

const SignIn = ({ authSwitch }) => {
  const { form, section, errorTextStyle } = styles;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Fragment>
      <View style={form}>
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
            placeholder="password"
            label="Password"
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <Text style={errorTextStyle}>{error}</Text>

        {!loading ? <Button>Login</Button> : <Loading size={"large"} />}
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
