import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import TextContent from "../assets/styles/components/TextContent";
import { colors } from "../assets/styles/colors";
import Column from "../assets/styles/components/Column";
import Flex from "../assets/styles/components/Flex";
import Heard1 from "../assets/svg/heardFull.js";
import Heard from "../assets/svg/heard.js";
import Vip from "../assets/svg/vip.js";
import VipStar from "../assets/svg/starVip.js";
import Wave from "./Wave.jsx";

const Card = ({
  title,
  background,
  priceDollars,
  price,
  year,
  volume,
  urgently,
  car,
  home,
  vip,
  starVip,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <Wave style={stylesCard.card_block}>
      <Column
        gap={10}
        style={[stylesCard.card_box, { backgroundColor: background }]}
      >
        <View style={stylesCard.card_box_img}>
          <Pressable onPress={() => setIsFavorite(!isFavorite)}>
            {isFavorite ? (
              <Heard1
                style={{ position: "absolute", top: 8, right: 8, zIndex: 1 }}
              />
            ) : (
              <Heard style={{ position: "absolute", top: 8, right: 8 }} />
            )}
          </Pressable>
        </View>
        {urgently && (
          <View style={stylesCard.urgently}>
            <TextContent color={colors.white} fontSize={8} fontWeight={500}>
              срочно
            </TextContent>
          </View>
        )}
        <TextContent color={colors.black} fontSize={14} fontWeight={500}>
          {title}
        </TextContent>
        <Column gap={2}>
          <TextContent color={colors.black} fontSize={18} fontWeight={600}>
            ${priceDollars}
          </TextContent>
          <TextContent color={colors.black} fontSize={14} fontWeight={500}>
            {price} сом
          </TextContent>
        </Column>
        <Flex style={{ flexDirection: "row" }} gap={5}>
          {vip ? (
            <Vip style={{ width: 14, height: 14 }} />
          ) : starVip ? (
            <VipStar style={{ width: 14, height: 14 }} />
          ) : null}
          <TextContent fontSize={12} fontWeight={400} color={colors.gray}>
            {year}
          </TextContent>
          <TextContent color={colors.gray}>/</TextContent>
          <TextContent fontSize={12} fontWeight={400} color={colors.gray}>
            {volume}
          </TextContent>
        </Flex>
      </Column>
    </Wave>
  );
};

const stylesCard = StyleSheet.create({
  card_block: {
    width: "49%",
    overflow: "hidden",
  },
  card_box: {
    width: "100%",
    borderRadius: 8,
    padding: 4,
  },
  card_box_img: {
    height: 120,
    borderRadius: 6,
    backgroundColor: "blue",
    position: "relative",
  },
  urgently: {
    position: "absolute",
    top: 8,
    left: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: colors.red,
    borderRadius: 4,
  },
});

export default Card;
