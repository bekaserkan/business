import React from "react";
import Container from "../assets/styles/components/Container";
import Header from "../components/Header";

const activation = () => {
  return (
    <Container>
      <Header handleBack={true} back={true}>
        Код подтверждения
      </Header>
    </Container>
  );
};

export default activation;
