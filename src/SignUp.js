import React, { useState } from "react";
import { View, Text, Alert, StyleSheet, ScrollView } from "react-native";
import Background from "./Background";
import Btn from "./Btn";
import { black } from "./Constants";
import Field from "./Field";
import CheckBox from '@react-native-community/checkbox';
import DropdownBtn from "./DropdownBtn";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Gender");
  const [phone, setPhone] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^03\d{2}-\d{7}$/;
    return phoneRegex.test(phone);
  };

  const validateFields = () => {
    if (!email || !validateEmail(email)) {
      Alert.alert("Validation Error", "Please enter a valid email address.");
      return false;
    }
    if (!password || password.length < 8) {
      Alert.alert("Validation Error", "Password must be at least 8 characters long.");
      return false;
    }
    if (!age || age > 100 || age < 13) {
      Alert.alert("Validation Error", "Please enter a valid age.");
      return false;
    }
    if (gender === "Gender") {
      Alert.alert("Validation Error", "Please select your gender.");
      return false;
    }
    if (!phone || !validatePhone(phone)) {
      Alert.alert("Validation Error", "Please enter a valid phone number.");
      return false;
    }
    if (!isChecked) {
      Alert.alert("Validation Error", "You must agree to the terms and conditions.");
      return false;
    }
    return true;
  };

  const handleRegister = () => {
    if (validateFields()) {
      props.navigation.navigate("Login");
    }
  };

  return (
    <Background>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.registerText}>Register</Text>
        <View style={styles.formContainer}>
          <Text style={styles.createAccountText}>Create a new account</Text>
          <Field
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
          <Field
            placeholder="Age"
            keyboardType="numeric"
            onChangeText={setAge}
            value={age}
          />
          <DropdownBtn
            selectedOption={gender}
            setSelectedOption={setGender}
          />
          <Field
            placeholder="Phone: 03xx-xxxxxxx"
            keyboardType="phone-pad"
            onChangeText={setPhone}
            value={phone}
          />
          <View style={styles.checkboxContainer}>
            <CheckBox
              disabled={false}
              value={isChecked}
              onValueChange={(newValue) => setIsChecked(newValue)}
            />
            <Text style={styles.checkboxLabel}>I agree to the terms & conditions</Text>
          </View>
          <View style={styles.registerButtonContainer}>
            <Btn
              bgcolor={black}
              textColor="white"
              btnLabel="Register"
              Press={handleRegister}
            />
          </View>
        </View>
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
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
    paddingTop: 50,
    alignItems: "center",
  },
  createAccountText: {
    fontSize: 20,
    color: black,
    paddingBottom: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
  registerButtonContainer: {
    marginTop: 30,
    paddingTop: 7,
  },
});

export default SignUp;
