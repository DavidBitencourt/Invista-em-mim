import React from "react";
import { YellowBox } from "react-native";
import Routes from "./src/routes";
YellowBox.ignoreWarnings(["Warning:"]);
YellowBox.ignoreWarnings(["Expected style"]);

export default function App() {
  return <Routes />;
}
