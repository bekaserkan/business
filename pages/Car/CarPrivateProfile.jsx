import React from "react";
import Header from "../../components/Header";
import Button from "../../customs/Button";
import { Image, StyleSheet, View, ScrollView, Platform } from "react-native";
import { colors } from "../../assets/styles/colors";
import Between from "../../assets/styles/components/Between";
import Column from "../../assets/styles/components/Column";
import TextContent from "../../assets/styles/components/TextContent";
import Flex from "../../assets/styles/components/Flex";
import Card from "../../customs/Card";
import Star from "../../assets/svg/star1.js";

const profile = [
  {
    id: 1,
    image: require("../../assets/images/car.png"),
    name: "Нурзида",
    star: "4.8",
    recal: "23",
  },
];
const about = [
  {
    text: "ГК «СИМ» - один из старейших автомобильных дилеров в Москве",
    advertisements: [
      {
        id: 1,
        title: "CHERY Tiggo 7 Pro Max, 2024",
        background: colors.green2,
        price: "100",
        priceDollars: "1000 000",
        year: "2020",
        volume: "1.8",
        vip: true,
        urgently: true,
      },
      {
        id: 2,
        title: "CHERY Tiggo 7 Pro Max, 2024",
        background: colors.white,
        price: "100",
        priceDollars: "1000 000",
        year: "2020",
        volume: "1.8",
        vip: false,
        starVip: true,
      },
      {
        id: 3,
        title: "CHERY Tiggo 7 Pro Max, 2024",
        background: colors.white,
        price: "100",
        priceDollars: "1000 000",
        year: "2020",
        volume: "1.8",
        vip: false,
        starVip: true,
      },
      {
        id: 4,
        title: "CHERY Tiggo 7 Pro Max, 2024",
        background: colors.green2,
        price: "100",
        priceDollars: "1000 000",
        year: "2020",
        volume: "1.8",
        vip: true,
        urgently: true,
      },
      {
        id: 5,
        title: "CHERY Tiggo 7 Pro Max, 2024",
        background: colors.green2,
        price: "100",
        priceDollars: "1000 000",
        year: "2020",
        volume: "1.8",
        vip: true,
        urgently: true,
      },
    ],
  },
];

const CarPrivateProfile = () => {
  const { image, name, star, recal } = profile[0];
  const { text, advertisements } = about[0];

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View style={styles.card_private_profile}>
          <Header container={true} back={true} style={styles.header} />
          <Between style={styles.profileContent} gap={0}>
            <Flex gap={10}>
              <Image source={image} style={styles.profileImage} />
              <Column style={styles.profileDetails} gap={10}>
                <TextContent
                  fontSize={20}
                  fontWeight={500}
                  color={colors.white}
                >
                  {name}
                </TextContent>
                <Flex style={styles.rating} gap={5}>
                  <Star />
                  <TextContent
                    fontSize={14}
                    fontWeight={400}
                    color={colors.white}
                  >
                    {star}
                  </TextContent>
                  <TextContent
                    left={15}
                    fontSize={12}
                    fontWeight={400}
                    color={colors.white}
                  >
                    {recal} отзывов
                  </TextContent>
                </Flex>
              </Column>
            </Flex>
            <Button color={colors.white} style={styles.privateButton}>
              <TextContent fontSize={12} color={colors.blue} fontWeight={500}>
                Частное лицо
              </TextContent>
            </Button>
          </Between>
          <View style={styles.block}>
            <TextContent fontSize={12} fontWeight={400} color={colors.gray}>
              О себе:
            </TextContent>
            <TextContent
              fontSize={16}
              fontWeight={400}
              color={colors.black}
              top={6}
              style={{ lineHeight: 19 }}
            >
              {text}
            </TextContent>
            <TextContent
              fontSize={20}
              fontWeight={600}
              color={colors.black}
              top={30}
            >
              {advertisements.length} объявлениz
            </TextContent>
            <View style={styles.list}>
              {advertisements.map((ad) => (
                <Card
                  key={ad.id}
                  title={ad.title}
                  background={ad.background}
                  priceDollars={ad.priceDollars}
                  price={ad.price}
                  year={ad.year}
                  volume={ad.volume}
                  urgently={ad.urgently}
                  vip={ad.vip}
                  starVip={ad.starVip}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer_bis_profile}>
        <Button color={colors.green}>
          <TextContent>Позвонить</TextContent>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer_bis_profile: {
    width: "100%",
    position: "relative",
    bottom: 0,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: Platform.OS === "ios" ? 30 : 16,
    borderTopWidth: 1,
    borderTopColor: colors.phon,
  },
  card_private_profile: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  profileContent: {
    paddingHorizontal: 16,
    alignItems: "flex-end",
    paddingBottom: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  profileDetails: {
    paddingVertical: 4.5,
  },
  rating: {
    alignItems: "center",
  },
  starIcon: {
    width: 14,
    height: 14,
  },
  privateButton: {
    height: 27,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  block: {
    flex: 1,
    marginTop: 20,
    paddingTop: 20,
    paddingHorizontal: 16,
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.blue,
    borderBottomWidth: 0,
  },
  list: {
    top: 10,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
});

export default CarPrivateProfile;
