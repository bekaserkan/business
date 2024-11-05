import React, { useState } from "react";
import Header from "../../components/Header";
import Wrapper from "../../assets/styles/components/Wrapper";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import Column from "../../assets/styles/components/Column";
import { colors } from "../../assets/styles/colors";
import TextContent from "../../assets/styles/components/TextContent";
import Button from "../../customs/Button";
import Photo from "../../assets/svg/photo.js";
import Flex from "../../assets/styles/components/Flex";
import Between from "../../assets/styles/components/Between";
import Wave from "../../customs/Wave";

const CarrChek = () => {
  const [activeTab, setActiveTab] = useState("vin");

  return (
    <Column gap={6}>
      <Wrapper top={true}>
        <Header homeBack={true} back={true}>
          Carcheck
        </Header>
      </Wrapper>
      <Wrapper padding={[16, 16]}>
        <Column gap={16}>
          <View style={styles.tab_container}>
            <TouchableOpacity
              style={[styles.tab, activeTab === "vin" && styles.active_tab]}
              onPress={() => setActiveTab("vin")}
            >
              <TextContent
                fontSize={15}
                fontWeight={500}
                color={activeTab === "vin" ? colors.white : colors.black}
              >
                По Vin коду
              </TextContent>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === "number" && styles.active_tab]}
              onPress={() => setActiveTab("number")}
            >
              <TextContent
                fontSize={15}
                fontWeight={500}
                color={activeTab === "number" ? colors.white : colors.black}
              >
                По гос номери
              </TextContent>
            </TouchableOpacity>
          </View>
          <Between style={styles.vin_input_box}>
            <TextInput
              style={styles.vin_input}
              placeholder="Введите госномер"
              placeholderTextColor={colors.gray}
            />
            <Wave>
              <Photo />
            </Wave>
          </Between>
          <Button color={colors.blue} textColor={colors.white} fontSize={16}>
            Найти
          </Button>
        </Column>
      </Wrapper>
      <View style={styles.box_end}>
        <TextContent fontSize={20} fontWeight={600} color={colors.black}>
          Наши источники данных
        </TextContent>
      </View>
    </Column>
  );
};

const styles = StyleSheet.create({
  box_end: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  tab_container: {
    flexDirection: "row",
    width: "100%",
    height: 36,
    backgroundColor: colors.phon,
    borderRadius: 8,
    paddingVertical: 2,
  },
  tab: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderRadius: 8,
  },
  active_tab: {
    backgroundColor: colors.black,
  },
  vin_input_box: {
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: colors.phon,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  vin_input: {
    width: "80%",
    height: "100%",
    color: colors.black,
    backgroundColor: colors.phon,
    marginLeft: 14,
    fontSize: 16,
    fontWeight: "400",
  },
});

export default CarrChek;
