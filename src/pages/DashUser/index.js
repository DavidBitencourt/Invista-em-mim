import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import backOrange from "../../assets/backOrange.png";
import backOrangeWhite from "../../assets/backOrangeWhite.png";
import duda from "../../assets/duda.png";
import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import { styles } from "./styles";

export default function DashUser() {
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
            bottom: 50,
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
            bottom: 40,
          }}
        />
      </View>
      <View style={styles.containerDash}>
        <View style={styles.logo}>
          <Image
            source={logo}
            style={{
              resizeMode: "contain",
              width: "50%",
              height: "70%",
            }}
          />
          <Image
            source={duda}
            style={{
              resizeMode: "contain",
              width: "70%",
              height: "50%",
            }}
          />
        </View>
        <View style={styles.boxButton}>
          <Button
            text="COMEÇAR AULAS"
            textColor="#ffffff"
            backgroundColor="#8708FE"
            normalButton
            handler={() => navigation.navigate("DefineClass")}
          />
        </View>
        <View style={styles.boxButton}>
          <Button
            text="MATERIAL COMPLEMENTAR"
            textColor="#ffffff"
            backgroundColor="#8708FE"
            normalButton
            handler={() => navigation.navigate("SupportMaterial")}
          />
        </View>
        <View style={styles.boxButton}>
          <Button
            text="SAIR"
            textColor="#ffffff"
            backgroundColor="#8708FE"
            handler={() => navigation.navigate("Home")}
          />
        </View>
      </View>
    </View>
  );
}
