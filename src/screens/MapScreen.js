import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import MapLocation from "./components/MapLocation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "./components/NavigateCard";
import RideOptionsCard from "./components/RideOptionsCard";
import { styled } from "styled-components";
import tw from "twrnc";

const Vii = styled.View`
  height: 1000px;

  width: auto;
`;

const MapScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2`}>
        <MapLocation />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
