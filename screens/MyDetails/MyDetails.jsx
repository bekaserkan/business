import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import Header from "../../components/Header";
import Wrapper from "../../assets/styles/components/Wrapper";
import Column from "../../assets/styles/components/Column";
import Wave from "../../customs/Wave";
import TextContent from "../../assets/styles/components/TextContent";
import { colors } from "../../assets/styles/colors";
import ImageCustom from "../../customs/Image";

const MyDetails = () => {
  return (
    <>
      <Header back={true} container={true}>
        Мои данные
      </Header>
      <Column gap={6}>
        <Wrapper padding={[16, 16]} top={true}>
          <View style={{ alignItems: "center" }}>
            <Column gap={6}>
              <Wave>
                <ImageCustom width={100} height={100} borderRadius={50} />
              </Wave>
              <TextContent fontSize={20} fontWeight={600}>
                Нурзида
              </TextContent>
              <Wave>
                <TextContent fontSize={14} fontWeight={500} color={colors.blue}>
                  Изменить фото
                </TextContent>
              </Wave>
            </Column>
          </View>
        </Wrapper>
        <Wrapper padding={[16, 16]}>
          <Column gap={8}>
          <TextInput style={styles.input}>
          </TextInput>
          </Column>
        </Wrapper>
      </Column>
    </>
  );
};

const styles = StyleSheet.create({
  profile_img_box: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.gray,
    justifyContent: "center",
    alignItems: "center",
  },
  input :{
    height: 50,
    backgroundColor: colors.gray,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 8,
    fontSize: 16,
    color: colors.black,
  }
});
export default MyDetails;
