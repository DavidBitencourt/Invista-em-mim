import { StyleSheet } from "react-native";
import { systemWeights } from "react-native-typography";
export const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    ...systemWeights.bold,
    fontSize: 13,
    color: "#000000",
    textAlign: "center",
  },
});
