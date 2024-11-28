import React from "react";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";
import InputSelect from "../../customs/InputSelect";
import { useStateHouse } from "../../context/stateHouseContext";
import Wrapper from "../../assets/styles/components/Wrapper";
import Column from "../../assets/styles/components/Column";
import { ScrollView } from "react-native";

const AddHouse = () => {
  const { reset, paramAdd } = useStateHouse();

  console.log(paramAdd, "beka");

  return (
    <Container none={true}>
      <Header back={true} iks={true} reset={reset} container={true}>
        Добавление объявления
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Wrapper top={true} padding={[200, 8]}>
          <Column gap={6}>
            {paramAdd.map(
              (el, id) =>
                el.input == false && (
                  <InputSelect
                    key={id}
                    select={el.input == false}
                    label={el.title}
                    keys={el.label == "floor" ? "floor" : ""}
                    value={el.label == "floor" ? "floors" : el.label}
                    placeholder={el.placeholder}
                    add={true}
                  />
                )
            )}
          </Column>
        </Wrapper>
      </ScrollView>
    </Container>
  );
};

export default AddHouse;
