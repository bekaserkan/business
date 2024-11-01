import React from "react";
import Container from "../../assets/styles/components/Container";
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import TextContent from "../../assets/styles/components/TextContent";
import { colors } from "../../assets/styles/colors";
import Card from "../../customs/Card";
import Between from "../../assets/styles/components/Between";
import Star from "../../assets/svg/star1.js";
import Flex from "../../assets/styles/components/Flex";
import Column from "../../assets/styles/components/Column";
import Button from "../../customs/Button";
import Back from "../../assets/svg/backWhite.js";
import { useNavigation } from "@react-navigation/native";
import Phone from "../../assets/svg/phone.js";

const profile = [
  {
    id: 1,
    image: require("../../assets/images/car.png"),
    name: "Chery РОЛЬФ Магистральный",
    star: "4.8",
    recal: "23",
    img: [
      { id: 1, image: require("../../assets/images/home_img.png") },
      { id: 2, image: require("../../assets/images/car.png") },
      { id: 3, image: require("../../assets/images/car.png") },
    ],
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

const CarBusinessProfile = () => {
  const { image, name, star, recal, img } = profile[0];
  const { text, advertisements } = about[0];
  const navigate = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: "100%", flex: 1 }}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <Container none={true}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {img.map((item) => (
              <View style={styles.img_box}>
                <Image key={item.id} source={item.image} style={styles.img} />
              </View>
            ))}
            <Pressable
              style={styles.back_icons}
              onPress={() => navigate.goBack()}
            >
              <Back />
            </Pressable>
          </ScrollView>
          <View style={styles.block}>
            <Between style={styles.profileContent} gap={0}>
              <Flex gap={10} style={{ width: "70%", alignItems: "flex-start" }}>
                <Image source={image} style={styles.profileImage} />
                <Column style={styles.profileDetails} gap={10}>
                  <TextContent
                    fontSize={20}
                    fontWeight={500}
                    color={colors.black}
                  >
                    {name}
                  </TextContent>
                  <Flex style={styles.rating} gap={5}>
                    <Star />
                    <TextContent
                      fontSize={14}
                      fontWeight={400}
                      color={colors.black}
                    >
                      {star}
                    </TextContent>
                    <TextContent
                      left={15}
                      fontSize={12}
                      fontWeight={400}
                      color={colors.blue}
                    >
                      {recal} отзывов
                    </TextContent>
                  </Flex>
                </Column>
              </Flex>
              <Button color={colors.phon} style={styles.privateButton}>
                <TextContent fontSize={12} color={colors.blue} fontWeight={500}>
                  Автобизнес
                </TextContent>
              </Button>
            </Between>
            <TextContent fontSize={12} fontWeight={400} color={colors.gray}>
              О компании:
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
              {advertisements.length} объявления
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
        </Container>
      </ScrollView>
      <View style={styles.footer_bis_profile}>
        <Button color={colors.green} style={styles.btn_car_profile}>
          <TextContent>Позвонить</TextContent>
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  btn_car_profile: {
    flexDirection: "row",
    alignItems: "center",
  },
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
  img: {
    height: "100%",
    width: "100%",
  },
  img_box: {
    width: 300,
    height: 200,
    position: "relative",
  },
  back_icons: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 40,
    left: 16,
  },
  card_private_profile: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  profileContent: {
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
    marginTop: -20,
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
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

export default CarBusinessProfile;
