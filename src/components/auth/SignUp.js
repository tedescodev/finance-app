import React, { useState, Fragment } from "react";
import { View, Text } from "react-native";
import { Input, TextLink, Button, Loading } from "../common";

const SignUp = ({authSwitch}) => {
  const { form, section, errorTextStyle } = styles;
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [password_confirmation, setPasswordConfirmation] = useState(false);
  const [error, setError] = useState(false);
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

        <View style={section}>
          <Input
            secureTextEntry
            placeholder="confirm password"
            label="Confirm Password"
            value={password_confirmation}
            onChangeText={(password_confirmation) =>
              setPasswordConfirmation(password_confirmation)
            }
          />
        </View>

        <Text style={errorTextStyle}>{error}</Text>

        {!loading ? <Button>Register</Button> : <Loading size={"large"} />}
      </View>
      <TextLink onPress={authSwitch}>
        Already have an account? Log in!
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

export { SignUp };
