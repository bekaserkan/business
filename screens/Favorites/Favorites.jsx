import React, { useState } from "react";
import LayoutTab from "../../layouts/tabs";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { url } from "../../api/api";
import Slide from "./components/Slide";
import NotLoveData from "../../assets/svg/notLoveData";
import NotSearchData from "../../assets/svg/notSearchLoveData";
import TextContent from "../../assets/styles/components/TextContent";
import { colors } from "../../assets/styles/colors";

const NotData = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 200,
      }}
    >
      <NotLoveData />
      <TextContent
        top={20}
        fontSize={18}
        fontWeight={500}
        color={colors.black}
        center={"center"}
      >
        Избранные объявления
      </TextContent>
      <TextContent
        style={{
          maxWidth: 300,
        }}
        top={12}
        fontSize={16}
        fontWeight={400}
        color={colors.gray}
        center={"center"}
      >
        Сохраняйте объявления в избранное, чтобы следить за ценой
      </TextContent>
    </View>
  );
};

const NotSearch = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 200,
      }}
    >
      <NotSearchData />
      <TextContent
        top={20}
        fontSize={18}
        fontWeight={500}
        color={colors.black}
        center={"center"}
      >
        Избранные поиски
      </TextContent>
      <TextContent
        style={{
          maxWidth: 300,
        }}
        top={12}
        fontSize={16}
        fontWeight={400}
        color={colors.gray}
        center={"center"}
      >
        Сохраняйте поиски в избранное, чтобы следить за ценой
      </TextContent>
    </View>
  );
};

const Favorites = () => {
  return (
    <LayoutTab>
      <Slide data={<NotData />} searchData={<NotSearch />} />
    </LayoutTab>
  );
};

export default Favorites;
