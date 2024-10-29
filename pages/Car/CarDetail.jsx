import React from "react";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";
import Button from "../../customs/Button";
import { colors } from "../../assets/styles/colors";

const CarDetail = () => {
  return (
    <Container>
      <Header back={true}>CarDetail</Header>
      <Button
        pathMain="CarScreens"
        path="CarPrivateProfile"
        color={colors.blue}
      >
        CarPrivateProfile
      </Button>
      <Button
        top={20}
        pathMain="CarScreens"
        path="CarBusinessList"
        color={colors.blue}
      >
        CarBusinessList
      </Button>
      <Button
        top={20}
        pathMain="CarScreens"
        path="CarBusinessProfile"
        color={colors.blue}
      >
        CarBusinessProfile
      </Button>
    </Container>
  );
};

export default CarDetail;
