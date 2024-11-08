import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { useСondition } from "../../../context/stateContext";
import Loading from "../../../ui/Loading";
import Wave from "../../../customs/Wave";
import ImageCustom from "../../../customs/Image";
import TextContent from "../../../assets/styles/components/TextContent";
import { colors } from "../../../assets/styles/colors";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../../../customs/Card";
import { useStateHouse } from "../../../context/stateHouseContext";
import { useStateCar } from "../../../context/stateCarContext";

const containerWidth = (Dimensions.get("window").width - 32) / 2 - 5;
const fullWidth = Dimensions.get("window").width - 32;

const List = ({ scrollRef, car }) => {
  const { reLoading, recomention } = car ? useStateCar() : useStateHouse();
  const navigation = useNavigation();

  const handleFunction = () => {
    if (car) {
      navigation.navigate("CarScreens", {
        screen: "CarDetail",
      });
    } else {
      navigation.navigate("HouseScreens", {
        screen: "HouseDetail",
      });
    }
  };

  if (reLoading) {
    return <Loading />;
  }

  return (
    <ScrollView
      ref={scrollRef}
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.map}>
        {Object.values(recomention)?.map((el, id) =>
          el.advertising ? (
            <Wave handle={() => handleFunction()} key={id}>
              <View style={[styles.box, styles.advertisement]}>
                <TextContent
                  fontSize={24}
                  fontWeight="bold"
                  color={colors.black}
                  style={{ textAlign: "center", padding: 20 }}
                >
                  Рекламный Блок
                </TextContent>
              </View>
            </Wave>
          ) : (
            <Card
              width={containerWidth}
              image={el.properties_pictures[0].pictures.big}
              id={el.id}
              key={id}
              title={el.title}
              background={el.background}
              price={el.prices[0].price}
              priceDollars={el.prices[1].price}
              year={el.year}
              summSquare={el.prices[0].m2_price}
              dollarsSquare={el.prices[1].m2_price}
              volume={el.volume}
              urgently={el.urgently}
              vip={el.vip}
              starVip={el.starVip}
              adress={el.street}
              home={car ? false : true}
            />
          )
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  map: {
    marginTop: 6,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
    paddingBottom: 200,
  },
  box: {
    width: containerWidth,
    height: 250,
    backgroundColor: colors.phon,
    borderRadius: 6,
  },
  advertisement: {
    marginVertical: 20,
    width: fullWidth,
    height: 160,
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    height: 80,
    width: "90%",
    backgroundColor: "#78CAD2",
    alignSelf: "center",
    borderRadius: 15,
    marginTop: 20,
  },
});

export default List;
