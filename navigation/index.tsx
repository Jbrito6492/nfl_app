/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ColorSchemeName } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SignUpScreen from "../screens/SignUpScreen";
import LogInScreen from "../screens/LogInScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { AuthStackParamList, RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import DrawerNavigator from "./DrawerNavigator";
import Colors from "../constants/Colors";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const AuthStack = createStackNavigator<AuthStackParamList>();
function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen name="LogIn" component={LogInScreen} />
    </AuthStack.Navigator>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const RootStack = createStackNavigator<RootStackParamList>();
function RootNavigator() {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerLeft: () => (
          <Ionicons
            name="menu-sharp"
            size={30}
            style={{ marginTop: -3, marginLeft: 30 }}
          />
        ),
      }}
    >
      <RootStack.Screen name="Root" component={BottomTabNavigator} />
      <RootStack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </RootStack.Navigator>
  );
}
