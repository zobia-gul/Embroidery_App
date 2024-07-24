import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { black } from "./Constants";
import Field from "./Field";
import Btn from "./Btn";
import Background from "./Background";

const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const [resetPassword, setResetPassword] = useState("");

  const validateFields = () => {
    if (!email) {
      Alert.alert("Validation Error", "Please enter your Email.");
      return false;
    }
    if (!resetPassword) {
      Alert.alert("Validation Error", "Please enter your password.");
      return false;
    }
    return true;
  };

  const handleResetPassword = () => {
    if (validateFields()) {
      props.navigation.navigate("Login");
    }
  };

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.headingText}>Reset your password here</Text>
        <View style={styles.formContainer}>
        <View>
          <Field
            placeholder="Email"
            keyboardType={"email-address"}
            onChangeText={setEmail}
            value={email}
          />
          <Field
            placeholder="New Password"
            secureTextEntry={true}
            onChangeText={setResetPassword}
            value={resetPassword}
          />
        </View>
        <View>
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
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
    paddingTop:125,
   },
   formContainer: {
    backgroundColor: "white",
    height: 700,
    width: 360,
    borderTopLeftRadius: 170,
    paddingTop: 100,
    alignItems: "center",
  },
});

export default ResetPassword;
