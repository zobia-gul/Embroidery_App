import React from "react";
import { View, StyleSheet, ImageBackground } from 'react-native';

const Background = (props) => {
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require("./assets/embroidery.jpg")} 
                style={styles.imageBackground}
                resizeMode="cover">  
                <View style={styles.overlay} />
                <View style={styles.content}>
                    {props.children}
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)' // Adjust opacity as needed
    },
    content: {
        flex: 1, // Ensure content takes up the full height available
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Background;
