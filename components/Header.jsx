import React, { useEffect, useState } from "react";
import { Platform, View } from "react-native";
import TextContent from "../assets/styles/components/TextContent";
import { colors } from "../assets/styles/colors";
import Flex from "../assets/styles/components/Flex";
import Back from "../assets/svg/back";
import Wave from "../customs/Wave";
import { useNavigation } from "@react-navigation/native";
import Between from "../assets/styles/components/Between";
import Heard1 from "../assets/svg/loveFull.js";
import Heard from "../assets/svg/love.js";
import { AddFavorite } from "../services/favorite.js";

const Header = ({
  id,
  love,
  iks,
  back,
  homeBack,
  handleBack,
  container,
  children,
  style,
  reset,
}) => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (id) {
      AddFavorite({ id: id });
    }
  }, [isFavorite]);

  const route = () => {
    if (handleBack) {
      handleBack();
    } else if (homeBack) {
      navigation.navigate("MainScreen");
    } else {
      navigation.goBack();
    }
  };

  return (
    <View
      style={[
        {
          paddingTop: Platform.OS === "ios" ? 60 : 42,
          backgroundColor: colors.white,
          paddingBottom: 16,
        },
        container && {
          paddingHorizontal: 16,
        },
        style,
      ]}
    >
      <Between center="center">
        <Flex
          style={{
            flex: 1,
          }}
          gap={20}
        >
          {back && (
            <Wave handle={route}>
              <Back />
            </Wave>
          )}
          <TextContent
            style={{
              flex: 1,
            }}
            numberOfLines={1}
            fontSize={22}
            fontWeight={600}
            color={colors.black}
          >
            {children}
          </TextContent>
        </Flex>
        {love && (
          <Wave handle={() => setIsFavorite(!isFavorite)}>
            {isFavorite ? <Heard1 /> : <Heard />}
          </Wave>
        )}
        {iks && (
          <Wave handle={reset}>
            <TextContent fontSize={14} fontWeight={500} color={colors.black}>
              Сбросить
            </TextContent>
          </Wave>
        )}
      </Between>
    </View>
  );
};

export default Header;
