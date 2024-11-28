import React, { useState } from "react";
import { TextInput, StyleSheet, View, Modal, ScrollView } from "react-native";
import { colors } from "../assets/styles/colors";
import TextContent from "../assets/styles/components/TextContent";
import Wave from "./Wave";
import Header from "../components/Header";
import Container from "../assets/styles/components/Container";
import Column from "../assets/styles/components/Column";
import { useStateHouse } from "../context/stateHouseContext";
import RangeCustom from "./Range";
import { useStateCar } from "../context/stateCarContext";
import Arrow from "../assets/svg/arrowRight";
const  InputSelect = ({
  styleContainer,
  style,
  value,
  onChangeText,
  placeholder,
  keys,
  label,
  border,
  select,
  car,
  add,
  handle,
  arrow,
}) => {
  const [modal, setModal] = useState(false);
  const { param, filter, addHouse, setFilter, setAddHouse } = car
    ? useStateCar()
    : useStateHouse();

  const closeModal = () => {
    setModal(false);
  };

  const currentState = add ? addHouse : filter;
  const setCurrentState = add ? setAddHouse : setFilter;

  if (select) {
    return (
      <View>
        <Wave handle={() => setModal(true)}>
          <View
            style={[
              {
                height: 50,
              },
              !border && {
                borderBottomWidth: 1,
                borderBottomColor: colors.gray,
              },
              styleContainer,
            ]}
          >
            <TextContent
              top={2}
              fontSize={12}
              fontWeight={400}
              color={colors.gray}
            >
              {label}
            </TextContent>
            <TextContent
              top={6}
              fontSize={16}
              fontWeight={400}
              color={colors.black}
            >
              {currentState[keys ? keys : value].name}
            </TextContent>
            {arrow && <Arrow />}
          </View>
        </Wave>
        {modal && (
          <Modal
            visible={modal}
            animationType="fade"
            onRequestClose={closeModal}
          >
            <Container>
              <Header back={true} handleBack={closeModal}>
                {label}
              </Header>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Column
                  style={{
                    flex: 1,
                    paddingBottom: 200,
                  }}
                  gap={16}
                >
                  <RangeCustom
                    handle={() => {
                      closeModal();
                      setCurrentState({
                        ...currentState,
                        [keys ? keys : value]: { id: 0, name: "Любой" },
                      });
                    }}
                    active={currentState[keys ? keys : value].name == "Любой"}
                    text="Любой"
                  />
                  {param[value]?.map((el, id) => (
                    <RangeCustom
                      key={id}
                      handle={() => {
                        closeModal();
                        setCurrentState({
                          ...currentState,
                          [keys ? keys : value]: {
                            id: el.id,
                            name: el.name,
                          },
                        });
                      }}
                      active={currentState[keys ? keys : value].name == el.name}
                      text={el.name}
                    />
                  ))}
                </Column>
              </ScrollView>
            </Container>
          </Modal>
        )}
      </View>
    );
  } else {
    return (
      <TextInput
        style={[
          stylesInput.basa,
          !border && {
            borderBottomWidth: 1,
            borderBottomColor: colors.gray,
          },
          style,
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
      />
    );
  }
};

const stylesInput = StyleSheet.create({
  basa: {
    width: "100%",
    height: 50,
    fontSize: 16,
    fontWeight: "400",
    color: colors.black,
  },
});

export default InputSelect;
