import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootNavigator from "./src/navigation/RootNavigator";
import AuthUserProvider from "./src/contexts/AuthUserProvider";
import { useEffect } from "react";
import { signInAnonymously } from "firebase/auth";
import { auth } from "./src/firebase";

export default function App() {
  // Login anonymously
  useEffect(() => {
    signInAnonymously(auth).catch((err) => console.log(err));
  }, []);
  return (
    <AuthUserProvider>
      <RootNavigator />
    </AuthUserProvider>
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
