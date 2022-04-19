import React, { useEffect } from "react";
import { FlatList, Actionsheet, useDisclose, Image } from "native-base";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import AppScreen from "../component/AppScreen";
import reomData from "../data/recomandation";
import Recomandation from "../component/Recomandation";

import { AntDesign } from "@expo/vector-icons";

import {
  VStack,
  Input,
  Icon,
  NativeBaseProvider,
  Center,
  Box,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import productsData from "../data/AllProducts";
import MenuCard from "../component/MenuCard";
import ProfileRec from "../component/ProfileRec";

const Profile = () => {
  const [value, setValue] = React.useState(null);
  const [totalD, setTotalD] = React.useState(productsData);
  const handleChange = (text) => setValue(text);

  const filteredData = value
    ? productsData.filter(function (item) {
        // console.log(item, "item");
        return item?.title?.includes(value);
      })
    : productsData;

  const searchHandler = () => {
    setTotalD(filteredData);
  };

  const { isOpen, onOpen, onClose } = useDisclose();

  // console.log("filteredData", filteredData);
  useEffect(() => {}, [filteredData]);

  return (
    <AppScreen>
      <ScrollView
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.profile}>
          <Image
            style={styles.recImg}
            source={require("./../assets/pic/unsplash_p_kICQCOM4s.png")}
            resizeMode="contain"
            alt="image"
          />
          <Text style={styles.bestText}>Md Nahid Murad Abir</Text>
        </View>

        {/* Best rating  */}
        {!value && (
          <View>
            <Text style={styles.bestText}>Your Recommended</Text>
            <View>
              <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                data={reomData}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                renderItem={({ item }) => <ProfileRec data={item} />}
              />
            </View>
          </View>
        )}
      </ScrollView>
    </AppScreen>
  );
};

export default Profile;

const styles = StyleSheet.create({
  topText: {
    color: "#fff",
    fontWeight: "bold",
    // textAlignVertical: "end",
  },
  bestText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    // paddingVertical: 20,
    paddingHorizontal: 20,
  },
  submit: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    color: "#fff",
    backgroundColor: "#4E627C",
    // border: "1px solid #4E627C",

    fontSize: 30,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 15,
    alignItems: "center",
    width: 160,
  },
  profile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  recImg: {
    borderRadius: 50,
    marginVertical: 20,
  },
});
