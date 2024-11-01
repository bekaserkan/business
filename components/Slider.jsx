import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import Back from "../assets/svg/backWhite.js";
import { useNavigation } from "@react-navigation/native";

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
        <Pressable style={styles.back_icons} onPress={() => navigate.goBack()}>
          <Back />
        </Pressable>
      </ScrollView>
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
    height: 200,
    position: "relative",
  },
  back_icons: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 40,
    left: 16,
  },
});

export default Slider;
