import { StyleSheet } from "react-native";
import { systemWeights } from "react-native-typography";

export const styles = StyleSheet.create({
  button: {
    height: 40,
    width: "100%",
    borderRadius: 50,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
    top: 20,
  },
  textButton: {
    ...systemWeights.bold,
    fontSize: 18,
    color: "#F58220",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
  },
});
