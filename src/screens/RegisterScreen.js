import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, Input } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <Input
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Input
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Input
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Input
        placeholder="Repeat password"
        value={repeatPassword}
        onChangeText={(text) => setRepeatPassword(text)}
      />

      <View style={styles.buttonView}>
        <Button
          titleStyle={{ fontSize: 14 }}
          title="Login"
          type="Clear"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
      <Button title="Register" />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    alignSelf: "center",
    fontWeight: "600",
    paddingBottom: 24,
  },
  buttonView: {
    alignItems: "flex-end",
  },
});
