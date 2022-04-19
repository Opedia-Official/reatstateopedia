import React, { useEffect } from "react";
import { FlatList, Actionsheet, useDisclose } from "native-base";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import AppScreen from "../component/AppScreen";
import reomData from "../data/recomandation";
import Recomandation from "../component/Recomandation";

import { AntDesign } from "@expo/vector-icons";

import { VStack, Input, Icon } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import productsData from "../data/AllProducts";
import MenuCard from "../component/MenuCard";
import tagData from "../data/tag";

const image = {
  uri: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
};

const Search = () => {
  const [value, setValue] = React.useState(null);
  const [totalD, setTotalD] = React.useState(productsData);
  const handleChange = (text) => setValue(text);

  const filteredData = value
    ? productsData.filter(function (item) {
        return item?.title?.includes(value);
      })
    : productsData;

  const searchHandler = () => {
    setTotalD(filteredData);
  };

  const { isOpen, onOpen, onClose } = useDisclose();

  useEffect(() => {}, [filteredData]);

  return (
    <AppScreen>
      {/* search input */}
      <VStack space={8} width="90%" alignItems="center" marginVertical={9}>
        <VStack width="98%" space={2} direction="row" alignItems="center">
          <Input
            placeholder="Search People & Places"
            bg="#fff"
            width="100%"
            borderRadius={10}
            py={3}
            px={3}
            value={value}
            onChangeText={handleChange}
            fontSize={14}
            _web={{
              _focus: {
                borderColor: "#fff",
                style: {
                  boxShadow: "none",
                },
              },
            }}
            InputRightElement={
              <Icon
                // size="sm"
                m={2}
                size={6}
                color="gray.400"
                as={<MaterialIcons name="mic" />}
              />
            }
          />
          {value ? (
            <Text onPress={searchHandler}>
              <AntDesign name="search1" size={24} color="black" />
            </Text>
          ) : (
            <TouchableOpacity onPress={onOpen}>
              <Ionicons name="md-filter" size={30} color="black" />
            </TouchableOpacity>
          )}
        </VStack>
      </VStack>

      <ScrollView
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        {/* suggestiontag */}
        <FlatList
          horizontal
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
          data={tagData}
          showsHorizontalScrollIndicator={false}
          // ListHeaderComponent={() => (
          //   <HeaderComponent navigation={navigation} />
          // )}
          // ListFooterComponent={() => <FooterComponent />}
          keyExtractor={(item) => item.id.toString()}
          // numColumns={2}
          renderItem={({ item }) => <MenuCard noIcon={false} data={item} />}
        />

        {/* banner */}
        {!value && (
          <View
            style={{
              borderRadius: 20,
              marginVertical: 10,
            }}
          >
            <ImageBackground
              source={image}
              imageStyle={{ borderRadius: 6 }}
              style={{
                margin: 20,
                height: 180,
                borderRadius: 20,
              }}
            >
              <Text style={styles.topText}>Top 10 Condo</Text>
            </ImageBackground>
          </View>
        )}
        {/* Best rating  */}
        {!value && (
          <View>
            <Text style={styles.bestText}>Best Rating</Text>

            <View>
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
            </View>
          </View>
        )}

        {/* searched product */}
        <Text style={styles.bestText}>
          {totalD.length === 0 && "No Data Found"}
        </Text>
        {totalD.length !== 0 && (
          <View>
            <Text style={styles.bestText}>Filtered Items:</Text>

            <View>
              <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                data={totalD}
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
        )}
      </ScrollView>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          {/* Location */}
          <ScrollView>
            <Text style={styles.bestText}>Location</Text>
            <FlatList
              horizontal
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              data={reomData}
              showsHorizontalScrollIndicator={false}
              // ListHeaderComponent={() => (
              //   <HeaderComponent navigation={navigation} />
              // )}
              // ListFooterComponent={() => <FooterComponent />}
              keyExtractor={(item) => item.id.toString()}
              // numColumns={2}
              renderItem={({ item }) => <MenuCard data={item} />}
            />
            {/* Payment Method */}
            <Text style={styles.bestText}>Payment Method</Text>
            <FlatList
              horizontal
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              data={reomData}
              showsHorizontalScrollIndicator={false}
              // ListHeaderComponent={() => (
              //   <HeaderComponent navigation={navigation} />
              // )}
              // ListFooterComponent={() => <FooterComponent />}
              keyExtractor={(item) => item.id.toString()}
              // numColumns={2}
              renderItem={({ item }) => <MenuCard data={item} />}
            />
            {/* Price Monthly */}
            <Text style={styles.bestText}>Price Monthly</Text>
            <FlatList
              horizontal
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              data={reomData}
              showsHorizontalScrollIndicator={false}
              // ListHeaderComponent={() => (
              //   <HeaderComponent navigation={navigation} />
              // )}
              // ListFooterComponent={() => <FooterComponent />}
              keyExtractor={(item) => item.id.toString()}
              // numColumns={2}
              renderItem={({ item }) => <MenuCard data={item} />}
            />

            {/* seller type */}
            <Text style={styles.bestText}>seller type</Text>
            <FlatList
              horizontal
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              data={reomData}
              showsHorizontalScrollIndicator={false}
              // ListHeaderComponent={() => (
              //   <HeaderComponent navigation={navigation} />
              // )}
              // ListFooterComponent={() => <FooterComponent />}
              keyExtractor={(item) => item.id.toString()}
              // numColumns={2}
              renderItem={({ item }) => <MenuCard data={item} />}
            />

            {/* Property Type */}
            <Text style={styles.bestText}>Property Type</Text>
            <FlatList
              horizontal
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              data={reomData}
              showsHorizontalScrollIndicator={false}
              // ListHeaderComponent={() => (
              //   <HeaderComponent navigation={navigation} />
              // )}
              // ListFooterComponent={() => <FooterComponent />}
              keyExtractor={(item) => item.id.toString()}
              // numColumns={2}
              renderItem={({ item }) => <MenuCard data={item} />}
            />

            {/* Bathrooms */}
            <Text style={styles.bestText}>Bathrooms</Text>
            <FlatList
              horizontal
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              data={reomData}
              showsHorizontalScrollIndicator={false}
              // ListHeaderComponent={() => (
              //   <HeaderComponent navigation={navigation} />
              // )}
              // ListFooterComponent={() => <FooterComponent />}
              keyExtractor={(item) => item.id.toString()}
              // numColumns={2}
              renderItem={({ item }) => <MenuCard data={item} />}
            />

            {/* Bedrooms type */}
            <Text style={styles.bestText}>Bedrooms</Text>
            <FlatList
              horizontal
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              data={reomData}
              showsHorizontalScrollIndicator={false}
              // ListHeaderComponent={() => (
              //   <HeaderComponent navigation={navigation} />
              // )}
              // ListFooterComponent={() => <FooterComponent />}
              keyExtractor={(item) => item.id.toString()}
              // numColumns={2}
              renderItem={({ item }) => <MenuCard data={item} />}
            />
            {/* Furnishing */}
            <Text style={styles.bestText}>Furnishing</Text>
            <FlatList
              horizontal
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              data={reomData}
              showsHorizontalScrollIndicator={false}
              // ListHeaderComponent={() => (
              //   <HeaderComponent navigation={navigation} />
              // )}
              // ListFooterComponent={() => <FooterComponent />}
              keyExtractor={(item) => item.id.toString()}
              // numColumns={2}
              renderItem={({ item }) => <MenuCard data={item} />}
            />
          </ScrollView>

          <TouchableOpacity style={styles.submit} onPress={onClose}>
            <Text style={styles.topText}> Filter</Text>
          </TouchableOpacity>
        </Actionsheet.Content>
      </Actionsheet>
    </AppScreen>
  );
};

export default Search;

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
});
