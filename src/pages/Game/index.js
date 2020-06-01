import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import backOrange from "../../assets/backOrange.png";
import backOrangeWhite from "../../assets/backOrangeWhite.png";
import ButtonQuestions from "../../components/ButtonQuestions";
import RadioButton from "../../components/RadioButton";
import { styles } from "./styles";

export default function Game() {
  const navigation = useNavigation();
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    questionOne: false,
    questionTwo: false,
    questionThree: false,
  });

  const questionOne = [
    {
      label: "Juro nominal",
      value: "Juro nominal",
    },
    {
      label: "Custo de oportunidade",
      value: "Custo de oportunidade",
    },
    {
      label: "Juro Real",
      value: "Juro Real",
    },
    {
      label: "Inflação",
      value: "Inflação",
    },
  ];

  const questionTwo = [
    {
      label: "Nenhuma das alternativas",
      value: false,
    },
    {
      label:
        "Igual ao valor que será recebido ao final do prazo de vencimento descontado à taxa negociada nesse título",
      value: false,
    },
    {
      label: "Dinâmico, conforme varia a taxa de negociação no mercado",
      value: true,
    },
    {
      label: "Constante ao longo do tempo",
      value: false,
    },
  ];

  const questionThree = [
    {
      label: "O movimento dos preços dos ativos investidos",
      value: true,
    },
    {
      label:
        "É a incapacidade da conraparte de conseguir cumprir os compromissos acordados",
      value: false,
    },
    {
      label: "A dificuldade de negociação de um ativo em seu preço justo",
      value: false,
    },
    {
      label:
        "Erros ou problemas técnicos que prejudiquem o correto fluxo de informações e afetam a decisão da composição da carteira",
      value: false,
    },
  ];

  const questions = [
    {
      label:
        "Qual dos conceitos abaixo representa uma remuneração livre da variação do poder de compra de moeda?",
      answers: questionOne,
    },
    {
      label:
        "O valor do de um título público negociado no mercado secundário é:",
      answers: questionTwo,
    },
    {
      label: "O risco de mercado pode ser relacionado em:",
      answers: questionThree,
    },
  ];

  //   async function validateQuestions() {
  //     let teste = await Platform.OS((platform) => {
  //       return platform;
  //     });
  //     console.log(teste);
  //     let getQuestion = await questions[step].answers.find((item) => {
  //       return item.value === true;
  //     });
  //     console.log(getQuestion, "getQuestion");
  //     if (getQuestion.value === data.questionOne) {
  //       console.log("Verdadeiro");
  //       if (step + 1 !== questions.length) {
  //         setStep(step + 1);
  //       } else {
  //         navigation.navigate("Home");
  //       }
  //     } else {
  //       console.log("Falso");
  //       if (Platform.OS === "ios") {
  //         Alert.alert("Opção errada! Tente novamente.");
  //       } else {
  //         Alert.alert(
  //           "Opção errada",
  //           "Gostaria de consultar material de apoio?",
  //           [
  //             {
  //               text: "Consultar",
  //               onPress: () => navigation.navigate("Home"),
  //             },
  //             {
  //               text: "Agora não",
  //               onPress: () => console.log("Cancel Pressed"),
  //             },
  //           ]
  //         );
  //       }
  //     }
  //   }

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
      <View style={styles.questions}>
        <View style={styles.questionBox}>
          <RadioButton
            items={questions[step].answers}
            label={questions[step].label}
            changeValue={(value) => {
              if (step === 0) {
                setData({ ...data, questionOne: value });
              } else if (step === 1) {
                setData({ ...data, questionTwo: value });
              } else if (step === 2) {
                setData({ ...data, questionThree: value });
              }
            }}
          />
        </View>
        <View style={styles.footer}>
          <ButtonQuestions
            text="VOLTAR"
            left
            handler={() => {
              navigation.navigate("DefineClass");
            }}
          />
          <ButtonQuestions
            text={step + 1 !== questions.length ? "PRÓXIMO" : "TERMINAR"}
            handler={
              step + 1 !== questions.length
                ? () => {
                    setStep(step + 1);
                  }
                : () => {
                    navigation.navigate("Home");
                  }
            }
          />
        </View>
      </View>
    </View>
  );
}
