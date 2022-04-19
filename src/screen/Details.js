import {
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Actionsheet, useDisclose } from "native-base";

import AntDesigns from "react-native-vector-icons/AntDesign";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const image2 = {
  uri: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
};

const Details = ({ navigation }) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <View style={styles.imageWrap}>
      <ScrollView
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        <Text>Details</Text>
        <View style={styles.headerview}>
          <Text
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.location}
          >
            <AntDesigns name="back" color="#000" size={20} />
          </Text>
          <Image
            style={styles.logo}
            source={require("../assets/pic/unsplash_tHkJAMcO3QE.png")}
          />
        </View>
        <View style={styles.banner}>
          <ImageBackground
            source={require("../assets/pic/unsplash_Goc3UUFY8lM.png")}
            imageStyle={{ borderRadius: 6 }}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Text style={styles.name}>Hill Rose</Text>
            <Text>Sukabumi, West Java</Text>
          </ImageBackground>
        </View>

        <View style={styles.details}>
          <View style={styles.header}>
            <Text style={styles.name}>Ayana Home Stay With Family</Text>
            <Text style={styles.des}>Old Sukabumi Hwy No 12</Text>
          </View>
          <View style={styles.logos}>
            <Text style={styles.review}>
              <AntDesign name="star" size={24} color="#8080D8" /> 4.9
            </Text>
            <Text style={styles.phone}>
              <MaterialIcons name="phone-in-talk" size={24} color="#27AE60" />
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.heade2}>Introduction</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu
            quam laoreet aliquet amet, ipsum mi. In molestie fames mollis
            feugiat ultricies ultrices integer in. Vulputate
          </Text>
        </View>
        <View>
          <Text style={styles.heade2}>Ultilities</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu
            quam laoreet aliquet amet, ipsum mi. In molestie fames mollis
            feugiat ultricies ultrices integer in. Vulputate
          </Text>
        </View>
        {["School", "Hospital", "Market", "Airport", "Golf", "Embassy"].map(
          (i) => (
            <View style={styles.option}>
              <Text style={styles.heade2}>
                <FontAwesome5
                  name="building"
                  style={{ margin: 10 }}
                  size={24}
                  color="black"
                />
                {i}
              </Text>

              <Text>3 Minutes</Text>
            </View>
          )
        )}

        <View>
          <Text style={styles.heade2}>Description</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu
            quam laoreet aliquet amet, ipsum mi. In molestie fames mollis
            feugiat ultricies ultrices integer in. Vulputate
          </Text>
        </View>

        {["2 Bedroom", "2 Bedroom", "1200 SQFT", "Flat"].map((i) => (
          <View style={styles.option}>
            <Text style={styles.heade2}>
              <FontAwesome
                name="stack-exchange"
                style={{ margin: 10 }}
                size={24}
                color="black"
              />
              {i}
            </Text>

            <Text>3 Minutes</Text>
          </View>
        ))}

        <View>
          <Text style={styles.heade2}>Call Center</Text>
        </View>

        {["+11 22 33 44 55", "Example@xample.com", "Realestate UA No 213"].map(
          (i) => (
            <View style={styles.option2}>
              <Text style={styles.heade2}>
                <FontAwesome
                  name="stack-exchange"
                  style={{ margin: 10 }}
                  size={24}
                  color="black"
                />
                {i}
              </Text>

              <Text>3 Minutes</Text>
            </View>
          )
        )}

        <TouchableOpacity style={styles.submit} onPress={onOpen}>
          <FontAwesome
            name="stack-exchange"
            style={{ margin: 10 }}
            size={24}
            color="white"
          />
          <Text style={{ color: "#fff", fontSize: 20 }}> Apply for Buy</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* bottom side bar  */}
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <ScrollView>
            <View style={styles.banner}>
              <ImageBackground
                source={image2}
                imageStyle={{ borderRadius: 6 }}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Text style={styles.name}>Hill Rose</Text>
                <Text>Sukabumi, West Java</Text>
              </ImageBackground>
            </View>

            <View style={styles.details}>
              <View style={styles.header}>
                <Text style={styles.name}>Ayana Home Stay With Family</Text>
                <Text style={styles.des}>Old Sukabumi Hwy No 12</Text>
              </View>
              <View style={styles.logos}>
                <Text style={styles.review}>
                  <AntDesign name="star" size={24} color="#8080D8" /> 4.9
                </Text>
                <Text style={styles.phone}>
                  <MaterialIcons
                    name="phone-in-talk"
                    size={24}
                    color="#27AE60"
                  />
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.submit} onPress={onClose}>
              <FontAwesome
                name="stack-exchange"
                style={{ margin: 10 }}
                size={24}
                color="white"
              />
              <Text> Done</Text>
            </TouchableOpacity>
          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>

      {/* bottom side bar  */}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
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
  imageWrap: {
    backgroundColor: "white",
    padding: 20,
  },
  scrollView: {
    backgroundColor: "white",
  },
  topText: {
    color: "#fff",
    fontWeight: "bold",
    // textAlignVertical: "end",
  },
  banner: {
    width: "100%",
    // margin: "0",
    height: 650,
    alignContent: "center",
  },
  details: {
    width: "100%",
    alignContent: "center",
    paddingVertical: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 24,
    lineHeight: 34,
    width: "60%",

    // letterSpacing: 0.02,
    fontWeight: "bold",
    /* text */

    color: "rgba(27, 32, 40, 0.8)",
  },
  heade2: {
    fontSize: 20,
    lineHeight: 19,
    /* identical to box height */

    /* text */
    fontWeight: "bold",
    color: "rgba(27, 32, 40, 0.8)",
    marginVertical: 15,
  },
  des: {
    fontSize: 14,
    lineHeight: 16,
    /* identical to box height */

    /* text*/
    marginTop: 20,

    color: "rgba(27, 32, 40, 0.8)",
  },
  logos: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  phone: {
    backgroundColor: "#ccf7d2",
    width: 44,
    height: 44,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },
  review: {
    backgroundColor: "#cfcfff",
    width: 44,
    height: 44,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },
  option: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    backgroundColor: "#ebebeb",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 15,
    alignItems: "center",
  },
  option2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    backgroundColor: "#fff",
    // border: "1px solid #666",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 15,
    alignItems: "center",
  },
  submit: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    backgroundColor: "#4E627C",
    // border: "1px solid #4E627C",

    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 15,
    alignItems: "center",
  },
  submit: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    color: "#fff",
    backgroundColor: "#4E627C",
    // border: "1px solid #4E627C",

    fontSize: 25,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 15,
    alignItems: "center",
  },
});
