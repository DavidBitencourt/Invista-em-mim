import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: hp("20%"),
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
    marginTop: 15,
  },
  textQuestion: {
    fontSize: 20,
    fontWeight: "bold",
  },
  radioButtom: {
    width: "100%",
    fontWeight: "bold",
    marginTop: 10,
  },
});
