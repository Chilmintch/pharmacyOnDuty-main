import * as React from "react";
import { TextInput } from "react-native-paper";

const CustomInput = ({ value, onChangeText }) => {
  return (
    <TextInput
      mode="outlined"
      label="Eczane Ara"
      value={value}
      onChangeText={onChangeText}
      style={{ width: "95%" }}
    />
  );
};

export default CustomInput;
