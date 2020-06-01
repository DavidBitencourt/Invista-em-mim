import { MaterialIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
export default function ButtonQuestions({
  text,
  handler,
  disabled,
  width,
  left,
}) {
  ButtonQuestions.defaultProps = {
    text: "",
    handler: () => {},
    disabled: false,
    width: null,
    left: false,
  };

  ButtonQuestions.propTypes = {
    text: PropTypes.string,
    handler: PropTypes.func,
    disabled: PropTypes.bool,
    width: PropTypes.number,
    left: PropTypes.bool,
  };

  return (
    <View
      style={{
        width: "55%",
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        bottom: 25,
      }}
    >
      <TouchableOpacity
        onPress={() => handler()}
        canceled={disabled}
        width={width}
        style={styles.button}
      >
        {left && (
          <MaterialIcons name="navigate-before" size={25} color="#F58220" />
        )}
        <Text style={styles.textButton}>{text}</Text>
        {!left && (
          <MaterialIcons name="navigate-next" size={25} color="#F58220" />
        )}
      </TouchableOpacity>
    </View>
  );
}
