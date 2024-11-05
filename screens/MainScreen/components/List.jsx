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

const containerWidth = (Dimensions.get("window").width - 32) / 2 - 5;
const fullWidth = Dimensions.get("window").width - 32;

const List = ({ scrollRef, car }) => {
  const { loading, dataListCars, dataListHouses } = useСondition();
  const data = [
    {
      id: 1,
      title: "CHERY Tiggo 7 Pro Max, 2024",
      background: colors.green2,
      price: "100000",
      priceDollars: "1000",
      summSquare: "1240",
      dollarsSquare: "120",
      year: "2020",
      volume: "1.8",
      vip: true,
      urgently: true,
    },
    {
      id: 2,
      title: "CHERY Tiggo 7 Pro Max, 2024",
      background: colors.white,
      price: "100000",
      priceDollars: "1000",
      summSquare: "1240",
      dollarsSquare: "120",
      year: "2020",
      volume: "1.8",
      vip: false,
      starVip: true,
    },
    {
      id: 3,
      title: "CHERY Tiggo 7 Pro Max, 2024",
      background: colors.white,
      price: "100000",
      priceDollars: "1000",
      summSquare: "1240",
      dollarsSquare: "120",
      year: "2020",
      volume: "1.8",
      vip: false,
      starVip: true,
    },
    {
      id: 4,
      title: "CHERY Tiggo 7 Pro Max, 2024",
      background: colors.green2,
      price: "100000",
      priceDollars: "1000",
      summSquare: "1240",
      dollarsSquare: "120",
      year: "2020",
      volume: "1.8",
      vip: true,
      urgently: true,
    },
  ];

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

  if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView
      ref={scrollRef}
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.map}>
        {Object.values(data)?.map((el, id) =>
          id % 5 === 4 || el.advertising ? (
            <Wave handle={handleFunction} key={id}>
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
              key={id}
              title={el.title}
              background={el.background}
              priceDollars={el.priceDollars}
              price={el.price}
              year={el.year}
              summSquare={el.summSquare}
              dollarsSquare={el.dollarsSquare}
              volume={el.volume}
              urgently={el.urgently}
              vip={el.vip}
              starVip={el.starVip}
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
