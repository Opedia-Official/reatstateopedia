import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TrainningGrid from "../component/TrainningGrid";

export default function Trainning() {
  return (
    <View style={styles.container}>
      <Text style={styles.galleryTitle}>Take a look on our memories</Text>

      <TrainningGrid />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  galleryTitle: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 25,

    color: "rgba(39, 52, 139, 0.6)",
  },
});
