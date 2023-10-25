import { StyleSheet } from "react-native";
import React from "react";
import { styled } from "styled-components";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";

import { setDestination } from "../../../slices/navSlice";

import * as ROUTES from "../../../constants/routes";

const Container = styled.SafeAreaView`
  margin: 20px;

  flex: 1;
`;

const NavigateCard = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <GooglePlacesAutocomplete
        placeholder="სად მიდიხარ?"
        styles={toInp}
        returnKeyType={"search"}
        fetchDetails={true}
        enablePoweredByContainer={false}
        minLength={2}
        onPress={(data, details = null) => {
          dispatch(
            setDestination({
              location: details.geometry.location,
              description: data.description,
            })
          );
          navigation.navigate(ROUTES.RIDE_OPTIONS_CARD);
        }}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
      />
    </Container>
  );
};

export default NavigateCard;

const toInp = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  textInput: {
    fontSize: 20,
  },
});
