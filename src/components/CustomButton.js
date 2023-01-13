import * as React from "react";
import { Button } from "react-native-paper";
import { View ,StyleSheet, Text} from "react-native";

const CustomButton = ({ title, onPress, name  }) => (
  <View >
  <Button
    mode="contained"
    onPress={onPress}
    icon={name}
    style={{ width: "90%", marginHorizontal: "5%", marginVertical:'2%' }}
  >
    <Text>{title}</Text>
  </Button>
  </View>
);

export default CustomButton;


const styles = StyleSheet.create({

})