import React from "react";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";
import Button from "../../customs/Button";
import { colors } from "../../assets/styles/colors";

const CarResult = () => {
  return (
    <Container>
      <Header homeBack={true} back={true}>
      предложений
      </Header>
      <Button pathMain="CarScreens" path="CarDetail" color={colors.blue}>
        CarDetail
      </Button>
    </Container>
  );
};

export default CarResult;
