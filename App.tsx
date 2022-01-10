import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import Home from "./pages/Home";
import Medication from "./pages/Medication";
import Appointments from "./pages/Appointments";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "home";
            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "Medication":
                iconName = "medicinebox";
                break;
              case "Appointments":
                iconName = "calendar";
                break;
              case "Chat":
                iconName = "message1";
                break;
              case "Profile":
                iconName = "user";
                break;
            }
            return <AntDesign name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: "#39767a",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Medication" component={Medication} />
        <Tab.Screen name="Appointments" component={Appointments} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
