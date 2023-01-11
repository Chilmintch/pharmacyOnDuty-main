import * as React from "react";
import { Button } from "react-native-paper";

const CustomButton = ({ title, onPress }) => (
  <Button
    mode="contained"
    onPress={onPress}
    style={{ width: "90%", marginHorizontal: "5%", marginVertical:'2%' }}
  >
    {title}
  </Button>
);

export default CustomButton;
