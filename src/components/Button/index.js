import { LinearGradient } from "expo-linear-gradient";
import PropTypes from "prop-types";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
export default function Button({
  text,
  handler,
  disabled,
  width,
  normalButton,
}) {
  Button.defaultProps = {
    text: "",
    handler: () => {},
    disabled: false,
    width: null,
    normalButton: false,
  };

  Button.propTypes = {
    text: PropTypes.string,
    handler: PropTypes.func,
    disabled: PropTypes.bool,
    width: PropTypes.number,
    normalButton: PropTypes.bool,
  };

  return (
    <LinearGradient
      colors={normalButton ? ["#FFFFFF", "#FFFFFF"] : ["#F58220", "#FFF134"]}
      style={{
        width: "65%",
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        borderWidth: 2,
        borderColor: normalButton ? "#F58220" : "#000000",
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
