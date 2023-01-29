import React from "react";
import { NativeBaseProvider, Box, useSafeArea} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "./screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider>
      <Box flex={1} backgroundColor='#000000'>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Box>
    </NativeBaseProvider>
  );
}
