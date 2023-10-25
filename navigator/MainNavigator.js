import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import * as ROUTES from "../constants/routes";

import WelcomeScreen from "../src/screens/WelcomeScreen";
import HomeScreen from "../src/screens/HomeScreen";
import MapScreen from "../src/screens/MapScreen";
import MapOpt from "../src/screens/MapOpt";
import { styled } from "styled-components";
import { Platform } from "react-native";

const MainWrapper = styled.KeyboardAvoidingView`
  flex: 1;
`;

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainWrapper
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
      >
        <Stack.Navigator>
          <Stack.Screen
            name={ROUTES.WELCOME_SCREEN}
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.HOME_SCREEN}
            component={HomeScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name={ROUTES.MAP_OPT}
            component={MapOpt}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.MAP_SCREEN}
            component={MapScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </MainWrapper>
    </NavigationContainer>
  );
};

export default MainNavigator;
