import React, { useState } from "react";
import { Text, View } from "react-native";
import RadioForm from "react-native-simple-radio-button";
import { styles } from "./styles";
export default function RadioButton({ items, label, changeValue }) {
  const [selectedValue, setSelectedValue] = useState(items[0].value);
  return (
    <View style={styles.container}>
      <Text style={styles.textQuestion}>{label}</Text>
      <RadioForm
        style={styles.radioButtom}
        radio_props={items}
        initial={selectedValue}
        onPress={(value) => {
          changeValue(value);
        }}
        buttonColor="#F58220"
      />
    </View>
  );
}
