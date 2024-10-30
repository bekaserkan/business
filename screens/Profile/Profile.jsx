import React from "react";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";
import LayoutTab from "../../layouts/tabs";
import Wrapper from "../../assets/styles/components/Wrapper";
import ImageCustom from "../../customs/Image";
import { ScrollView, StyleSheet, View } from "react-native";
import TextContent from "../../assets/styles/components/TextContent";
import { colors } from "../../assets/styles/colors";
import Flex from "../../assets/styles/components/Flex";
import Between from "../../assets/styles/components/Between";
import More from "../../assets/svg/more";
import Wave from "../../customs/Wave";
import Column from "../../assets/styles/components/Column";
import Star from "../../assets/svg/star";
import Reports from "../../assets/svg/reports";
import Button from "../../customs/Button";
import Adv from "../../assets/svg/adv";

const Profile = () => {
  const state = true;

  return (
    <LayoutTab>
      <Container phon={true} none={true}>
        <Header back={true} container={true}>
          Profile
        </Header>
        <ScrollView
          style={{
            flex: 1,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Column gap={6}>
            <Wrapper padding={[16, 16]} top={true}>
              <Between center={"center"}>
                <Flex gap={10}>
                  <View
                    style={{
                      width: 60,
                      height: 60,
                    }}
                  >
                    <ImageCustom
                      uri={
                        "https://www.perunica.ru/uploads/posts/2019-09/1567597236_021.jpg"
                      }
                      width={60}
                      height={60}
                      borderRadius={50}
                    />
                  </View>
                  <Column gap={4}>
                    <TextContent
                      fontSize={18}
                      fontWeight={500}
                      color={colors.black}
                    >
                      Имя
                    </TextContent>
                    <TextContent
                      fontSize={14}
                      fontWeight={400}
                      color={colors.gray}
                    >
                      +996 (502) 80-02-02
                    </TextContent>
                  </Column>
                </Flex>
                <Wave>
                  <More />
                </Wave>
              </Between>
            </Wrapper>
            <Wrapper padding={[16, 16]}>
              <Column gap={10}>
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
                          937505
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
                        500 сом
                      </TextContent>
                    </Between>
                    <Button color={colors.black}>Пополнить баланс</Button>
                  </Column>
                </View>
                <Flex gap={10}>
                  <View style={[styles.box, { flex: 1 }]}>
                    <Star />
                    <Flex top={10}>
                      <TextContent
                        fontSize={16}
                        fontWeight={500}
                        color={colors.black}
                      >
                        500 сом
                      </TextContent>
                      <More />
                    </Flex>
                    <TextContent
                      top={4}
                      fontSize={12}
                      fontWeight={400}
                      color={colors.gray}
                    >
                      Не пропускайте свежие новости
                    </TextContent>
                  </View>
                  <View style={[styles.box, { flex: 1 }]}>
                    <Star />
                    <Flex top={10}>
                      <TextContent
                        fontSize={16}
                        fontWeight={500}
                        color={colors.black}
                      >
                        Мои отчеты
                      </TextContent>
                      <More />
                    </Flex>
                    <TextContent
                      top={4}
                      fontSize={12}
                      fontWeight={400}
                      color={colors.gray}
                    >
                      Тут хранятся все ваши купленные отчеты
                    </TextContent>
                  </View>
                </Flex>
                <View style={styles.box}>
                  <Star />
                  <Flex top={10}>
                    <TextContent
                      fontSize={16}
                      fontWeight={500}
                      color={colors.black}
                    >
                      Мой бизнес-аккаунт
                    </TextContent>
                    <More />
                  </Flex>
                  <TextContent
                    top={4}
                    fontSize={12}
                    fontWeight={400}
                    color={colors.gray}
                  >
                    Превратите свой профиль в бизнес-аккаунт с расширенными
                    возможностями
                  </TextContent>
                  <Button top={10} color={colors.black}>
                    Перейти на бизнес-аккаунт
                  </Button>
                </View>
              </Column>
            </Wrapper>
            <Wrapper padding={[200, 16]}>
              <TextContent fontSize={20} fontWeight={600} color={colors.black}>
                Мои объявления
              </TextContent>
              {state && (
                <Column top={50} gap={20}>
                  <View
                    style={{
                      alignItems: "center",
                    }}
                  >
                    <Adv />
                    <TextContent
                      top={20}
                      center={"center"}
                      fontSize={16}
                      fontWeight={400}
                      color={colors.gray}
                    >
                      Превратите свой профиль в бизнес-аккаунт с расширенными
                      возможностями
                    </TextContent>
                  </View>
                  <Button top={10} color={colors.blue}>
                    Добавить объявление
                  </Button>
                </Column>
              )}
            </Wrapper>
          </Column>
        </ScrollView>
      </Container>
    </LayoutTab>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.phon,
  },
});

export default Profile;
