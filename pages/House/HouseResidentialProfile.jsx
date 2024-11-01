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
import Button from "../../customs/Button";
import Slider from "../../components/Slider";

const HouseResidentialProfile = () => {
  const navigation = useNavigation();

  const routeTo = () => {
    navigation.navigate("HouseScreens", {
      screen: "HouseCompanyProfile",
    });
  };

  const data = [
    {
      id: 1,
      image:
        "https://img.etimg.com/thumb/width-420,height-315,imgsize-22382,resizemode-75,msid-111780228/news/international/world-news/india-has-the-worlds-second-most-expensive-house-check-the-of-the-top-10-costliest-homes/which-mansion-tops-the-list-of-the-worlds-most-expensive-houses.jpg",
    },
    {
      id: 2,
      image:
        "https://carsguide-res.cloudinary.com/image/upload/c_fit,h_726,w_1290,f_auto,t_cg_base/v1/editorial/story/hero_image/Koenigsegg-Gemera-1001x565-3.jpg",
    },
    {
      id: 3,
      image:
        "https://www.usnews.com/object/image/0000018b-fa28-dc80-a9ef-ffe9f8290001/01-2024-chevrolet-corvette-angular-front-jmv.JPG?update-time=1700709318771&size=responsiveGallery",
    },
    {
      id: 1,
      image:
        "https://img.etimg.com/thumb/width-420,height-315,imgsize-22382,resizemode-75,msid-111780228/news/international/world-news/india-has-the-worlds-second-most-expensive-house-check-the-of-the-top-10-costliest-homes/which-mansion-tops-the-list-of-the-worlds-most-expensive-houses.jpg",
    },
    {
      id: 2,
      image:
        "https://carsguide-res.cloudinary.com/image/upload/c_fit,h_726,w_1290,f_auto,t_cg_base/v1/editorial/story/hero_image/Koenigsegg-Gemera-1001x565-3.jpg",
    },
    {
      id: 3,
      image:
        "https://www.usnews.com/object/image/0000018b-fa28-dc80-a9ef-ffe9f8290001/01-2024-chevrolet-corvette-angular-front-jmv.JPG?update-time=1700709318771&size=responsiveGallery",
    },
    {
      id: 1,
      image:
        "https://img.etimg.com/thumb/width-420,height-315,imgsize-22382,resizemode-75,msid-111780228/news/international/world-news/india-has-the-worlds-second-most-expensive-house-check-the-of-the-top-10-costliest-homes/which-mansion-tops-the-list-of-the-worlds-most-expensive-houses.jpg",
    },
    {
      id: 2,
      image:
        "https://carsguide-res.cloudinary.com/image/upload/c_fit,h_726,w_1290,f_auto,t_cg_base/v1/editorial/story/hero_image/Koenigsegg-Gemera-1001x565-3.jpg",
    },
    {
      id: 3,
      image:
        "https://www.usnews.com/object/image/0000018b-fa28-dc80-a9ef-ffe9f8290001/01-2024-chevrolet-corvette-angular-front-jmv.JPG?update-time=1700709318771&size=responsiveGallery",
    },
    {
      id: 1,
      image:
        "https://img.etimg.com/thumb/width-420,height-315,imgsize-22382,resizemode-75,msid-111780228/news/international/world-news/india-has-the-worlds-second-most-expensive-house-check-the-of-the-top-10-costliest-homes/which-mansion-tops-the-list-of-the-worlds-most-expensive-houses.jpg",
    },
    {
      id: 2,
      image:
        "https://carsguide-res.cloudinary.com/image/upload/c_fit,h_726,w_1290,f_auto,t_cg_base/v1/editorial/story/hero_image/Koenigsegg-Gemera-1001x565-3.jpg",
    },
    {
      id: 3,
      image:
        "https://www.usnews.com/object/image/0000018b-fa28-dc80-a9ef-ffe9f8290001/01-2024-chevrolet-corvette-angular-front-jmv.JPG?update-time=1700709318771&size=responsiveGallery",
    },
    {
      id: 1,
      image:
        "https://img.etimg.com/thumb/width-420,height-315,imgsize-22382,resizemode-75,msid-111780228/news/international/world-news/india-has-the-worlds-second-most-expensive-house-check-the-of-the-top-10-costliest-homes/which-mansion-tops-the-list-of-the-worlds-most-expensive-houses.jpg",
    },
    {
      id: 2,
      image:
        "https://carsguide-res.cloudinary.com/image/upload/c_fit,h_726,w_1290,f_auto,t_cg_base/v1/editorial/story/hero_image/Koenigsegg-Gemera-1001x565-3.jpg",
    },
    {
      id: 3,
      image:
        "https://www.usnews.com/object/image/0000018b-fa28-dc80-a9ef-ffe9f8290001/01-2024-chevrolet-corvette-angular-front-jmv.JPG?update-time=1700709318771&size=responsiveGallery",
    },
  ];

  return (
    <Container none={true} phon={true}>
      <Header back={true} container={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: colors.white,
          }}
        >
          <Slider height={200} img={data} back={true} detail={true} />
        </View>
        <Column gap={6}>
          <Wrapper top={true} padding={[16]}>
            <View
              style={{
                marginTop: 10,
              }}
            >
              <ProfileBox
                none={true}
                gap={10}
                name="ЖД «Москва»"
                rates={"4.4"}
                reviews={1}
                reviewsColor={colors.blue}
                more={true}
              />
            </View>
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
            <Button
              top={16}
              handle={() => ""}
              color={colors.phon}
              textColor={colors.black}
            >
              Посмотреть на карте
            </Button>
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
          <View
            style={{
              // backgroundColor: colors.white,
              paddingBottom: 150,
            }}
          ></View>
        </Column>
      </ScrollView>
    </Container>
  );
};

export default HouseResidentialProfile;
