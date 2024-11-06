import React, { useState } from "react";
import Container from "../../assets/styles/components/Container";
import {
  Dimensions,
  Image,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TextContent from "../../assets/styles/components/TextContent";
import { colors } from "../../assets/styles/colors";
import Between from "../../assets/styles/components/Between";
import Star from "../../assets/svg/star1.js";
import Flex from "../../assets/styles/components/Flex";
import Column from "../../assets/styles/components/Column";
import { useNavigation } from "@react-navigation/native";
import Slider from "../../components/Slider.jsx";
import TitleBlock from "../ui/TitleBlock.js";
import Wave from "../../customs/Wave.jsx";
import Map from "../../assets/svg/map.js";
import Phone from "../../assets/svg/phone.js";
import World from "../../assets/svg/world.js";
import Mail from "../../assets/svg/mail.js";
import Date from "../../assets/svg/date.js";
import { ResizeMode, Video } from "expo-av";
import HouseCard from "../ui/HouseCard.js";
import ButtonLayouts from "../../layouts/buttonLayouts.js";
import Button from "../../customs/Button.jsx";
import MapView, { Marker } from "react-native-maps";
import { WebView } from "react-native-webview";
import Back from "../../assets/svg/back.js";

const profile = [
  {
    id: 1,
    image: require("../../assets/images/car.png"),
    name: "Chery РОЛЬФ Магистральный",
    star: "4.8",
    recal: "23",
    img: [
      {
        id: 1,
        image:
          "https://cdn.prod.website-files.com/63a02e61e7ffb565c30bcfc7/65fa5e6535ec537dc53bd0d1_modern%20house%20ideas.webp",
      },
      {
        id: 2,
        image:
          "https://jennian-homes.b-cdn.net/assets/Uploads/ListingPages/Chianti-Modified-2_4-Bedroom-Home-Front-Facade_Jennian-Homes__FillMaxWzkwMCw2MDBd.jpg?auto=format",
      },
      {
        id: 3,
        image:
          "https://img.etimg.com/thumb/width-420,height-315,imgsize-22382,resizemode-75,msid-111780228/news/international/world-news/india-has-the-worlds-second-most-expensive-house-check-the-of-the-top-10-costliest-homes/which-mansion-tops-the-list-of-the-worlds-most-expensive-houses.jpg",
      },
    ],
  },
];

const data = [
  {
    img: "https://cdn.houseplansservices.com/product/f2m9lok2vgeu0fc9bs7d7s14vk/w560x373.jpg?v=4",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2829/0660/files/EXFR-I64A4616_1600x.jpg?v=1724438493",
  },
  {
    img: "https://static.vecteezy.com/system/resources/thumbnails/023/308/330/small_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo.jpg",
  },
];

const HouseCompanyProfile = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { image, img } = profile[0];
  const navigate = useNavigation();

  const latitude = "42.871881";
  const longitude = "74.576332";
  const name = "Title";
  const description = `${"Kyrgyzstan"}, ${"Bishkek"}`;

  const region = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const markerCoordinate = {
    latitude: latitude,
    longitude: longitude,
  };

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Map</title>
        <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
        <style>
            html, body, #map {
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
            }
        </style>
    </head>
    <body>
        <div id="map"></div>
        <script>
            ymaps.ready(init);

            function init() {
                var myMap = new ymaps.Map("map", {
                    center: [${latitude}, ${longitude}],
                    zoom: 14
                });

                // Создание кастомного макета иконки
                var MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div style="color: #000; font-weight: bold;">$[properties.iconContent]</div>'
                );

                var myPlacemark = new ymaps.Placemark([${latitude}, ${longitude}], {
                    hintContent: '${name}',
                    balloonContent: '${description}'
                }, {
                    iconLayout: 'default#image',
                    // Путь к кастомной иконке (можно заменить на любой другой)
                    iconImageHref: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // Замените на нужный URL
                    // Размеры иконки
                    iconImageSize: [40, 40], // Увеличенные размеры
                    // Смещение иконки
                    iconImageOffset: [-20, -40]
                });

                myMap.geoObjects.add(myPlacemark);
            }
        </script>
    </body>
    </html>
  `;

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ButtonLayouts>
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: "100%", flex: 1 }}
          contentContainerStyle={{ paddingBottom: 50 }}
        >
          <Container none={true} phon={true}>
            <Slider img={img} />
            <Column gap={6}>
              <View style={styles.block}>
                <Between style={styles.profileContent} gap={0}>
                  <Flex
                    gap={10}
                    style={{ width: "70%", alignItems: "flex-start" }}
                  >
                    <Image source={image} style={styles.profileImage} />
                    <Column style={styles.profileDetails} gap={10}>
                      <TextContent
                        fontSize={20}
                        fontWeight={500}
                        color={colors.black}
                      >
                        Авангард Стиль
                      </TextContent>
                      <Flex style={styles.rating} gap={5}>
                        <Star />
                        <TextContent
                          fontSize={14}
                          fontWeight={400}
                          color={colors.black}
                        >
                          4.8
                        </TextContent>
                        <TextContent
                          left={15}
                          fontSize={12}
                          fontWeight={400}
                          color={colors.blue}
                        >
                          2 отзывов
                        </TextContent>
                      </Flex>
                    </Column>
                  </Flex>
                </Between>
                <TextContent
                  top={20}
                  fontSize={12}
                  fontWeight={400}
                  color={colors.gray}
                >
                  О компании:
                </TextContent>
                <TextContent
                  fontSize={16}
                  fontWeight={400}
                  color={colors.black}
                  top={6}
                  style={{ lineHeight: 19 }}
                >
                  Строительная компания «Авангард Cтиль» – лидер строительного
                  рынка. Мы строим жилые многоэтажные дома, коммерческие
                  объекты, объекты культурного и социального назначения, мосты,
                  дороги, тоннели, промышленные объекты, делаем реконструкцию
                  зданий и сооружений.
                </TextContent>
                <Button
                  top={16}
                  handle={() => setModalVisible(true)}
                  color={colors.phon}
                  textColor={colors.black}
                >
                  Посмотреть на карте
                </Button>
              </View>
              <TitleBlock title={"Контакты"}>
                <Wave>
                  <Flex gap={10}>
                    <Map />
                    <TextContent
                      flex={16}
                      fontWeight={400}
                      color={colors.black}
                    >
                      ул. Токтогула 125/1, Бизнес Центр «Avangard», Tower A,
                      2-этаж
                    </TextContent>
                  </Flex>
                </Wave>
                <Wave>
                  <Flex gap={10}>
                    <Phone />
                    <TextContent
                      style={{
                        textDecorationLine: "underline",
                      }}
                      flex={16}
                      fontWeight={400}
                      color={colors.blue}
                    >
                      +996 (502) 80-02-02
                    </TextContent>
                  </Flex>
                </Wave>
                <Wave>
                  <Flex gap={10}>
                    <World />
                    <TextContent
                      style={{
                        textDecorationLine: "underline",
                      }}
                      flex={16}
                      fontWeight={400}
                      color={colors.blue}
                    >
                      avangardstyle.kg
                    </TextContent>
                  </Flex>
                </Wave>
                <Wave>
                  <Flex gap={10}>
                    <Mail />
                    <TextContent
                      flex={16}
                      fontWeight={400}
                      color={colors.black}
                    >
                      sales@avangardstyle.kg
                    </TextContent>
                  </Flex>
                </Wave>
                <Wave>
                  <Flex gap={10}>
                    <Date />
                    <TextContent flex={16} fontWeight={400}>
                      1998
                    </TextContent>
                  </Flex>
                </Wave>
              </TitleBlock>
              <TitleBlock title={"Видео"}>
                <Video
                  style={styles.video}
                  source={{
                    uri: "https://videocdn.cdnpk.net/joy/content/video/free/2012-10/large_preview/hd1944.mp4?token=exp=1730469390~hmac=ceb3074319bcf633d06ceea263ca84b2f7a8abd01c517e436ff5c6e04787d54e",
                  }}
                  useNativeControls
                  resizeMode={ResizeMode.CONTAIN}
                  isLooping
                  onError={(e) =>
                    console.log(`Error loading video ${index}`, e)
                  }
                />
              </TitleBlock>
              <HouseCard
                business={true}
                construction={true}
                floors={true}
                title="Объекты компании"
                img={data[0].img}
              />
              {data.map((el, id) => (
                <HouseCard
                  business={true}
                  construction={true}
                  floors={true}
                  img={el.img}
                />
              ))}
            </Column>
          </Container>
          <View
            style={{
              height: 100,
              backgroundColor: colors.phon,
            }}
          />
        </ScrollView>

        <Modal
          visible={isModalVisible}
          animationType="fade"
          transparent={true}
          onRequestClose={closeModal}
        >
          <View style={styles.map}>
            <View style={styles.mapHeader}>
              <View
                style={{
                  width: "100%",
                  height: 50,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 20,
                  }}
                >
                  <Wave handle={() => setModalVisible(false)}>
                    <Back />
                  </Wave>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{
                      width: "80%",
                      fontSize: 18,
                      fontWeight: "500",
                      color: colors.black,
                    }}
                  >
                    {name}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.mapBody}>
              {Platform.OS == "ios" ? (
                <MapView
                  style={styles.map}
                  initialRegion={region}
                  showsUserLocation={true}
                  showsMyLocationButton={true}
                >
                  <Marker
                    coordinate={markerCoordinate}
                    title={name}
                    description={description}
                  />
                </MapView>
              ) : (
                <WebView
                  originWhitelist={["*"]}
                  source={{ html: htmlContent }}
                  style={{
                    width: Dimensions.get("window").width,
                    flex: 1,
                  }}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                />
              )}
            </View>
          </View>
        </Modal>
      </View>
    </ButtonLayouts>
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
    borderRadius: 16,
    paddingBottom: 16,
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
  video: {
    alignSelf: "center",
    width: "100%",
    height: 200,
    borderRadius: 12,
    backgroundColor: "#000",
  },
  mapHeader: {
    width: "100%",
    paddingTop: Platform.OS === "ios" ? 60 : 42,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderBottomColor: "#F1F1F1",
    borderBottomWidth: 0.5,
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  mapBody: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HouseCompanyProfile;
