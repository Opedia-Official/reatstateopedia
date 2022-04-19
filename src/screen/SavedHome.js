import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import productsData from "../data/AllProducts";
import Recomandation from "../component/Recomandation";

const SavedHome = () => {
  return (
    <View>
      <Text>Save your dream house</Text>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
          data={productsData}
          // ListHeaderComponent={() => (
          //   <HeaderComponent navigation={navigation} />
          // )}
          // ListFooterComponent={() => <FooterComponent />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => <Recomandation data={item} />}
        />
      </View>
    </View>
  );
};

export default SavedHome;

const styles = StyleSheet.create({});
