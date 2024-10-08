import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import StartPage from "./src/StartPage";
import SignUp from "./src/SignUp";
import Login from "./src/Login";
import ResetPassword from "./src/ResetPassword";
import DrawerNavigator from "./src/DrawerNavigator";
import ProductDetail from "./src/ProductDetail";
import { CartProvider } from "./src/CartContext";
import { AuthProvider } from "./src/AuthContext";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="StartPage" component={StartPage} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="Home" component={DrawerNavigator} />
              <Stack.Screen name="ResetPassword" component={ResetPassword} />
              <Stack.Screen name="ProductDetail" component={ProductDetail} />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
