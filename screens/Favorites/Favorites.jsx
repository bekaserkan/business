import React from "react";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";
import LayoutTab from "../../layouts/tabs";

const Favorites = () => {
  return (
    <LayoutTab>
      <Container>
        <Header back={true}>Избранное</Header>
      </Container>
    </LayoutTab>
  );
};

export default Favorites;
