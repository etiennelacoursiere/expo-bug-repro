import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import InAppPurchases from "./InAppPurchase";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      {Platform.OS === "web" && <InAppPurchases />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
