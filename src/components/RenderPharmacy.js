import React from "react";
import { Card, Text } from "react-native-paper";

const RenderPharmacy = ({ item }) => {
  return (
    <Card
      style={{
        marginVertical: "1%",
        borderWidth: "2px",
        borderColor: "purple",
      }}
    >
      <Card.Content>
        <Text variant="titleLarge">{item.EczaneAdi}</Text>
        <Text variant="titleMedium">{item.ilce}</Text>
        <Text variant="bodyMedium">{item.Adresi}</Text>
        <Text variant="bodyMedium">{item.Telefon}</Text>
      </Card.Content>
    </Card>
  );
};

export default RenderPharmacy;

/*

*/
