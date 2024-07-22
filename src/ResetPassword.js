import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResetPassword = () => {
  return (
    <View style={styles.container}>
      <Text>Reset your password here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ResetPassword;
