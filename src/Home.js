import React from 'react';
import { View, Text, StyleSheet } from 'react-native';  
import { useNavigation } from '@react-navigation/native'; // Import useNavigation


const Home = () => {
  const navigation = useNavigation(); // Get navigation object

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Our App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Home;
