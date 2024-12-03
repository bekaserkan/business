import React, { useEffect } from "react";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import Characteristic from "../components/Characteristic";
import Column from "../../assets/styles/components/Column";
import ProfileBlock from "../components/ProfileBlock";
import Description from "../components/Description";
import { ScrollView, Image } from "react-native";
import CommentsBlock from "../components/CommentsBlock";
import ButtonLayouts from "../../layouts/buttonLayouts";
import ContactsBlock from "../components/ContactsBlock";
import Additionally from "../components/Additionally";
import Footer from "../components/Footer";
import MainBlock from "../components/MainBlock";
import Loading from "../../ui/Loading";
import { useStateCar } from "../../context/stateCarContext";
import { useСondition } from "../../context/stateContext";

const CarDetail = ({ route }) => {
  const navigation = useNavigation();
  const routeTo = () => {
    navigation.navigate("CarPrivateProfile", {
      id: item.id,
    });
  };

  const { deLoading, detail, getDetail, param } = useStateCar();
  const { userData } = useСondition();
  const { id } = route.params;

  useEffect(() => {
    getDetail({ id: id });
  }, []);

  if (deLoading) {
    return <Loading />;
  }
  const dataImage =
    !deLoading &&
    detail.pictures.map((el) => {
      return {
        image: el.pictures.big,
      };
    });

  // const interor = detail.interior.map((item) => ({
  //   text: item.name,
  // }));

  const exterior = detail.exterior.map((item) => ({
    text: item.name,
  }));

  const media = detail.media.map((item) => ({
    text: item.name,
  }));

  const safety = detail.safety.map((item) => ({
    text: item.name,
  }));

  const other_option = detail.other_options.map((item) => ({
    text: item.name,
  }));

  const configuration = detail.configuration.map((item) => ({
    text: item.name,
  }));

  const selectedInterior = param?.interior?.map((obj) => {
    if (detail.interior.includes(obj.id)) {
      return {
        id: obj.id,
        text: obj.name, 
      };
    }
    return null; 
  }).filter(Boolean); 

  const selectedExterior = param?.exterior?.map((obj) => {
    if (detail.interior.includes(obj.id)) {
      return {
        id: obj.id,
        text: obj?.name, 
      };
    }
    return null; 
  }).filter(Boolean); 

  const selectedConfiguration = param?.configuration?.map((obj) => {
    if (detail.interior.includes(obj.id)) {
      return {
        id: obj.id,
        text: obj?.name, 
      };
    }
    return null; 
  }).filter(Boolean);
  const selectedOther_option = param?.other_option?.map((obj) => {
    if (detail.interior.includes(obj.id)) {
      return {
        id: obj.id,
        text: obj?.name, 
      };
    }
    return null; 
  }).filter(Boolean);

  const selectedSafety = param?.safety?.map((obj) => {
    if (detail.interior.includes(obj.id)) {
      return {
        id: obj.id,
        text: obj?.name, 
      };
    }
    return null; 
  }).filter(Boolean);

  const selectedMedia = param?.media?.map((obj) => {
    if (detail.interior.includes(obj.id)) {
      return {
        id: obj.id,
        text: obj?.name, 
      };
    }
    return null; 
  }).filter(Boolean);


  return (
    <ButtonLayouts>
      <Container none={true} phon={true}>
        <Header id={detail.id} love={true} back={true} container={true} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Column gap={4}>
            <MainBlock
              img={dataImage}
              mark={detail.mark_name}
              year={detail.year}
              title={detail.model_name}
              priceUSD={detail.prices[1].price}
              priceSom={detail.prices[0].price}
              car={true}
              address={"Бишкек"}
              time={"5 мин назад"}
              vip={true}
              addHours={`Добавлено ${detail.added_at} назад`}
              eye={detail.views}
              heart={detail.likes}
              comment={detail.count_comments}
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
                  name: "Комплектация",
                  data: selectedConfiguration,
                },
                {
                  name: "Интерьер",
                  data: selectedInterior,
                },
                {
                  name: "Экстрерьер",
                  data: selectedExterior,
                },
                {
                  name: "Медиа",
                  data: selectedMedia,
                },
                {
                  name: "Безопасность",
                  data: selectedSafety,
                },
                {
                  name: "Опции",
                  data: selectedOther_option,
                },
              ]}
            />
            <Description text={detail.description} />
            <ProfileBlock
              key={detail.user.id}
              name={detail.user.name}
              stars={detail.user.avarage_rating}
              rates={detail.user.avarage_rating.toFixed(1)}
              reviews={detail.user.review_count}
              description={`${detail.user.accommodation_count} объявления`}
              ava={detail.user._avatar}
              handle={() =>
                navigation.navigate("CarPrivateProfile", {
                  id: detail.user.id,
                })
              }
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
                  phone: detail.user.phone,
                },
              ]}
              keyValue={"phone"}
            />
            <Footer my={detail.user.id == userData.id} />
          </Column>
        </ScrollView>
      </Container>
    </ButtonLayouts>
  );
};

export default CarDetail;
