import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import Back from "../assets/svg/backWhite.js";
import { useNavigation } from "@react-navigation/native";
import Wave from "../customs/Wave.jsx";

const Slider = ({ img }) => {
  const navigate = useNavigation();
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {img.map((item) => (
          <View style={styles.img_box}>
            <Image key={item.id} source={item.image} style={styles.img} />
          </View>
        ))}
      </ScrollView>
      <Wave style={styles.back_icons} handle={() => navigate.goBack()}>
        <Back />
      </Wave>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: "100%",
    width: "100%",
  },
  img_box: {
    width: 300,
    height: 250,
    position: "relative",
  },
  back_icons: {
    top: 50,
    left: 16,
    width: 30,
    height: 30,
    position: "absolute",
  },
});

export default Slider;
