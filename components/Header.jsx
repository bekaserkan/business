import React from "react";
import { Platform, View } from "react-native";
import TextContent from "../assets/styles/components/TextContent";
import { colors } from "../assets/styles/colors";
import Flex from "../assets/styles/components/Flex";
import Back from "../assets/svg/back";
import Wave from "../customs/Wave";
import { useNavigation } from "@react-navigation/native";

const Header = ({ back, homeBack, handleBack, container, children }) => {
  const navigation = useNavigation();

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
          // borderBottomColor: colors.phon,
          // borderBottomWidth: 1,
        },
        container && {
          paddingHorizontal: 16,
        },
      ]}
    >
      <Flex gap={20}>
        {back && (
          <Wave handle={route}>
            <Back />
          </Wave>
        )}
        <TextContent fontSize={22} fontWeight={600} color={colors.black}>
          {children}
        </TextContent>
      </Flex>
    </View>
  );
};

export default Header;
