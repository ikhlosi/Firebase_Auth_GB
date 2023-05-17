import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuthStateContext } from "../contexts/AuthUserProvider";

const HomeScreen = () => {
  const { user } = useAuthStateContext();
  return (
    <View>
      <Text>Home page after login</Text>
      <Text>uid: {user.uid}</Text>
      <Text>email: {user.email}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
