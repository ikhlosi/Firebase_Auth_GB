import { StyleSheet, Text, View } from "react-native";
import React, { createContext } from "react";

const AuthUserStateContext = createContext({
  initializing: false,
  user: null,
});

const AuthUserProvider = ({ children }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  return (
    <View>
      <Text>AuthUserProvider</Text>
    </View>
  );
};

export default AuthUserProvider;

const styles = StyleSheet.create({});
