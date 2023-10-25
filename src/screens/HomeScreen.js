import React from "react";
import { styled } from "styled-components";
import MapOpt from "./MapOpt";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../../slices/navSlice";
import MapView, { Marker } from "react-native-maps";

const Main = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
`;
const Container = styled.View`
  background-color: white;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

const Mapp = styled.View`
  height: 300px;
  margin-bottom: 20px;
`;

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <Main>
      <Mapp>
        <MapView
          mapType="mutedStandard"
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 41.715137,
            longitude: 44.827095,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        />
      </Mapp>

      <GooglePlacesAutocomplete
        placeholder="ჩაწერეთ სადაც იმყოფებით"
        styles={{
          container: {
            flex: 0,
            padding: 10,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        onPress={(data, details = null) => {
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            })
          );
          dispatch(setDestination(null));
        }}
        returnKeyType={"search"}
        fetchDetails={true}
        enablePoweredByContainer={false}
        minLength={2}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
      />
      <MapOpt />
    </Main>
  );
};

export default HomeScreen;
