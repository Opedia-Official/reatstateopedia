import { useNavigation } from "@react-navigation/native";
import { Box, Button, Heading, Image, Text } from "native-base";
import React from "react";

// icosn
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MenuCard = ({ data, noIcon }) => {
  const navigation = useNavigation();
  // console.log({ data });
  return (
    <Button
      style={{
        margin: 10,
        width: 180,
        // maxWidth: "100%",
        border: "none",
        backgroundColor: "#F6F9FB",
        borderRadius: 10,
      }}
      alignItems="center"
      justifyContent="center"
      onPress={() => navigation.navigate("SubScreen", { data })}
    >
      <Box w="100%" p="2" alignItems="center">
        {/* <Image source={data.image} size="xl" resizeMode="contain" alt="image" /> */}

        <Text
          alignItems="center"
          textAlign="center"
          fontSize="lg"
          fontWeight="bold"
          color="#4C84B4"
          my="1"
          mx="2"

          // p='1'
        >
          {noIcon && (
            <MaterialCommunityIcons
              name="office-building"
              size={24}
              color="#4C84B4"
            />
          )}
          {data?.title}
        </Text>
      </Box>
    </Button>
  );
};

export default MenuCard;
