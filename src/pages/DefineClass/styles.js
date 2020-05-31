import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("100%"),
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: wp("100%"),
    height: hp("15%"),
    alignItems: "center",
    justifyContent: "center",
  },
  containerSelects: {
    width: wp("80%"),
    height: hp("80%"),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    borderWidth: 0.3,
    borderColor: "#000000",
  },
  footer: {
    width: "100%",
    height: hp("15%"),
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});