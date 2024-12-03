import React, { useEffect } from "react";
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
import { useStateHouse } from "../../context/stateHouseContext";
import Loading from "../../ui/Loading";

const HouseDetail = ({ route }) => {
  const { deLoading, param, resident, detail, getDetail } = useStateHouse();
  const { id, complex_id } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    getDetail({ id: id, complex_id });
  }, []);

  if (deLoading) {
    return <Loading />;
  }
  const dataImage =
    !deLoading &&
    detail.properties_pictures.map((el) => {
      return {
        image: el.pictures.big,
      };
    });

  const routeTo = () => {
    navigation.navigate("HouseScreens", {
      screen: "HouseResidentialProfile",
    });
  };

  const type = param?.type?.filter((obj) => {
    return obj.id == detail.type_id;
  })[0];
  const category = param?.category?.filter((obj) => {
    return obj.id == detail.category;
  })[0];
  const rooms = param?.rooms?.filter((obj) => {
    return obj.id == detail.rooms;
  })[0];
  const title = `${type?.name ? `${type.name}` : ""}${
    category?.name ? ` • ${category.name}` : ""
  }${
    rooms?.name
      ? rooms?.id >= 6
        ? ` • ${rooms?.name}`
        : ` • ${rooms?.name}-комн.,`
      : ""
  } ${detail.square}м²${
    detail.floor == -1
      ? ", цоколь"
      : detail.floor == -2
      ? ", подвал"
      : detail.floor > 1
      ? `, ${detail.floor}-этаж из ${detail.floors}`
      : ""
  }`;

  return (
    <ButtonLayouts>
      <Container none={true} phon={true}>
        <Header id={detail.id} love={true} back={true} container={true} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Column gap={4}>
            <MainBlock
              img={dataImage}
              title={title}
              priceUSD={detail.prices[1].price}
              priceSom={detail.prices[0].price}
              miniPriceUSD={detail.prices[1].m2_price}
              miniPriceSom={detail.prices[0].m2_price}
              house={true}
              address={`Бишкек`}
              street={`${detail.street ? detail.street : ""} ${
                detail.crossing ? detail.crossing : ""
              }`}
              time={""}
              vip={true}
              addHours={`Добавлено ${detail.added_at} назад`}
              eye={detail.views}
              heart={"0000"}
              comment={"0000"}
            />
            {!resident.length == 0 && (
              <AccountBlock
                title="Жилой комплекс"
                name={resident.complex_name}
                nameColor={colors.blue}
                stars={1}
                rates="0000"
                reviews="0000"
                description={resident.address}
                ava={resident.images[0].image_url}
                handle={() =>
                  navigation.navigate("HousePrivateProfile", {
                    id: detail.user.id,
                  })
                }
              />
            )}
            {detail.safety.length > 0 && (
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
            )}
            {detail.safety.length > 0 && (
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
            )}
            <Description
              text={detail.description}
              point={detail.point.coordinates}
            />
            <ProfileBlock
              name={detail.user.name}
              stars={1}
              rates={detail.user.avarage_rating}
              reviews={detail.user.review_count}
              description={`${detail.user.accommodation_count} объявления`}
              ava={detail.user._avatar}
              handle={() =>  navigation.navigate("CarPrivateProfile", {
                id: detail.user.id, 
              })}
            />
            <CommentsBlock
              data={[
                {
                  id: 1,
                  ava: "https://www.perunica.ru/uploads/posts/2019-09/1567597236_021.jpg",
                  name: "Санжар",
                  text: "Здравствуйте, а есть черного цвета?😁",
                  date: "2024-10-05T19:51:41.363Z",
                  answer: true,
                  replies: [
                    {
                      id: 2,
                      ava: "https://www.perunica.ru/uploads/posts/2019-09/1567597236_021.jpg",
                      name: "Нурзида",
                      text: "Ради вас покрасим на черный🗿",
                      date: "2024-11-01T19:51:41.363Z",
                      answer: true,
                    },
                    {
                      id: 3,
                      ava: "https://www.perunica.ru/uploads/posts/2019-09/1567597236_021.jpg",
                      name: "Нурзида",
                      text: "Ради вас покрасим на черный🗿",
                      date: "2024-11-01T19:51:41.363Z",
                      answer: true,
                    },
                    {
                      id: 3,
                      ava: "https://www.perunica.ru/uploads/posts/2019-09/1567597236_021.jpg",
                      name: "Нурзида",
                      text: "Ради вас покрасим на черный🗿",
                      date: "2024-11-01T19:51:41.363Z",
                      answer: true,
                    },
                  ],
                },
              ]}
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
