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
import Between from "../assets/styles/components/Between.jsx";
import { useNavigation } from "@react-navigation/native";
import ImageCustom from "./Image.jsx";

const Card = ({
  id,
  image,
  width,
  title,
  background,
  priceDollars,
  price,
  year,
  volume,
  urgently,
  home,
  vip,
  starVip,
  avto_user,
  dollarsSquare,
  summSquare,
  adress,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();

  const goDetail = () => {
    if (home) {
      navigation.navigate("HouseScreens", {
        screen: "HouseDetail",
        params: { id: id },
      });
    } else {
      navigation.navigate("CarScreens", {
        screen: "CarDetail",
        params: { id: id },
      });
    }
  };

  return (
    <Wave handle={goDetail} style={[stylesCard.card_block, { width: width }]}>
      <Column
        gap={10}
        style={[stylesCard.card_box, { backgroundColor: background }]}
      >
        <View style={stylesCard.card_box_img}>
          <View
            style={{
              top: 0,
              left: 0,
              position: "absolute",
              width: "100%",
              height: 120,
            }}
          >
            <ImageCustom
              uri={image}
              width={"100%"}
              height={120}
              borderRadius={6}
            />
          </View>
          <Pressable onPress={() => setIsFavorite(!isFavorite)}>
            {isFavorite ? (
              <Heard1
                style={{ position: "absolute", top: 5, right: 5, zIndex: 1 }}
              />
            ) : (
              <Heard style={{ position: "absolute", top: 5, right: 5 }} />
            )}
          </Pressable>
          {urgently && (
            <View style={stylesCard.urgently}>
              <TextContent color={colors.white} fontSize={8} fontWeight={500}>
                срочно
              </TextContent>
            </View>
          )}
          {avto_user && (
            <View style={stylesCard.avto_user}>
              <TextContent color={colors.white} fontSize={8} fontWeight={500}>
                Flagman_auto_salon
              </TextContent>
            </View>
          )}
        </View>
        {!home && (
          <>
            <TextContent
              numberOfLines={2}
              color={colors.black}
              fontSize={14}
              fontWeight={500}
            >
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
          </>
        )}
        {home && (
          <Column gap={10}>
            <TextContent
              numberOfLines={2}
              color={colors.black}
              fontSize={14}
              fontWeight={500}
            >
              {title}
            </TextContent>
            <Column gap={2}>
              <Between>
                <TextContent
                  color={colors.black}
                  fontSize={14}
                  fontWeight={600}
                >
                  ${priceDollars}
                </TextContent>
                <TextContent color={colors.gray} fontSize={12} fontWeight={400}>
                  {price} сом
                </TextContent>
              </Between>
              <Between>
                <TextContent
                  color={colors.black}
                  fontSize={14}
                  fontWeight={600}
                >
                  ${dollarsSquare}/м²
                </TextContent>
                <TextContent color={colors.gray} fontSize={12} fontWeight={400}>
                  {summSquare}/м²
                </TextContent>
              </Between>
            </Column>
          </Column>
        )}
        {home ? (
          <Flex style={{ flexDirection: "row" }} gap={5}>
            {vip ? (
              <Vip style={{ width: 14, height: 14 }} />
            ) : starVip ? (
              <VipStar style={{ width: 14, height: 14 }} />
            ) : null}
            <TextContent
              numberOfLines={1}
              fontSize={12}
              fontWeight={400}
              color={colors.gray}
            >
              {adress}
            </TextContent>
          </Flex>
        ) : (
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
        )}
      </Column>
    </Wave>
  );
};

const stylesCard = StyleSheet.create({
  avto_user: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: colors.red,
    position: "absolute",
    left: 3,
    zIndex: 1,
    bottom: 3,
    borderRadius: 4,
  },
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
    position: "relative",
  },
  urgently: {
    position: "absolute",
    top: 3,
    left: 3,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: colors.red,
    borderRadius: 4,
  },
});

export default Card;
