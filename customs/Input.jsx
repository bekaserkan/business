import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { colors } from "../assets/styles/colors";
import TextContent from "../assets/styles/components/TextContent";

const InputCustom = ({
  phone,
  email,
  disabled,
  style,
  value,
  onChangeText,
  placeholder,
  numeric,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View>
      <TextInput
        style={[
          style,
          stylesInput.basa,
          isFocused && stylesInput.inputContainerFocused,
          value ? stylesInput.textEntered : stylesInput.placeholderText,
        ]}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        editable={disabled}
        maxLength={phone && 17}
        keyboardType={email ? "email-address" : numeric ? "numeric" : ""}
        autoCapitalize={email ? "none" : ""}
      />
      <View
        style={{
          width: "100%",
          height: 30,
        }}
      >
        <TextContent
          top={4}
          color={colors.red}
          fontSize={13}
          fontWeight={500}
          center={"right"}
        >
          {error}
        </TextContent>
      </View>
    </View>
  );
};

const stylesInput = StyleSheet.create({
  inputContainerFocused: {
    borderColor: colors.blue,
    borderWidth: 1,
    backgroundColor: "#1856CD1A",
  },
  basa: {
    borderWidth: 1,
    borderColor: colors.phon,
    width: "100%",
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: colors.phon,
    borderRadius: 10,
    fontSize: 16,
  },
  placeholderText: {
    fontWeight: "400",
  },
  textEntered: {
    fontWeight: "500",
  },
});

export default InputCustom;
