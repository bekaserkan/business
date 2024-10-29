import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { useСondition } from "../../../context/stateContext";
import Loading from "../../../ui/Loading";
import Wave from "../../../customs/Wave";
import ImageCustom from "../../../customs/Image";
import TextContent from "../../../assets/styles/components/TextContent";
import { colors } from "../../../assets/styles/colors";
import { useNavigation } from "@react-navigation/native";

const containerWidth = (Dimensions.get("window").width - 32) / 2 - 5;
const fullWidth = Dimensions.get("window").width - 32;

const List = ({ scrollRef, car }) => {
  const { loading, dataListCars, dataListHouses } = useСondition();
  const data = car ? dataListCars : dataListHouses;
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
      showsVerticalScrollIndicator={false}
      scrollRef={scrollRef}
      nestedScrollEnabled
      style={{
        flex: 1,
      }}
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
            <Wave handle={handleFunction} key={id}>
              <View style={styles.box}>
                <ImageCustom
                  uri={"http:" + el.hotelpicture}
                  width={"100%"}
                  height={120}
                  borderRadius={6}
                />
                <TextContent
                  top={10}
                  fontSize={16}
                  fontWeight={500}
                  color={colors.black}
                >
                  {el.countryname}
                </TextContent>
              </View>
            </Wave>
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
