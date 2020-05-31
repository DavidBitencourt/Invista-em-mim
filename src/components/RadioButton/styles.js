import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { systemWeights } from "react-native-typography";
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: hp("20%"),
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
    marginTop: 10,
  },
  textQuestion: {
    ...systemWeights.regular,
    fontSize: 18,
    marginTop: hp("5%"),
  },
  radioButtom: {
    width: "80%",
    height: "100%",
    fontWeight: "bold",
    marginTop: hp("2%"),
    margin: 10,
  },
});
