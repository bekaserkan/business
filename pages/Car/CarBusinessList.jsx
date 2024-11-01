import React from "react";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";
import car from "../../assets/images/car.png";
import Column from "../../assets/styles/components/Column";
import Wrapper from "../../assets/styles/components/Wrapper";
import Between from "../../assets/styles/components/Between";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import Flex from "../../assets/styles/components/Flex";
import TextContent from "../../assets/styles/components/TextContent";
import { colors } from "../../assets/styles/colors";

const data = [
  {
    key: "Официальные дилеры",
    items: [
      {
        id: 1,
        img: car,
        title: "KIA Motors",
        text: "Кыргызстан, город Бишкек ул. Жукеева-Пудовкина, 85/4",
        announcements: "11 объявлений",
      },
      {
        id: 2,
        img: car,
        title: "GEELY KYRGYZSTAN",
        text: "ул. Медерова, 117",
        announcements: "3 объявления",
      },
    ],
  },
  {
    key: "Автобизнес",
    items: [
      {
        id: 3,
        img: car,
        title: "TOYOTA Center",
        text: "г. Бишкек, проспект Манаса, 43",
        announcements: "7 объявлений",
      },
      {
        id: 4,
        img: car,
        title: "Honda Motors",
        text: "г. Бишкек, ул. Байтик Баатыра, 12",
        announcements: "4 объявления",
      },
      {
        id: 5,
        img: car,
        title: "TOYOTA Center",
        text: "г. Бишкек, проспект Манаса, 43",
        announcements: "7 объявлений",
      },
      {
        id: 6,
        img: car,
        title: "Honda Motors",
        text: "г. Бишкек, ул. Байтик Баатыра, 12",
        announcements: "4 объявления",
      },
    ],
  },
];

const CarBusinessList = () => {
  return (
    <Container none={true} phon={true}>
      <Header container={true} back={true}>
        Автобизнес
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Column gap={6}>
          {data.map((category, index) => (
            <Wrapper top={index === 0} key={category.key} padding={[16, 16]}>
              <TextContent fontSize={20} fontWeight={600} color={colors.black}>
                {category.key}
              </TextContent>
              <Column gap={16} style={{ marginTop: 16 }}>
                {category.items.map((item) => (
                  <Flex
                    key={item.id}
                    gap={10}
                    style={{ alignItems: "flex-start", height: 100 }}
                  >
                    <Image source={item.img} style={stylesList.img_list} />
                    <View style={stylesList.box_text}>
                      <Column gap={3}>
                        <TextContent
                          fontSize={16}
                          fontWeight={600}
                          color={colors.black}
                        >
                          {item.title}
                        </TextContent>
                        <TextContent
                          fontSize={14}
                          fontWeight={400}
                          color={colors.gray}
                        >
                          {item.text}
                        </TextContent>
                      </Column>
                      <TextContent
                        fontSize={12}
                        fontWeight={400}
                        color={colors.gray}
                      >
                        {item.announcements}
                      </TextContent>
                    </View>
                  </Flex>
                ))}
              </Column>
            </Wrapper>
          ))}
        </Column>
      </ScrollView>
    </Container>
  );
};

const stylesList = StyleSheet.create({
  box_text: {
    width: "70%",
    height: "100%",
    justifyContent: "space-between",
  },
  img_list: {
    width: 100,
    height: "100%",
    borderRadius: 8,
  },
});

export default CarBusinessList;
