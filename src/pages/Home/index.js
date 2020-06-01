import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import backOrange from "../../assets/backOrange.png";
import backOrangeWhite from "../../assets/backOrangeWhite.png";
import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import { styles } from "./styles";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={backOrangeWhite}
          style={{
            resizeMode: "contain",
            width: hp("100%"),
            height: wp("100%"),
            right: 0,
            bottom: 150,
            zIndex: 555,
            position: "absolute",
          }}
        />
        <Image
          source={backOrange}
          style={{
            resizeMode: "contain",
            width: hp("200%"),
            height: wp("150%"),
            right: 260,
            bottom: 0,
          }}
        />
      </View>
      <View style={styles.logo}>
        <Image
          source={logo}
          style={{
            resizeMode: "contain",
            width: wp("100%"),
            height: hp("22%"),
          }}
        />
      </View>
      <View style={styles.footer}>
        <Button
          text="ENTRAR"
          textColor="#ffffff"
          backgroundColor="#8708FE"
          handler={() => navigation.navigate("DashUser")}
        />
      </View>
    </View>
  );
}
