import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import Toast from "react-native-root-toast";
import { styles } from "./styles";

export default function ToastShow({ text, visibleToast }) {
  const [visible, setVisible] = useState(visibleToast);

  useEffect(() => {
    setVisible(visibleToast);
  }, [visibleToast]);

  return (
    <Toast
      visible={visible}
      opacity={1}
      position={-40}
      shadow={true}
      animation={true}
      style={{ width: 500 }}
      width={500}
    >
      <Text style={styles.toast}>{text}</Text>
    </Toast>
  );
}
