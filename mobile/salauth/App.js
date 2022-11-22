import * as React from 'react';
import { Button, MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Goldman_400Regular, Goldman_700Bold } from '@expo-google-fonts/goldman';

import Splash from "./screens/Splash"
import SignIn from "./screens/SignIn"
import SignUp from "./screens/SignUp"
import Settings from "./screens/Settings"
import Partners from "./screens/Partners"
import Home from "./screens/Home"
import Account from "./screens/Account"
import CameraScreen from './screens/CameraScreen';


const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'orange',
    secondary: 'yellow',
    secondaryContainer: "red",
  },
};

export default function App() {

  let fontsLoaded = async() => {
    await useFonts({Goldman_400Regular, Goldman_700Bold});
  };
  
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
          <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="Partners" component={Partners} options={{ headerShown: false }}/>
          <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
          <Stack.Screen name="Account" component={Account} options={{ headerShown: false }}/>
          <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
