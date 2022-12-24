import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Button } from "../../components";

import { FacebookIcon, GoogleIcon, Logo } from "../../assets";

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.headingTextContainer}>
        <Text style={styles.headingText}>
          Let’s Onboard you on a new {"\n"}
          <Text style={styles.travelText}>travel experience!!</Text>
        </Text>
        <Text style={styles.subTitle}>
          Few clicks away from exploring your trip...
        </Text>
      </View>
      <View style={styles.mainImageContainer}>
        <Image source={require("../../assets/tourist.png")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button icon={<GoogleIcon />} label={"Signup with google"} />
        <Button
          style={{
            container: {
              backgroundColor: "#4B68FF",
              marginVertical: 10,
              borderColor: "#4B68FF",
            },
            label: {
              color: "#ffffff",
            },
          }}
          icon={<FacebookIcon />}
          label={"Signup with facebook"}
        />
        <View style={styles.loginTextContainer}>
          <Text>Already a Tripcy user ? </Text>
          <TouchableOpacity>
            <Text style={[styles.travelText, styles.loginText]}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "space-around",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 48,
  },
  headingTextContainer: {
    paddingTop: 30,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  travelText: {
    color: "#FF5353",
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#414141",
    textAlign: "center",
    lineHeight: 17,
  },
  mainImageContainer: {
    marginHorizontal: 30,
    marginTop: 55,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  loginTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  loginText: {
    fontSize: 14,
    fontWeight: "700",
  },
});

export default Onboarding;
