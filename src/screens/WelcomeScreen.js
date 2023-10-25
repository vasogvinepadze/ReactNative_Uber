import React, { useEffect } from "react";
import styled from "styled-components";
import * as ROUTES from "../../constants/routes";

const Main = styled.SafeAreaView`
  flex: 1;
  background-color: black;
`;

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const Title = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: 600;
`;

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate(ROUTES.HOME_SCREEN), 1500);
  }, []);

  return (
    <Main>
      <Container>
        <Title>Welcome to Uber Geo</Title>
      </Container>
    </Main>
  );
};

export default WelcomeScreen;
