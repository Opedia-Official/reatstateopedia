import React from "react";
import {
  Text,
  VStack,
  FlatList,
  View,
  // ScrollView,
} from "native-base";

import { ScrollView, ImageBackground, Image } from "react-native";

import { Dimensions, StyleSheet } from "react-native";
import AppScreen from "../component/AppScreen";
import MenuCard from "../component/MenuCard";
import Recomandation from "../component/Recomandation";
import reomData from "../data/recomandation";

import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const menuData = [
  { id: "12", title: "Condo" },
  { id: "15", title: "Resort" },
  { id: "158", title: "Office" },
  { id: "112", title: "Urban" },
];

const HomeScreen = ({ navigation }) => {
  return (
    <AppScreen>
      <View style={styles.headerview}>
        <Text style={styles.location}>
          <SimpleLineIcons name="location-pin" color="#000" size={20} /> Dhaka
        </Text>
        <Image
          style={styles.logo}
          source={require("../assets/pic/unsplash_tHkJAMcO3QE.png")}
        />
      </View>
      <ScrollView
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.banner}>
          <ImageBackground
            source={require("../assets/pic/unsplash_Goc3UUFY8lM.png")}
            imageStyle={{ borderRadius: 24 }}
            style={styles.imageshaow}
          >
            <View style={styles.backText}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  color: "#FFFFFF",
                }}
              >
                Hill Rose II
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                Sukabumi, West Java
              </Text>
            </View>
          </ImageBackground>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
          data={menuData}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => <MenuCard data={item} />}
        />
        <Text
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            fontSize: 16,
            fontWeight: "bold",
            color: "#666",
          }}
        >
          Recomandations
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
          data={reomData}
          // ListHeaderComponent={() => (
          //   <HeaderComponent navigation={navigation} />
          // )}
          // ListFooterComponent={() => <FooterComponent />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => <Recomandation data={item} />}
        />
        <HeaderComponent />
      </ScrollView>
    </AppScreen>
  );
};

export default HomeScreen;

const HeaderComponent = ({ navigation }) => {
  return (
    <VStack>
      <View
        style={{
          height: 150,
          borderRadius: 20,
        }}
      >
        <ImageBackground
          source={require("../assets/pic/unsplash_tHkJAMcO3QE.png")}
          imageStyle={{ borderRadius: 6 }}
          style={{
            // width: 100,
            margin: 10,
            height: 134,
            borderRadius: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Text style={styles.topText}>Top 10 Condo</Text>
        </ImageBackground>
      </View>
      {/* <br /> */}
      <View
        style={{
          marginVertical: 6,

          borderRadius: 20,
        }}
      >
        <ImageBackground
          source={require("../assets/pic/unsplash_oyxsG2Lh_uA-1.png")}
          imageStyle={{ borderRadius: 6 }}
          style={{
            // width: 100,
            margin: 10,
            height: 134,
            borderRadius: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Text style={styles.topText}>Top 10 Condo1</Text>
        </ImageBackground>
      </View>
    </VStack>
  );
};

const styles = StyleSheet.create({
  imageWrap: {
    width: "90%",
  },
  headerview: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  location: {
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 10,

    fontSize: 16,
    lineHeight: 14,
    fontWeight: "bold",
    color: "rgba(27, 32, 40, 0.8)",
  },
  logo: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginVertical: 15,
  },
  topText: {
    color: "#fff",
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  backText: {
    color: "#fff",
    fontWeight: "bold",
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  banner: {
    width: "100%",
    // margin: "0",
    height: 650,
    alignContent: "center",
    padding: 20,
  },

  imageshaow: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",

    shadowColor: "#470000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 1,
  },
});
