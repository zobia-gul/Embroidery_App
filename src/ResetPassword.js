import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { black } from "./Constants";
import Field from "./Field";
import Btn from "./Btn";
import Background from "./Background";

const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const [resetPassword, setResetPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateFields = () => {
    if (!email) {
      Alert.alert("Validation Error", "Please enter your Email.");
      return false;
    }
    if (!resetPassword || resetPassword.length < 8) {
      Alert.alert(
        "Validation Error",
        "Password must be at least 8 characters long."
      );
      return false;
    }
    if (!confirmPassword || confirmPassword != resetPassword) {
      Alert.alert("Validation Error", "Password does not matches.");
      return false;
    }
    return true;
  };

  const handleResetPassword = () => {
    if (validateFields()) {
      Alert.alert(
        "Your password has been successfully reset",
        "Please log in with your new password."
      );
      props.navigation.navigate("Login");
    }
  };

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.headingText}>Forgot Password?</Text>
        <View style={styles.formContainer}>
          <Text style={styles.resetPasswordText}>Reset your password here</Text>
          <Field
            placeholder="Email"
            keyboardType={"email-address"}
            onChangeText={setEmail}
            value={email}
          />
          <Field
            placeholder="New Password"
            secureTextEntry={false}
            onChangeText={setResetPassword}
            value={resetPassword}
          />
          <Field
            placeholder="Confirm password"
            secureTextEntry={false}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
          <View style={styles.resetButtonContainer}>
            <Btn
              bgcolor={black}
              textColor="white"
              btnLabel="Reset Password"
              Press={handleResetPassword}
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
  headingText: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    marginVertical: 10,
    paddingTop: 110,
    textAlign: "center",
    paddingBottom:10
  },
  formContainer: {
    backgroundColor: "white",
    height: 700,
    width: 360,
    borderTopLeftRadius: 170,
    paddingTop: 100,
    alignItems: "center",
  },
  resetPasswordText: {
    fontSize: 20,
    color: black,
    paddingBottom: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
  resetButtonContainer: {
    marginTop: 30,
    paddingTop: 50,
    paddingTop: 80,
  },
});

export default ResetPassword;
