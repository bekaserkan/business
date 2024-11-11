import React, { useState } from "react";
import { TextInput, StyleSheet, View, Modal, ScrollView } from "react-native";
import { colors } from "../assets/styles/colors";
import TextContent from "../assets/styles/components/TextContent";
import Wave from "./Wave";
import Header from "../components/Header";
import Container from "../assets/styles/components/Container";
import Column from "../assets/styles/components/Column";
import { useStateHouse } from "../context/stateHouseContext";

const InputSelect = ({
  styleContainer,
  style,
  value,
  onChangeText,
  placeholder,
  keys,
  label,
  border,
  select,
  handle,
}) => {
  const [modal, setModal] = useState(false);
  const { param, filter, setFilter } = useStateHouse();

  const closeModal = () => {
    setModal(false);
  };

  if (select) {
    return (
      <View>
        <Wave handle={() => setModal(true)}>
          <View
            style={[
              {
                height: 50,
              },
              border && {
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
              {filter[keys ? keys : value].name}
            </TextContent>
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
                  {param.region &&
                    param[value].map((el, id) => (
                      <Wave
                        key={id}
                        handle={() => {
                          closeModal();
                          setFilter({
                            ...filter,
                            [keys ? keys : value]: { id: el.id, name: el.name },
                          });
                        }}
                      >
                        <TextContent
                          fontSize={14}
                          fontWeight={500}
                          color={colors.black}
                        >
                          {el.name}
                        </TextContent>
                      </Wave>
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
      <View
        style={[
          {
            height: 50,
          },
          border && {
            borderBottomWidth: 1,
            borderBottomColor: colors.gray,
          },
          styleContainer,
        ]}
      >
        <TextContent top={2} fontSize={12} fontWeight={400} color={colors.gray}>
          {label}
        </TextContent>
        <TextInput
          style={[stylesInput.basa, style]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.gray}
        />
      </View>
    );
  }
};

const stylesInput = StyleSheet.create({
  inputContainerFocused: {
    borderColor: colors.blue,
    borderWidth: 1,
    backgroundColor: "#1856CD1A",
  },
  basa: {
    marginTop: 6,
    width: "100%",
    fontSize: 16,
    fontWeight: "400",
    color: colors.black,
  },
});

export default InputSelect;
