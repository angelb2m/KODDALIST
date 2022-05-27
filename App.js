import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "koddatest/src/components/main/HomeScreen"
import DetailScreen from "koddatest/src/components/details/DetailScreen"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
          />

          <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}