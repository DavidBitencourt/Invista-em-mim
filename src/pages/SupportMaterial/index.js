import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { WebView } from "react-native-webview";
import backOrange from "../../assets/backOrange.png";
import backOrangeWhite from "../../assets/backOrangeWhite.png";
import ButtonQuestions from "../../components/ButtonQuestions";
import { styles } from "./styles";
export default function SupportMaterial() {
  const navigation = useNavigation();
  const route = useRoute();

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
      <View style={styles.containerSupportMaterial}>
        <Text style={styles.textTitle}>Introdução</Text>
        <View style={styles.boxDetail}>
          <Text style={styles.textAuthor}>David Bitencourt, </Text>
          <Text style={styles.textDate}>31-05-2020</Text>
        </View>
        <View style={styles.boxMaterial}>
          <FlatList
            data={[{ id: 1 }]}
            keyExtractor={(article) => article.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: article, index }) => (
              <>
                <Text style={styles.textArticle} key={index}>
                  Nos anos 1990, a economia brasileira passou por uma mudança
                  fundamental em termos de inserção no comércio internacional.
                  Com o processo de abertura do mercado interno para o setor
                  externo, as empresas nacionais, frente à concorrência, foram
                  obrigadas a passar por um processo de reestruturação tanto dos
                  seus procedimentos produtivos quanto nos procedimentos
                  administrativos. Com a abertura comercial e financeira, o
                  Brasil ficou mais suscetível às intempéries da economia
                  internacional e aos fluxos internacionais de negócios, ainda
                  mais em 1999 com a mudança do regime cambial para o câmbio
                  flutuante. O processo de globalização, principalmente a
                  globalização das finanças, forçou as empresas brasileiras a
                  repensarem a sua gestão financeira. Independentemente do
                  segmento de atuação da empresa, cada vez mais, a
                  financeirização mundial, obriga as empresas as a pensar sua
                  gestão financeira. Partindo dessa ideia, inicialmente, é feita
                  uma explanação da importância da gestão financeira. Depois,
                  descreve-se sobre algumas ferramentas que podem ser usadas
                  para que pela gestão, com intuito de melhor controlar,
                  analisar e executar o trabalho do gestor. Em seguida, tratamos
                  da analise e decisão a partir das ferramentas de gestão
                  analisadas. Por fim, as considerações finais.{" "}
                </Text>
                {route.name === "SupportMaterial" && (
                  <WebView
                    style={{ marginTop: 20, width: 320, height: 230 }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: "https://youtu.be/W2N_TqJzFns" }}
                    onNavigationStateChange={(status) => {
                      console.log(status);
                    }}
                  />
                )}
              </>
            )}
          />
        </View>
        <View style={styles.boxButton}>
          <ButtonQuestions
            text="Voltar"
            left
            handler={() => {
              navigation.navigate("DashUser");
            }}
          />
          <ButtonQuestions
            text="Iniciar Curso"
            handler={() => {
              navigation.navigate("Game");
            }}
          />
        </View>
      </View>
    </View>
  );
}
