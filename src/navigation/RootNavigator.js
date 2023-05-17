import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { useAuthStateContext } from "../contexts/AuthUserProvider";
import HomeStack from "./HomeStack";

const RootNavigator = () => {
  const userContext = useAuthStateContext();

  if (userContext.initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      {userContext.user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
