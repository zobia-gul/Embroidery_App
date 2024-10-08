import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "react-native-vector-icons";
import AuthContext from "./AuthContext";

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout(); // Update the authentication state
    navigation.navigate("Login", { resetForm: true });
  };

  return (
    <SafeAreaView style={styles.drawerContent}>
      <ScrollView>
        {/* Render drawer items */}
        {props.state.routeNames.map((routeName) => (
          <TouchableOpacity
            key={routeName}
            style={[
              styles.drawerItem,
              {
                backgroundColor:
                  props.state.index ===
                  props.state.routeNames.indexOf(routeName)
                    ? "#ddd"
                    : "transparent",
              },
            ]}
            onPress={() => props.navigation.navigate(routeName)}
          >
            <View style={styles.drawerItemContent}>
              <Ionicons
                name={
                  routeName === "Home"
                    ? "home"
                    : routeName === "Profile"
                    ? "person"
                    : routeName === "Settings"
                    ? "settings"
                    : routeName === "Cart"
                    ? "cart"
                    : "home"
                } // Default icon
                size={24}
                color={
                  props.state.index ===
                  props.state.routeNames.indexOf(routeName)
                    ? "#20B2AA"
                    : "#000"
                }
                style={styles.drawerIcon}
              />
              <Text
                style={[
                  styles.drawerItemText,
                  {
                    color:
                      props.state.index ===
                      props.state.routeNames.indexOf(routeName)
                        ? "#20B2AA"
                        : "#000",
                  },
                ]}
              >
                {routeName}
              </Text>
            </View>
          </TouchableOpacity>
        ))}

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <View style={styles.logoutButtonContent}>
            <Ionicons
              name="log-out"
              size={24}
              color="#000"
              style={styles.logoutIcon}
            />
            <Text style={styles.logoutButtonText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    padding: 16,
    paddingTop: 25,
  },
  drawerItem: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
  },
  drawerItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  drawerIcon: {
    marginRight: 16,
  },
  drawerItemText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutButton: {
    paddingVertical: 16,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  logoutButtonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoutIcon: {
    marginRight: 16,
  },
  logoutButtonText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
});

export default CustomDrawerContent;
