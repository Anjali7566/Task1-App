import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBar}>
        <View style={styles.nav} />
        <View style={styles.logoNav}>
          <Text>Logo</Text>
          <Text>Search</Text>
          <Text>Notification</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
  },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  nav: {
    width: 360,
    height: 37,
    backgroundColor: "#ddd", // add some background color to see the nav bar
  },
  logoNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign:"center",
    color:"black",
  },
});