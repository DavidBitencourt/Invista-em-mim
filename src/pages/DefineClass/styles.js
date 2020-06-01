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
    justifyContent: "center",
  },
  containerSelects: {
    width: wp("85%"),
    height: hp("85%"),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    borderWidth: 0.3,
    borderColor: "#000000",
    padding: 20,
    position: "relative",
    bottom: hp("20%"),
    zIndex: 55555,
  },
  footer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    flexDirection: "row",
  },
});
