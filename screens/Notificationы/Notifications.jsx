import React from "react";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";
import LayoutTab from "../../layouts/tabs";

const Notifications = () => {
  return (
    <LayoutTab>
      <Container>
        <Header back={true}>Уведомления</Header>
      </Container>
    </LayoutTab>
  );
};

export default Notifications;
