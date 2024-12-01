import React from "react";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";
import LayoutTab from "../../layouts/tabs";

const Report = () => {
  return (
    <LayoutTab>
      <Container>
        <Header back={true}>Мои отчеты</Header>
        
      </Container>
    </LayoutTab>
  );
};

export default Report;
