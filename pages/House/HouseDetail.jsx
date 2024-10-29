import React from "react";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";
import Button from "../../customs/Button";
import { colors } from "../../assets/styles/colors";

const HouseDetail = () => {
  return (
    <Container>
      <Header back={true}>HouseDetail</Header>
      <Button
        pathMain="HouseScreens"
        path="HouseResidentialProfile"
        color={colors.blue}
      >
        HouseResidentialProfile
      </Button>
      <Button
        top={20}
        pathMain="HouseScreens"
        path="HouseCompanyProfile"
        color={colors.blue}
      >
        HouseCompanyProfile
      </Button>
    </Container>
  );
};

export default HouseDetail;
