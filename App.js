import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import StartPage from './src/StartPage';
import SignUp from './src/SignUp';
import Login from './src/Login';
import ResetPassword from './src/ResetPassword';
import Home from './src/Home'; 
import DrawerNavigator from './src/DrawerNavigator'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="StartPage" component={StartPage} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={DrawerNavigator} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
