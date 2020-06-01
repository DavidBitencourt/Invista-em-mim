import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { systemWeights } from "react-native-typography";
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
  containerSupportMaterial: {
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
  textTitle: {
    ...systemWeights.bold,
    fontSize: 25,
    textAlign: "center",
  },
  boxDetail: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
  },
  textAuthor: {
    ...systemWeights.light,
    fontSize: 20,
    textAlign: "center",
  },
  textDate: {
    ...systemWeights.light,
    fontSize: 20,
    textAlign: "center",
  },
  boxMaterial: {
    width: "100%",
    height: "75%",
    marginTop: 20,
  },
  textArticle: {
    ...systemWeights.light,
    fontSize: 17,
    textAlign: "left",
  },
  boxButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    flexDirection: "row",
  },
});
