import React from "react";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";
import Button from "../../customs/Button";
import { colors } from "../../assets/styles/colors";

const HouseResult = () => {
  return (
    <Container>
      <Header homeBack={true} back={true}>
        HouseResult
      </Header>
      <Button pathMain="HouseScreens" path="HouseDetail" color={colors.blue}>
        HouseDetail
      </Button>
    </Container>
  );
};

export default HouseResult;
