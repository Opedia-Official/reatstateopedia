import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Box, Button, Heading, Image, Text } from "native-base";
import { Dimensions, StyleSheet } from "react-native";

const Recomandation = ({ data }) => {
  const navigation = useNavigation();
  // console.log({ data });
  return (
    <Button
      // style={{margin:"10px", border: 'none',background: data.color  }}
      bg="#fff"
      m="2"
      w="45%"
      borderRadius="10px"
      alignItems="center"
      justifyContent="center"
      onPress={() => navigation.navigate("details1", { data })}
    >
      <Box w="100%" p="2" alignItems="center">
        <Image source={data.image} size="xl" resizeMode="contain" alt="image" />
        {/* <Heading ResponsiveValue="container" textAlign="center" fontSize="lg" bold>
          {data.title}
        </Heading> */}
        <Text p={2} style={styles.cat}>
          A {data.category}
        </Text>
        <Text
          alignItems="center"
          textAlign="left"
          fontSize="lg"
          color="black"
          my="2"
        >
          {data.title}
        </Text>
        <Text style={styles.price}> {data.price}</Text>
      </Box>
    </Button>
  );
};

export default Recomandation;

const styles = StyleSheet.create({
  cat: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 12,
    color: "#4E627C",
  },
  price: {
    fontSize: 18,
    lineHeight: 16,
    color: "#4C84B4",
    fontWeight: "bold",
  },
});
