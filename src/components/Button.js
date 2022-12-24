import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Button = ({ icon, label, onPress, style = {} }) => {
  return (
    <TouchableOpacity {...{ onPress }}>
      <View style={[styles.buttonContainer, style.container]}>
        {icon && icon}
        <Text style={[styles.label, style.label]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000000",
    borderWidth: 1.5,
    borderRadius: 5,
    borderStyle: "solid",
    minWidth: 328,
    minHeight: 45,
    flexDirection: "row",
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 17,
  },
});
Button.defaultProps = {
  label: "Write some label",
  onPress: null,
};

export default Button;
