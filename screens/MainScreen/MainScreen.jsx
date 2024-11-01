import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import HeaderMain from "./components/HeaderMain";
import { colors } from "../../assets/styles/colors";
import InputCate from "./components/Input";
import Category from "./components/Category";
import TextContent from "../../assets/styles/components/TextContent";
import List from "./components/List";
import LayoutTab from "../../layouts/tabs";

const MainScreen = () => {
  const scrollRef = useRef(null);
  const scrollRefTwo = useRef(null);
  

  return (
    <LayoutTab>
      <HeaderMain
        scrollRef={scrollRef}
        scrollRefTwo={scrollRefTwo}
        carContent={
          <View style={styles.section}>
            <View style={styles.container}>
              <InputCate
                text={"Все регионы, марка"}
                navLink={"CarScreens"}
                link={"CarFilter"}
              />
            </View>
            <View style={styles.wrapper}>
              <Category car={true} />
              <TextContent
                top={30}
                fontSize={20}
                fontWeight={600}
                color={colors.black}
                bottom={6}
              >
                Рекомендации
              </TextContent>
              <List scrollRef={scrollRef} car={true} />
            </View>
          </View>
        }
        houseContent={
          <View style={styles.section}>
            <View style={styles.container}>
              <InputCate
                text={"Все регионы, тип недвижимости"}
                navLink={"HouseScreens"}
                link={"HouseFilter"}
              />
            </View>
            <View style={styles.wrapper}>
              <Category house={true} />
              <TextContent
                top={30}
                fontSize={20}
                fontWeight={600}
                color={colors.black}
                bottom={6}
              >
                Рекомендации
              </TextContent>
              <List scrollRef={scrollRefTwo} />
            </View>
          </View>
        }
      />
    </LayoutTab>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
  },
  wrapper: {
    flex: 1,
    marginTop: 20,
    paddingTop: 20,
    paddingHorizontal: 16,
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
    backgroundColor: colors.white,
  },
});

export default MainScreen;
