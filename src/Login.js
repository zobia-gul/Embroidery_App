import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import Background from "./Background";
import { black } from "./Constants";
import Field from "./Field";
import Btn from "./Btn";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateFields = () => {
    if (!email) {
      Alert.alert("Validation Error", "Please enter your Email.");
      return false;
    }
    if (!password) {
      Alert.alert("Validation Error", "Please enter your password.");
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    if (validateFields()) {
      props.navigation.navigate("Home");
    }
  };

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.loginText}>Login</Text>
        <View style={styles.formContainer}>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.subtitleText}>Login to your account</Text>
          <Field
            placeholder="Email"
            keyboardType={"email-address"}
            onChangeText={setEmail}
            value={email}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("ResetPassword")}
            >
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginButtonContainer}>
            <Btn
              bgcolor={black}
              textColor="white"
              btnLabel="Login"
              Press={handleLogin}
            />
          </View>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "white",
    fontSize: 55,
    fontWeight: "bold",
    marginVertical: 10,
    paddingTop: 110,
    textAlign: "center",
  },
  formContainer: {
    backgroundColor: "white",
    height: 700,
    width: 360,
    borderTopLeftRadius: 170,
    paddingTop: 100,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 40,
    color: black,
    fontWeight: "bold",
  },
  subtitleText: {
    fontSize: 19,
    color: "grey",
    paddingBottom: 30,
  },
  forgotPasswordContainer: {
    width: "100%",
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    color: "blue",
    fontSize: 19,
    paddingRight: 50,
  },
  loginButtonContainer: {
    marginTop: 30,
    paddingTop: 50,
  },
});

export default Login;
