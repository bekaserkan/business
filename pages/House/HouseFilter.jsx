import React from "react";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";
import Button from "../../customs/Button";
import { colors } from "../../assets/styles/colors";

const HouseFilter = () => {
  return (
    <Container>
      <Header back={true}>HouseFilter</Header>
      <Button pathMain="HouseScreens" path="HouseResult" color={colors.blue}>
        HouseResult
      </Button>
    </Container>
  );
};

export default HouseFilter;
