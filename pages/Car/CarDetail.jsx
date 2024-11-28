import React from "react";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";
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
      "https://www.exoticcarhacks.com/wp-content/uploads/2024/04/C2vfbnVA.jpeg",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpb_xCorsPdc7ouJG-PzNIw_Xv_esp2-yXHw&s",
  },
  {
    id: 3,
    image: "https://i.redd.it/79hose2reto61.jpg",
  },
];

const CarDetail = () => {
  const navigation = useNavigation();
  const routeTo = () => {
    navigation.navigate("CarScreens", {
      screen: "CarPrivateProfile",
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
              title={"CHERY Tiggo 7 Pro Max, 2024"}
              priceUSD={"$72 000"}
              priceSom={"2 720 000 сом"}
              car={true}
              address={"Бишкек"}
              time={"5 мин назад"}
              vip={true}
              addHours={"Добавлено 2 часа назад"}
              eye={"191"}
              heart={"50"}
              comment={"8"}
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
              title={"Комплектация"}
              data={[
                {
                  name: "Интерьер",
                  data: [
                    { text: "Экстрерьер" },
                    { text: "Экстрерьер" },
                    { text: "Медиа" },
                  ],
                },
                {
                  name: "Экстрерьер",
                  data: [{ text: "Android Auto" }, { text: "CarPlay" }],
                },
                {
                  name: "Медиа",
                  data: [{ text: "CarPlay" }, { text: "Аудиоподготовка" }],
                },
                {
                  name: "Безопасность",
                  data: [{ text: "CarPlay" }, { text: "Аудиоподготовка" }],
                },
                {
                  name: "Опции",
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

export default CarDetail;
