import React from "react";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";
import InputSelect from "../../customs/InputSelect";
import { useStateHouse } from "../../context/stateHouseContext";

const AddHouse = () => {
  const { reset } = useStateHouse();

  return (
    <Container>
      <Header back={true} iks={true} reset={reset}>
        AddHouse
      </Header>
      <InputSelect
        select={true}
        label="Регион"
        value="region"
        placeholder="Выберите регион" 
        add={true}
      />
    </Container>
  );
};

export default AddHouse;
