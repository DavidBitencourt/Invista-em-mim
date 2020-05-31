import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import backOrange from "../../assets/backOrange.png";
import backOrangeWhite from "../../assets/backOrangeWhite.png";
import ButtonQuestions from "../../components/ButtonQuestions";
import RadioButton from "../../components/RadioButton";
import Toast from "../../components/ToastShow";
import { styles } from "./styles";

export default function DefineClass() {
  const navigation = useNavigation();
  const [visibleToast, setVisibleToast] = useState(false);
  const [textToast, setTextToast] = useState(
    "No momento o nível está indísponivel"
  );
  const [data, setData] = useState({
    level: "",
    objective: "",
    target: "",
  });

  useEffect(() => {
    if (data.level === "Intermediário" || data.level === "Avançado") {
      setVisibleToast(true);
      setTimeout(() => setVisibleToast(false), 1500);
    } else {
      setVisibleToast(false);
    }
  }, [data.level]);

  const levels = [
    {
      label: "Iniciante",
      value: "Iniciante",
    },
    {
      label: "Intermediário",
      value: "Intermediário",
    },
    {
      label: "Avançado",
      value: "Avançado",
    },
  ];

  const objective = [
    {
      label: "Investir",
      value: "Investir",
    },
    {
      label: "Poupar",
      value: "Poupar",
    },
    {
      label: "Empreender",
      value: "Empreender",
    },
  ];

  const target = [
    {
      label: "Caminhando",
      value: "Caminhando",
    },
    {
      label: "Trotando",
      value: "Trotando",
    },
    {
      label: "Correndo",
      value: "Correndo",
    },
  ];

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
            right: 295,
            bottom: 40,
          }}
        />
      </View>
      <View style={styles.containerSelects}>
        <RadioButton
          items={levels}
          label="Qual o seu nível:"
          changeValue={(value) => setData({ ...data, level: value })}
        />
        <RadioButton
          items={objective}
          label="Qual o seu objetivo:"
          changeValue={(value) => setData({ ...data, objective: value })}
        />
        <RadioButton
          items={target}
          label="Qual a sua meta:"
          changeValue={(value) => setData({ ...data, target: value })}
        />
        <View style={styles.footer}>
          <ButtonQuestions
            text="Avançar"
            handler={() => {
              navigation.navigate("Game");
            }}
          />
        </View>
      </View>
      <Toast text={textToast} visibleToast={visibleToast} />
    </View>
  );
}
