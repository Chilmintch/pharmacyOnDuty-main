import { View, Linking, SafeAreaView } from "react-native";
import CustomButton from "../components/CustomButton";
import React from "react";
import { Card, Text } from "react-native-paper";

const DetailsScreen = ({ route, navigation }) => {
  const { param } = route.params;

  return (
    <SafeAreaView>
      <Card style={{ marginVertical: "1%" }}>

        <Card.Content>
          <Text variant="displayMedium" style={{ textAlign: "center" }}>
            {param.item.EczaneAdi}
          </Text>
          <Text variant="headlineLarge" style={{ textAlign: "center" }}>
            {param.item.ilce}
          </Text>
          <Text
            variant="headlineSmall"
            style={{ textAlign: "center", marginVertical: "10%" }}
          >
            {param.item.Telefon}
          </Text>
          <Text
            variant="bodyLarge"
            style={{ textAlign: "center", marginVertical: "10%" }}
          >
            {param.item.Adresi}
          </Text>
        </Card.Content>
          <CustomButton
            title={"Ara"}
            onPress={() => Linking.openURL(`tel:${param.item.Telefon}`)}
            name={`phone-outline`}
          />
          <CustomButton
            title={"Konum"}
            onPress={() =>
              Linking.openURL(
                "https://www.google.com/maps/search/?api=1&query=" +
                  param.item.latitude +
                  "," +
                  param.item.longitude
              )
            }
            name={`map-outline`}

          />
          <CustomButton
            title={"Yol Tarifi"}
            onPress={() =>
              Linking.openURL(
                "https://www.google.com/maps/dir/?api=1&destination=" +
                  param.item.latitude +
                  "," +
                  param.item.longitude
              )
            }
            name={`map-marker-path`}

          />
      </Card>
    </SafeAreaView>
  );
};

export default DetailsScreen;

/*
    <View>
      <Text>{JSON.stringify(param.item.EczaneAdi)}</Text>
    </View>
*/
