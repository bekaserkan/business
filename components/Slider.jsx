import React, { useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";
import Back from "../assets/svg/backWhite.js";
import { useNavigation } from "@react-navigation/native";
import Wave from "../customs/Wave.jsx";
import { colors } from "../assets/styles/colors.jsx";
import TextContent from "../assets/styles/components/TextContent.jsx";

const width = Dimensions.get("window").width - 60;

const Slider = ({ img, height, back, detail }) => {
  const navigate = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const styles = StyleSheet.create({
    img: {
      height: "100%",
      width: "100%",
      borderRadius: 10,
    },
    img_box: {
      width: width,
      height: height || 250,
      position: "relative",
      marginHorizontal: 8,
    },
    back_icons: {
      top: 50,
      left: 16,
      width: 30,
      height: 30,
      position: "absolute",
    },
  });

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setCurrentIndex(index);
  };

  return (
    <View style={{ position: "relative" }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        snapToInterval={width}
        decelerationRate="fast"
      >
        {img.map((item, index) => (
          <View
            key={index}
            style={[
              styles.img_box,
              index === 0 &&
                detail && {
                  marginLeft: 16,
                },
              index === img.length - 1 &&
                detail && {
                  marginRight: 16,
                },
            ]}
          >
            <Image
              source={{ uri: item.image }}
              style={[
                styles.img,
                index === 0 &&
                  detail && {
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  },
                index === img.length - 1 &&
                  detail && {
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                  },
              ]}
            />
            {item.id == 1 && (
              <View
                style={{
                  top: 6,
                  left: 6,
                  position: "absolute",
                  borderRadius: 4,
                  backgroundColor: colors.red,
                  paddingVertical: 4,
                  paddingHorizontal: 12,
                }}
              >
                <TextContent
                  style={{
                    textTransform: "uppercase",
                  }}
                  fontSize={10}
                  fontWeight={600}
                  color={colors.white}
                >
                  срочно
                </TextContent>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          top: 6,
          right: 22,
          position: "absolute",
          borderRadius: 4,
          backgroundColor: "#08080899",
          paddingVertical: 5,
          paddingHorizontal: 10,
        }}
      >
        <TextContent
          style={{
            textTransform: "uppercase",
          }}
          fontSize={14}
          fontWeight={400}
          color={colors.white}
        >
          {currentIndex + 1}/{img.length}
        </TextContent>
      </View>
      {!back && (
        <Wave style={styles.back_icons} handle={() => navigate.goBack()}>
          <Back />
        </Wave>
      )}
    </View>
  );
};

export default Slider;
