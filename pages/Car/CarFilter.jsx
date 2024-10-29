import React from "react";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";
import Button from "../../customs/Button";
import { colors } from "../../assets/styles/colors";

const CarFilter = () => {
  return (
    <Container>
      <Header back={true}>CarFilter</Header>
      <Button pathMain="CarScreens" path="CarResult" color={colors.blue}>
        CarResult
      </Button>
    </Container>
  );
};

export default CarFilter;
