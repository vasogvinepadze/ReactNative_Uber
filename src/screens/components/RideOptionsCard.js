import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { styled } from "styled-components";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../../../slices/navSlice";

const Container = styled.SafeAreaView`
  background-color: white;
  flex: 1;
`;
const Title = styled.Text`
  padding-top: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`;

data = [
  {
    id: "Bolt-T-32",
    title: "Economy",
    multiplier: 1,
    image: require("../../../images/uber.png"),
  },
  {
    id: "Bolt-X-12",
    title: "Bolt",
    multiplier: 1.2,
    image: require("../../../images/uber.png"),
  },
  {
    id: "Bolt-X-1",
    title: "Premium",
    multiplier: 1.75,
    image: require("../../../images/uber.png"),
  },
];

const SURGE_CHANGE_RATE = 0.8;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInforamtion = useSelector(selectTravelTimeInformation);

  return (
    <Container>
      <View></View>
      <Title>მანძილი - {travelTimeInforamtion?.distance?.text}</Title>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-1 ${
              id === selected?.id && "bg-gray-500"
            }`}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={image}
            />
            <View>
              <Text>{title}</Text>
              <Text>{travelTimeInforamtion?.duration?.text} მგზავრობა</Text>
            </View>
            <Text style={{ fontWeight: "600", fontSize: 18 }}>
              {new Intl.NumberFormat("ka-GE", {
                style: "currency",
                currency: "GEL",
              }).format(
                (travelTimeInforamtion?.duration?.value *
                  SURGE_CHANGE_RATE *
                  multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={{ backgroundColor: "gray" }}>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            padding: 15,
            fontWeight: "400",
          }}
        >
          აირჩიე {selected?.title}
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default RideOptionsCard;
