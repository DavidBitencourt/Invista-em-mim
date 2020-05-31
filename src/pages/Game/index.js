import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View } from "react-native";
import Button from "../../components/Button";
import RadioButton from "../../components/RadioButton";
import { styles } from "./styles";

export default function Game() {
  const navigation = useNavigation();
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    questionOne: "",
    questionTwo: "",
    questionThree: "",
  });

  //   useEffect(() => {
  //     console.log(data);
  //   }, [data]);

  const questionOne = [
    {
      label: "Juro nominal",
      value: false,
    },
    {
      label: "Custo de oportunidade",
      value: false,
    },
    {
      label: "Juro Real",
      value: true,
    },
    {
      label: "Inflação",
      value: false,
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
      value: "(X)",
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

  //   function validateQuestions() {
  //     if (Platform.OS !== "ios") {
  //       Alert.alert("Opção errada", "Gostaria de consultar material de apoio?", [
  //         {
  //           text: "Consultar",
  //           onPress: () => console.log("Ask me later pressed"),
  //         },
  //         {
  //           text: "Agora não",
  //           onPress: () => console.log("Cancel Pressed"),
  //         },
  //       ]);
  //     } else {
  //       Alert.alert("Opção errada! Tente novamente.");
  //     }
  //   }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Game</Text>
      </View>
      <View style={styles.questions}>
        <RadioButton
          items={questions[step].answers}
          label={questions[step].label}
          changeValue={(value) => setData({ ...data, level: value })}
        />
      </View>
      <View style={styles.footer}>
        <Button
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
  );
}
