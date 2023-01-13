import React, { useState, useEffect } from "react";
import { TouchableHighlight, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../components/CustomInput";
import RenderPharmacy from "../components/RenderPharmacy";

var done = false;
function App({ navigation }) {
  const [pharmacies, setPharmacies] = useState([]);
  const [ilce, setIlce] = useState("");

  useEffect(() => {
    fetchData();
  },[]);

  async function fetchData() {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        setPharmacies(JSON.parse(this.responseText).data);
        done = true;
      }
    });

    xhr.open("GET", "https://www.nosyapi.com/apiv2/pharmacy?city=edirne");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader(
      "Authorization",
      "Bearer dL5kGnD4l1Q6Id97y3r5o9GRWhuLG5HeYZE2DVBkhGGXd70qgWPWCoa3JaZe"
    );

    if (!done) {
      console.log("api request!");
      xhr.send(data);
    }
  }

  const renderPharmacy = ({ item }) => (
    <TouchableHighlight
      onPress={() =>
        navigation.navigate("DetailScreen", {
          param: { item },
        })
      }
    >
      <RenderPharmacy item={item} />
    </TouchableHighlight>
  );
  return (
    <SafeAreaView style={{ alignItems: "center",paddingHorizontal: 8, marginBottom : 60 }}>
      <CustomInput value={ilce} onChangeText={setIlce} />
      <FlatList
      showsVerticalScrollIndicator={false}
        data={pharmacies.filter((x) =>
          x.ilce.toLowerCase().includes(ilce.toLowerCase())
        )}
        renderItem={renderPharmacy}
        keyExtractor={() => Math.random().toString()}
      />
    </SafeAreaView>
  );
}
export default App;
