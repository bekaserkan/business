import React from "react";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";
import LayoutTab from "../../layouts/tabs";

const Profile = () => {
  return (
    <LayoutTab>
      <Container phon={true} none={true}>
        <Header back={true} container={true}>
          Profile
        </Header>
      </Container>
    </LayoutTab>
  );
};

export default Profile;
