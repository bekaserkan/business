import React from "react";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";
import LayoutTab from "../../layouts/tabs";

const Chat = () => {
  return (
    <LayoutTab>
      <Container>
        <Header back={true}>Чат</Header>
      </Container>
    </LayoutTab>
  );
};

export default Chat;
