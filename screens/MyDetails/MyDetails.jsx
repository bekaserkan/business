import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "../../components/Header";
import Wrapper from "../../assets/styles/components/Wrapper";
import Column from "../../assets/styles/components/Column";
import Wave from "../../customs/Wave";
import TextContent from "../../assets/styles/components/TextContent";
import { colors } from "../../assets/styles/colors";
import ImageCustom from "../../customs/Image";
import { useСondition } from "../../context/stateContext";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DashBoard from '../../assets/svg/dashboard'

const MyDetails = () => {
  const { loading, userData } = useСondition();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");
  const navigation = useNavigation();

  const toggleModal = (type) => {
    setModalType(type);
    setIsModalVisible(!isModalVisible);
  };
  const handleConfirm = async () => {
    if (modalType === "logout") {
      navigation.navigate("Login");
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("Profile");
    } else if (modalType === "delete") {
      navigation.navigate("Login");
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("Profile");
    } 
    setIsModalVisible(false);
  };
  return (
    <>
      <Header back={true} container={true}>
        Мои данные
      </Header>
      <Column gap={6}>
        <Wrapper padding={[16, 16]} top={true}>
          <View style={{ alignItems: "center" }}>
            <Column gap={6} style={{alignItems:'center'}}>
              <Wave>
                {/* <ImageCustom
                  width={100}
                  height={100}
                  borderRadius={50}
                  source={<DashBoard/>}
                /> */}
                <DashBoard/>
              </Wave>
              <TextContent fontSize={20} fontWeight={600}>
                {userData?.name}
              </TextContent>
              <Wave>
                <TextContent fontSize={14} fontWeight={500} color={colors.blue}>
                  Изменить фото
                </TextContent>
              </Wave>
            </Column>
          </View>
        </Wrapper>
        <Wrapper padding={["100%", 16]} bottom={true}>
          <Column gap={16}>
            <Column gap={4}>
              <TextContent fontSize={14} fontWeight={400} color={colors.black}>
                Электронная почта
              </TextContent>
              <TextInput
                style={[styles.input, styles.input_from_gray]}
                value={userData?.username}
                placeholder="Введите вашу почту"
              />
            </Column>
            <Column gap={4}>
              <TextContent fontSize={14} fontWeight={400} color={colors.black}>
                Имя
              </TextContent>
              <TextInput
                style={[styles.input]}
                value={userData?.name}
                placeholder="Введите ваше имя"
              />
            </Column>
          </Column>
          <Column gap={24} style={styles.marginTop}>
            <Wave handle={() => navigation.navigate("ChangePassword")}>
              <TextContent fontSize={16} fontWeight={500} color={colors.blue}>
                Сменить пароль
              </TextContent>
            </Wave>
            <Wave handle={() => toggleModal("logout")}>
              <TextContent fontSize={16} fontWeight={500} color={colors.red}>
                Выйти
              </TextContent>
            </Wave>
            <Wave handle={() => toggleModal("delete")}>
              <TextContent fontSize={16} fontWeight={500} color={colors.red}>
                Удалить аккаунт
              </TextContent>
            </Wave>
          </Column>
        </Wrapper>
      </Column>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Column gap={16}>
            <TextContent fontSize={20} fontWeight={600} color={colors.black}>
              {modalType === "logout"
                ? "Выйти с аккаунта?"
                : "Удалить аккаунт?"}
            </TextContent>
            <TextContent fontSize={14} fontWeight={400} color={colors.gray}>
              {modalType === "logout"
                ? "Вам придется повторно выполнить авторизацию"
                : "При удалении аккаунта вся ваша информация будет навсегда удалена."}
            </TextContent>
            <View style={styles.modalButtons}>
              <Wave
                handle={() => setIsModalVisible(false)}
                style={[styles.button, styles.cancelButton]}
              >
                <TextContent
                  fontSize={16}
                  fontWeight={500}
                  color={colors.dark_gray}
                >
                  Отмена
                </TextContent>
              </Wave>
              <Wave
                handle={handleConfirm}
                style={[styles.button, styles.confirmButton]}
              >
                <TextContent
                  fontSize={16}
                  fontWeight={500}
                  color={colors.white}
                >
                  {modalType === "logout" ? "Выйти" : "Удалить"}
                </TextContent>
              </Wave>
            </View>
          </Column>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    paddingHorizontal: 16,
    borderRadius: 10,
    fontSize: 16,
    color: colors.black,
    backgroundColor: colors.phon,
  },
  input_from_gray: {
    backgroundColor: "#D0D0D0",
  },
  marginTop: {
    marginTop: 24,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 16,
    paddingBottom: 30,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  modalButtons: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D0D0D0",
  },
  confirmButton: {
    backgroundColor: colors.red,
  },
  cancelText: {},
  cancelButton: {},
});

export default MyDetails;
