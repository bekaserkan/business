import React from "react";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";
import LayoutTab from "../../layouts/tabs";
import Wrapper from "../../assets/styles/components/Wrapper";
import Column from "../../assets/styles/components/Column";
import { Image, StyleSheet, View } from "react-native";
import Flex from "../../assets/styles/components/Flex";
import Reports from "../../assets/svg/reports";
import TextContent from "../../assets/styles/components/TextContent";
import { colors } from "../../assets/styles/colors";
import { useСondition } from "../../context/stateContext";
import Between from "../../assets/styles/components/Between";
import Button from "../../customs/Button";
import Wave from "../../customs/Wave";
import Present from "../../assets/svg/present";
import ButtonLayouts from "../../layouts/buttonLayouts";

const Balance = () => {
  const { userData } = useСondition();

  return (
    <Container none={true} phon={true}>
      <Header container={true} back={true}>
        Мой баланс
      </Header>
      <ButtonLayouts
        handle={""}
        loading={""}
        title="Пополнить баланс"
        color={colors.blue}
      >
        <Column
          style={{
            flex: 1,
          }}
          gap={6}
        >
          <Wrapper top={true} padding={[16, 0]}>
            <View style={styles.box}>
              <Column gap={10}>
                <Flex gap={10}>
                  <Reports />
                  <Column gap={4}>
                    <TextContent
                      fontSize={12}
                      fontWeight={400}
                      color={colors.gray}
                    >
                      Лицевой счёт:
                    </TextContent>
                    <TextContent
                      fontSize={16}
                      fontWeight={500}
                      color={colors.black}
                    >
                      {userData?.username}
                    </TextContent>
                  </Column>
                </Flex>
                <Between center={"center"}>
                  <TextContent
                    fontSize={12}
                    fontWeight={400}
                    color={colors.gray}
                  >
                    Баланс:
                  </TextContent>
                  <TextContent
                    fontSize={20}
                    fontWeight={600}
                    color={colors.black}
                  >
                    {userData?.balance} сом
                  </TextContent>
                </Between>
              </Column>
            </View>
          </Wrapper>
          <Wrapper padding={[16, 16]}>
            <Between center={"center"}>
              <Column gap={8}>
                <TextContent
                  fontSize={18}
                  fontWeight={500}
                  color={colors.black}
                >
                  Активировать промокод
                </TextContent>
                <TextContent
                  style={{
                    width: 250,
                  }}
                  fontSize={12}
                  fontWeight={400}
                  color={colors.gray}
                >
                  Получайте эксклюзивные бонусы, подарки или скидки
                </TextContent>
              </Column>
              <Present />
            </Between>
          </Wrapper>
          <Wrapper
            style={{
              flex: 1,
            }}
            padding={[16, 16]}
          >
            <TextContent fontSize={20} fontWeight={600} color={colors.black}>
              Выберите сумму пополнения
            </TextContent>
          </Wrapper>
        </Column>
      </ButtonLayouts>
    </Container>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.phon,
  },
});

export default Balance;
