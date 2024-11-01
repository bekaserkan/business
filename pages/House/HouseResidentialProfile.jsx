import React from "react";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";
import ProfileBox from "../../components/ProfileBox";
import { colors } from "../../assets/styles/colors";
import Wrapper from "../../assets/styles/components/Wrapper";
import TextContent from "../../assets/styles/components/TextContent";
import Column from "../../assets/styles/components/Column";
import Characteristic from "../components/Characteristic";
import { useNavigation } from "@react-navigation/native";
import AccountBlock from "../components/AccountBlock";
import { ScrollView, View } from "react-native";

const HouseResidentialProfile = () => {
  const navigation = useNavigation();

  const routeTo = () => {
    navigation.navigate("HouseScreens", {
      screen: "HouseCompanyProfile",
    });
  };

  return (
    <Container none={true} phon={true}>
      <Header back={true} container={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Column gap={6}>
          <Wrapper top={true} padding={[16]}>
            <ProfileBox
              gap={10}
              name="ЖД «Москва»"
              rates={"4.4"}
              reviews={1}
              reviewsColor={colors.blue}
              more={true}
            />
            <TextContent
              top={30}
              fontSize={12}
              fontWeight={400}
              color={colors.gray}
            >
              Об объекте:
            </TextContent>
            <TextContent
              top={6}
              fontSize={16}
              fontWeight={400}
              color={colors.black}
            >
              Новый объект премиум-класса ЖК «Москва» - это не просто место для
              проживания, это воплощение уникальности и роскоши в высоте. Этот
              дом идеально подойдет для теъ, кто хочет жить в центре города, но
              при этом не жертвовать комфортом и приватностью. Одним из главных
              преимуществ ЖК «Москва» является общая площадь участка в 0,6
              гектара, 45% который занято площадью застройки. Высота потолков в
              квартирах составляет 3,3 метра, что создает ощущение простора и
              свободы. Благодаря удобному расположению, жильцы ЖК «Москва» имеют
              возможность быстро и легко добраться до основных магистралей
              города.
            </TextContent>
          </Wrapper>
          <Characteristic
            data={[
              {
                name: "one",
                value: "two",
              },
              {
                name: "one",
                value: "two",
              },
              {
                name: "one",
                value: "two",
              },
              {
                name: "one",
                value: "two",
              },
              {
                name: "one",
                value: "two",
              },
              {
                name: "one",
                value: "two",
              },
            ]}
            keyOne={"name"}
            keyTwo={"value"}
          />
          <View
            style={{
              backgroundColor: colors.white,
              paddingBottom: 150,
            }}
          >
            <AccountBlock
              title="Компания"
              name="Авангард Стиль"
              nameColor={colors.blue}
              stars={1}
              rates="4.4"
              reviews={1}
              description="ул. Токтогула 125/1, Бизнес Центр «Avangard», Tower A, 2-этаж"
              ava="https://www.perunica.ru/uploads/posts/2019-09/1567597236_021.jpg"
              handle={routeTo}
            />
          </View>
        </Column>
      </ScrollView>
    </Container>
  );
};

export default HouseResidentialProfile;
