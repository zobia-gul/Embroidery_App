import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import Background from "./Background";
import Btn from "./Btn";
import { black } from "./Constants";

const StartPage = (props) => {
    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.title}>Crafted Endless</Text>
                <Text style={[styles.title, styles.subtitle]}>Elegance!</Text>
                <Btn
                    bgcolor={black}
                    textColor='white'
                    btnLabel="Login"
                    Press={() => props.navigation.navigate("Login")}
                />
                <Btn
                    bgcolor='white'
                    textColor={black}
                    btnLabel="Signup"
                    Press={() => props.navigation.navigate("SignUp")}
                />
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 50,
        marginVertical: 50,
    },
    title: {
        color: 'white',
        fontSize: 55,
    },
    subtitle: {
        paddingBottom: 40,
    },
});

export default StartPage;
