import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import { Logo } from "../../assets";
import { LogoVariant } from "../../assets/Logo";
import { Feather as Icon } from "@expo/vector-icons";
import { ImageCarousel } from "../../components";
import { useTheme } from "@rneui/themed";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const Dashboard = () => {
  const { theme } = useTheme();
  return (
    <SafeAreaView>
      <ImageBackground
        style={{
          height: wHeight * 0.5,
          width: wWidth,
          resizeMode: "contain",
          justifyContent: "space-between",
        }}
        source={require("../../assets/banner.png")}
      >
        <View style={styles.logoContainer}>
          <Logo variant={LogoVariant.dark} />
          <Text style={styles.logoText}>Tripcy</Text>
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>
            Build memories across beautiful places in world
          </Text>
          <View style={styles.searchContainer}>
            <Icon name="search" color={theme.colors.primary} size={20} />
            <TextInput
              style={{ color: "#FF5353", marginLeft: 4, fontWeight: "700" }}
              placeholderTextColor="#FF5353"
              placeholder="Where you want to go ?"
            />
          </View>
        </View>
      </ImageBackground>
      <ImageCarousel />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    paddingLeft: 15,
    paddingTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    fontSize: 14,
    fontWeight: "700",
    paddingLeft: 5,
  },
  headingContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  heading: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700",
    paddingVertical: 20,
  },
  searchContainer: {
    backgroundColor: "#ffffff",
    height: 48,
    borderRadius: 600,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
});
export default Dashboard;
