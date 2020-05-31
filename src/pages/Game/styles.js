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
  questions: {
    width: wp("100%"),
    height: hp("70%"),
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    width: wp("100%"),
    height: hp("15%"),
    alignItems: "center",
    justifyContent: "center",
  },
});
