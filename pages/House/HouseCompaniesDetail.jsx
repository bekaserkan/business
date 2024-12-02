import React, { useEffect, useState } from "react";
import Container from "../../assets/styles/components/Container";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";
import TextContent from "../../assets/styles/components/TextContent";
import { colors } from "../../assets/styles/colors";
import Card from "../../customs/Card";
import Between from "../../assets/styles/components/Between";
import Star from "../../assets/svg/star1.js";
import Flex from "../../assets/styles/components/Flex";
import Column from "../../assets/styles/components/Column";
import Button from "../../customs/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import Slider from "../../components/Slider.jsx";
import ButtonLayouts from "../../layouts/buttonLayouts.js";
import { url } from "../../api/api.jsx";
const containerWidth = (Dimensions.get("window").width - 32) / 2 - 5;

const profile = [
  {
    id: 1,
    image: require("../../assets/images/avatart.jpg"),
    name: "Chery РОЛЬФ Магистральный",
    star: "4.8",
    recal: "23",
    img: [
      { id: 1, image: "https://pictures.dealer.com/k/kiaofwaldorf/1118/4726a55aa64cd366d7e28a2d1d9066fbx.jpg" },
      { id: 2, image: "https://pictures.dealer.com/k/kiaofwaldorf/1118/4726a55aa64cd366d7e28a2d1d9066fbx.jpg" },
      { id: 3, image: "https://pictures.dealer.com/k/kiaofwaldorf/1118/4726a55aa64cd366d7e28a2d1d9066fbx.jpg" },
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
        image:
          "https://pictures.dealer.com/k/kiaofwaldorf/1118/4726a55aa64cd366d7e28a2d1d9066fbx.jpg",
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
        image:
          "https://pictures.dealer.com/k/kiaofwaldorf/1118/4726a55aa64cd366d7e28a2d1d9066fbx.jpg",
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
        image:
          "https://pictures.dealer.com/k/kiaofwaldorf/1118/4726a55aa64cd366d7e28a2d1d9066fbx.jpg",
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
        avto_user: true,
        image:
          "https://pictures.dealer.com/k/kiaofwaldorf/1118/4726a55aa64cd366d7e28a2d1d9066fbx.jpg",
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
        avto_user: true,
        image:
          "https://pictures.dealer.com/k/kiaofwaldorf/1118/4726a55aa64cd366d7e28a2d1d9066fbx.jpg",
      },
    ],
  },
];

const HouseCompaniesDetail = () => {
  const {img } = profile[0];
  const {advertisements } = about[0];
  const route = useRoute();
  const { id } = route.params;
  const [businessId, setBusinessId] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await url.get(`main/dealer/${id}`);
      console.log(response.data)
      setBusinessId(response.data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(id){
        fetchData();
    }
  }, [id]);
  return (
    <ButtonLayouts>
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: "100%", flex: 1 }}
          contentContainerStyle={{ paddingBottom: 150 }}
        >
          <Container none={true}>
            <Slider img={img} />
            <View style={styles.block}>
              <Between style={styles.profileContent} gap={0}>
                <Flex
                  gap={10}
                  style={{ width: "70%", alignItems: "flex-start" }}
                >
                  <Image source={{uri:businessId.logo_path}} style={styles.profileImage} />
                  <Column style={styles.profileDetails} gap={10}>
                    <TextContent
                      fontSize={20}
                      fontWeight={500}
                      color={colors.black}
                    >
                      {businessId?.name}
                    </TextContent>
                    <Flex style={styles.rating} gap={5}>
                      <Star />
                      <TextContent
                        fontSize={14}
                        fontWeight={400}
                        color={colors.black}
                      >
                        {businessId?.avarage_rating}
                      </TextContent>
                      <TextContent
                        left={15}
                        fontSize={12}
                        fontWeight={400}
                        color={colors.blue}
                      >
                        {businessId?.review_count} отзывов
                      </TextContent>
                    </Flex>
                  </Column>
                </Flex>
                <Button
                  color={colors.phon}
                  style={styles.privateButton}
                  textColor={colors.blue}
                  fontSize={12}
                >
                  Автобизнес
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
                {businessId?.description}
              </TextContent>
              <TextContent
                fontSize={20}
                fontWeight={600}
                color={colors.black}
                top={30}
              >
                {businessId?.ads_count} объявлений
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
                    avto_user={ad.avto_user}
                    width={containerWidth}
                    image={ad.image}
                  />
                ))}
              </View>
            </View>
          </Container>
        </ScrollView>
      </View>
    </ButtonLayouts>
  );
};
const styles = StyleSheet.create({
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

export default HouseCompaniesDetail;
