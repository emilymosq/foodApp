import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "./app/presentation/views/auth/login";
import RegisterScreen from "./app/presentation/views/auth/registro";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>

        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen}></Stack.Screen>
        </Stack.Navigator>

      </NavigationContainer>
  );
}

