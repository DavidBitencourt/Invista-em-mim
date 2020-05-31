import { LinearGradient } from "expo-linear-gradient";
import PropTypes from "prop-types";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
export default function Button({ text, handler, disabled, width }) {
  Button.defaultProps = {
    text: "",
    handler: () => {},
    disabled: false,
    width: null,
  };

  Button.propTypes = {
    text: PropTypes.string,
    handler: PropTypes.func,
    disabled: PropTypes.bool,
    width: PropTypes.number,
  };

  return (
    <LinearGradient
      colors={["#F58220", "#FFF134"]}
      style={{
        width: "60%",
        height: 60,
        borderRadius: 30,
        alignItems: "center",
      }}
      start={[0, 0]}
      end={[1, 1]}
    >
      <TouchableOpacity
        onPress={() => handler()}
        canceled={disabled}
        width={width}
        style={styles.button}
      >
        <Text style={styles.textButton}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
