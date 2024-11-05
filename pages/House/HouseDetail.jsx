import React from "react";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";
import { colors } from "../../assets/styles/colors";
import AccountBlock from "../components/AccountBlock";
import { useNavigation } from "@react-navigation/native";
import Characteristic from "../components/Characteristic";
import Column from "../../assets/styles/components/Column";
import ProfileBlock from "../components/ProfileBlock";
import Description from "../components/Description";
import { ScrollView } from "react-native";
import CommentsBlock from "../components/CommentsBlock";
import ButtonLayouts from "../../layouts/buttonLayouts";
import ContactsBlock from "../components/ContactsBlock";
import Additionally from "../components/Additionally";
import Footer from "../components/Footer";
import MainBlock from "../components/MainBlock";

const image = [
  {
    id: 1,
    image:
      "https://www.houseplans.net/uploads/plans/32005/elevations/88909-768.jpg?v=091024132147",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9V8SIML7hBXkSPqfy7ZjZPcX3mi2K3DNW9Q&s",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTb_7eMmVpQnoLbF-dry5_c5msX_Fq8tB1rbSL1LBCNRdiCpI_ft3RS2jteqFd8nupd2Q&usqp=CAU",
  },
];

const HouseDetail = () => {
  const navigation = useNavigation();

  const routeTo = () => {
    navigation.navigate("HouseScreens", {
      screen: "HouseResidentialProfile",
    });
  };

  return (
    <ButtonLayouts>
      <Container none={true} phon={true}>
        <Header back={true} container={true} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Column gap={4}>
            <MainBlock
              img={image}
              title={"Продажа квартира 3-комн.,90 м², 9-этаж из 17"}
              priceUSD={"$72 000"}
              priceSom={"2 720 000 сом"}
              miniPriceUSD={"$1 565/м²"}
              miniPriceSom={"132 871 сом/м²"}
              house={true}
              address={"Бишкек"}
              time={"5 мин назад"}
              vip={true}
              addHours={"Добавлено 2 часа назад"}
              eye={"191"}
              heart={"50"}
              comment={"8"}
            />
            <AccountBlock
              title="Жилой комплекс"
              name="ЖД «Москва»"
              nameColor={colors.blue}
              stars={1}
              rates="4.4"
              reviews={1}
              description="Бишкек, пр. Манаса/ул.Рыскулова"
              ava="https://www.perunica.ru/uploads/posts/2019-09/1567597236_021.jpg"
              handle={routeTo}
            />
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
            <Additionally
              title={"Дополнительно"}
              data={[
                {
                  name: "Мультимедиа",
                  data: [
                    { text: "Android Auto" },
                    { text: "CarPlay" },
                    { text: "Аудиоподготовка" },
                  ],
                },
                {
                  name: "Интерьер",
                  data: [{ text: "Android Auto" }, { text: "CarPlay" }],
                },
                {
                  name: "Безопасность",
                  data: [{ text: "CarPlay" }, { text: "Аудиоподготовка" }],
                },
              ]}
            />
            <Description
              text={
                "Продается 3 комнатная квартира в спальном районе со свежим ремонтом. Кирпичный дом, центральное отопление и центральная горячая вода. Трехфазовое электричество. 2 просторных двора. Самые лучшие виды на горы и город благодаря лоджиям по периметру и высокому этажу. Рядом больницы, школа #62 (через забор), другие школы, детсады. Цена ниже чем на другие квартиры в этом комплексе. Унитаз подвесной (инсталляция). Утепленные лоджии. Пятикамерные окна. Быстрый бесшумный лифт от Hyundai. На первом этаже магазин «Азия»."
              }
            />
            <ProfileBlock
              name="Нурзида"
              stars={1}
              rates="4.4"
              reviews={23}
              description="2 объявления"
              ava="https://www.perunica.ru/uploads/posts/2019-09/1567597236_021.jpg"
              handle={routeTo}
            />
            <CommentsBlock
              data={[
                {
                  ava: "https://www.perunica.ru/uploads/posts/2019-09/1567597236_021.jpg",
                  name: "Санжар",
                  text: "Здравствуйте, а есть черного цвета?😁",
                  date: "2 дн.",
                  answer: false,
                },
                {
                  ava: "https://www.perunica.ru/uploads/posts/2019-09/1567597236_021.jpg",
                  name: "Нурзида",
                  text: "Ради вас покрасим на черный🗿",
                  date: "2 дн.",
                  answer: true,
                },
              ]}
              comments={8}
            />
            <ContactsBlock
              data={[
                {
                  phone: "+996 (502) 80-02-02",
                },
                {
                  phone: "+996 (502) 80-02-02",
                },
                {
                  phone: "+996 (502) 80-02-02",
                },
              ]}
              keyValue={"phone"}
            />
            <Footer />
          </Column>
        </ScrollView>
      </Container>
    </ButtonLayouts>
  );
};

export default HouseDetail;
