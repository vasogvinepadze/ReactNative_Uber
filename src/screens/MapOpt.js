import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styled } from "styled-components";
import * as ROUTES from "../../constants/routes";
import { useNavigation } from "@react-navigation/native";

const Cont = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const Click = styled.TouchableOpacity`
  padding: 5px;
  margin: 10px auto;
  background-color: whitesmoke;
  width: 400px;

  flex-direction: row;
`;

const Main = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const Title = styled.Text`
  color: black;
  font-weight: bold;
`;

const data = [
  {
    id: "123",
    title: "იმგზავრე",
    image: require("../../images/uber.png"),
  },
  {
    id: "223",
    title: "Bolt Food",
    fast: "სწრაფი მიწოდება",
    image: require("../../images/food.png"),
  },
];

const MapOpt = () => {
  const navigation = useNavigation();

  return (
    <Cont>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Click onPress={() => navigation.navigate(ROUTES.MAP_SCREEN)}>
            <Main>
              <Image style={{ height: 50, width: 65 }} source={item.image} />

              <View style={{ padding: 40, paddingHorizontal: 5 }}>
                <Title style={{ fontSize: 18 }}>{item.title}</Title>
                <Title>{item.fast}</Title>
              </View>
            </Main>
          </Click>
        )}
      />
    </Cont>
  );
};

export default MapOpt;
