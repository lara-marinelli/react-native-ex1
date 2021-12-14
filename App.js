import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    // Try setting `flexDirection` to 'column'/'column-reverse'/'row'/'row-reverse'
    <View style={styles.container}>
      <Text style={styles.headerStyle}>flexDirection: 'row-reverse'</Text>
      <View
        style={[{ flexDirection: "row-reverse" }, styles.elementsContainer]}
      >
        <View style={{ width: 50, height: 50, backgroundColor: "#EE2C38" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "#FAA030" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "#32B76C" }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    flex: 1,
  },
  headerStyle: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "100",
    marginBottom: 24,
  },
  elementsContainer: {
    flex: 1,
    backgroundColor: "#ecf5fd",
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
  },
});
("");
