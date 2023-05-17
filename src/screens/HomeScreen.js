import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuthStateContext } from "../contexts/AuthUserProvider";
import { Button } from "@rneui/base";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const handleLogout = () => {
  signOut(auth)
    .then(() => console.log("loggin out..."))
    .catch((err) => console.log(err));
};

const HomeScreen = () => {
  const { user } = useAuthStateContext();
  return (
    <View>
      <Text>Home page after login</Text>
      <Text>uid: {user.uid}</Text>
      <Text>email: {user.email}</Text>
      <Button title="Log out" onPress={() => handleLogout()} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
