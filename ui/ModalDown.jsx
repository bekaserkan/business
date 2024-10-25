import React from "react";
import { View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { colors } from "../assets/styles/colors";

export default function ModalDown({ black, modal, setModal, children }) {
  if (modal) {
    const toggleModal = () => {
      setModal(false);
    };
    const stylesModal = StyleSheet.create({
      modal: {
        justifyContent: "flex-end",
        margin: 0,
      },
      content: {
        width: "100%",
        backgroundColor: black ? colors.phon : colors.white,
        justifyContent: "center",
        alignItems: "center",
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        paddingHorizontal: 16,
        paddingBottom: 60,
      },
      clip: {
        alignSelf: "center",
        marginTop: 16,
        width: 74,
        height: 4,
        borderRadius: 10,
        backgroundColor: colors.gray,
        marginBottom: 10,
      },
    });
    return (
      <View>
        <Modal
          isVisible={modal}
          swipeDirection="down"
          onBackdropPress={toggleModal}
          onSwipeComplete={toggleModal}
          style={stylesModal.modal}
        >
          <View style={stylesModal.content}>
            <View style={stylesModal.clip}></View>
            {children}
          </View>
        </Modal>
      </View>
    );
  }
}
