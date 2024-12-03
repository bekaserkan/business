import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";
import { url } from "../../api/api";
import Loading from "../../ui/Loading";
import { colors } from "../../assets/styles/colors";
import Column from "../../assets/styles/components/Column";
import Wrapper from "../../assets/styles/components/Wrapper";
import Flex from "../../assets/styles/components/Flex";
import TextContent from "../../assets/styles/components/TextContent";
import Wave from "../../customs/Wave";
import Between from "../../assets/styles/components/Between";
import { useNavigation } from "@react-navigation/native";
import Button from "../../customs/Button";
import ButtonLayouts from "../../layouts/buttonLayouts";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tariffs = () => {
  const [tariffs, setTariffs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [postLoading, setPostLoading] = useState(false);
  const [selectDetail, setSelectDetail] = useState([]);
  const [plan, setPlan] = useState("");
  const navigation = useNavigation();

  const getTeriff = async () => {
    try {
      const response = await url.get("tariffs/");
      setTariffs(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const postTeriff = async () => {
    setPostLoading(true);
    const token = await AsyncStorage.getItem("token");
    const datanew = {
      object_id: "",
      object_type: "",
      plan_id: "",
      tariff_id: "",
    };
    try {
      const response = await url.post("tariffs/active", datanew, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setPostLoading(false);
    }
  };

  useEffect(() => {
    getTeriff();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (selectDetail.name) {
    return (
      <ButtonLayouts
        handle={postTeriff}
        loading={postLoading}
        title={`Оплатить ${plan}`}
        color={colors.blue}
      >
        <Container none={true} phon={true}>
          <Header
            handleBack={() => {
              if (selectDetail?.name) {
                setSelectDetail([]);
                setPlan("");
              } else {
                navigation.goBack();
              }
            }}
            back={true}
            container={true}
          >
            Продать быстрее
          </Header>
          <ScrollView
            style={{
              flex: 1,
            }}
            showsVerticalScrollIndicator={false}
          >
            <Column gap={10}>
              <Wrapper top={true} padding={[16, 0]}>
                <View style={style.box}>
                  <Flex gap={10}>
                    <Image
                      style={{
                        width: 24,
                        height: 24,
                      }}
                      source={{ uri: selectDetail.img }}
                    />
                    <TextContent
                      fontSize={20}
                      fontWeight={500}
                      color={colors.black}
                    >
                      {selectDetail.name}
                    </TextContent>
                  </Flex>
                  <TextContent
                    top={10}
                    fontSize={14}
                    fontWeight={500}
                    color={colors.gray}
                  >
                    {selectDetail.description}
                  </TextContent>
                </View>
              </Wrapper>
              <Wrapper padding={[200, 16]}>
                <TextContent
                  fontSize={20}
                  fontWeight={500}
                  color={colors.black}
                >
                  Выберите охват
                </TextContent>
                <Column top={16} gap={10}>
                  {selectDetail?.plans?.map((el, id) => (
                    <Wave handle={() => setPlan(`${el.price} сом`)}>
                      <View
                        key={id}
                        style={{
                          padding: 10,
                          borderRadius: 10,
                          backgroundColor: colors.phon,
                        }}
                      >
                        <Between center="center">
                          <TextContent
                            fontSize={14}
                            fontWeight={500}
                            color={colors.black}
                          >
                            {el.description}
                          </TextContent>
                          <TextContent
                            fontSize={20}
                            fontWeight={500}
                            color={colors.blue}
                          >
                            {el.price} сом
                          </TextContent>
                        </Between>
                      </View>
                    </Wave>
                  ))}
                  <View style={style.box}>
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
                      <Button
                        handle={() => navigation.navigate("Balance")}
                        color={colors.black}
                      >
                        Пополнить баланс
                      </Button>
                    </Column>
                  </View>
                </Column>
              </Wrapper>
            </Column>
          </ScrollView>
        </Container>
      </ButtonLayouts>
    );
  }

  return (
    <Container none={true} phon={true}>
      <Header
        handleBack={() => {
          if (selectDetail?.name) {
            setSelectDetail([]);
          } else {
            navigation.goBack();
          }
        }}
        back={true}
        container={true}
      >
        Продать быстрее
      </Header>
      <ScrollView
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Column
          style={{
            paddingBottom: 200,
          }}
          gap={10}
        >
          {tariffs.map((el, id) => {
            if (el.plans.length > 0) {
              return (
                <Wave key={id} handle={() => setSelectDetail(el)}>
                  <Wrapper top={id == 0} padding={[16, 16]}>
                    <View style={style.box}>
                      <Flex gap={10}>
                        <Image
                          style={{
                            width: 24,
                            height: 24,
                          }}
                          source={{ uri: el.img }}
                        />
                        <TextContent
                          fontSize={20}
                          fontWeight={500}
                          color={colors.black}
                        >
                          {el.name}
                        </TextContent>
                      </Flex>
                      <TextContent
                        top={10}
                        fontSize={14}
                        fontWeight={500}
                        color={colors.gray}
                      >
                        {el.description}
                      </TextContent>
                      <Button
                        handle={() => setSelectDetail(el)}
                        top={20}
                        color={colors.blue}
                      >
                        Подключить услугу
                      </Button>
                    </View>
                  </Wrapper>
                </Wave>
              );
            }
          })}
        </Column>
      </ScrollView>
    </Container>
  );
};

const style = StyleSheet.create({
  box: {
    padding: 16,
    borderRadius: 14,
    backgroundColor: colors.phon,
  },
  boxx: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.phon,
  },
});

export default Tariffs;
