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
  logo: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    flexDirection: "row",
  },
  containerDash: {
    width: wp("85%"),
    height: hp("85%"),
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    borderWidth: 0.3,
    borderColor: "#000000",
    padding: 20,
    position: "relative",
    bottom: hp("20%"),
    zIndex: 55555,
  },
  boxButton: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
