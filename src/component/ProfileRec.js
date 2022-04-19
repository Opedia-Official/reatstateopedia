import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Box, Button, Heading, Image, Text } from "native-base";
import { Dimensions, StyleSheet } from "react-native";

const ProfileRec = ({ data }) => {
  const navigation = useNavigation();
  return (
    <Button
      bg="#fff"
      m="2"
      w="45%"
      borderRadius="18px"
      alignItems="center"
      justifyContent="center"
      onPress={() => navigation.navigate("details1", { data })}
    >
      <Box w="100%" p="2" alignItems="center">
        <Image
          style={styles.recImg}
          source={data.image}
          resizeMode="contain"
          alt="image"
        />

        <Text style={styles.cat}> A {data.category}</Text>
      </Box>
    </Button>
  );
};

export default ProfileRec;

const styles = StyleSheet.create({
  cat: {
    fontSize: 10,
    lineHeight: 12,
    color: "#4E627C",

    opacity: 0.8,
  },
  recImg: {
    borderRadius: 5,
  },
});
