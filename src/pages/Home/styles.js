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
    height: hp("40%"),
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logo: {
    width: wp("100%"),
    height: hp("40%"),
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: wp("10%"),
    fontWeight: "bold",
  },
  footer: {
    width: wp("100%"),
    height: hp("20%"),
    alignItems: "center",
    justifyContent: "center",
  },
});
