import { View, Text, FlatList, Image, ImageBackground } from "react-native";
import React from "react";
import IconBookMark from "../assets/IconBookMark";

const BookMarkIcon = ({ containerStyle = {} }) => {
  return (
    <View
      style={[
        {
          backgroundColor: "#ffffff",
          width: 30,
          height: 30,
          borderRadius: 15,
          position: "absolute",
          top: 10,
          right: 10,
          justifyContent: "center",
          alignItems: "center",
        },
        containerStyle,
      ]}
    >
      <View style={{ marginTop: 8, marginLeft: 10 }}>
        <IconBookMark />
      </View>
    </View>
  );
};
const ImageCarousel = ({ title }) => {
  return (
    <View style={{ marginHorizontal: 16 }}>
      <Text
        style={{
          color: "#000000",
          fontWeight: "700",
          fontSize: 16,
          marginVertical: 13,
        }}
      >
        {title}
      </Text>
      <View>
        <View>
          <ImageBackground
            style={{ height: 150, width: 150, borderRadius: 5 }}
            source={{
              uri: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
            }}
          >
            <BookMarkIcon />
          </ImageBackground>
        </View>
        <Text
          style={{
            color: "#000000",
            fontWeight: "700",
            fontSize: 16,
            marginVertical: 13,
          }}
        >
          Sula Vineyards
        </Text>
      </View>
    </View>
  );
};

ImageCarousel.defaultProps = {
  title: "Nearby places to visit",
};
export default ImageCarousel;
