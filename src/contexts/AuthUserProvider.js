import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const AuthUserStateContext = createContext({
  initializing: false,
  user: null,
});

const AuthUserProvider = ({ children }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  const onAuthStateChangedCallback = (newUser) => {
    console.log("AuthStateChanged!");
    setUser(newUser);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, onAuthStateChangedCallback);
    return unsubscribe;
  }, []);

  return (
    <AuthUserStateContext.Provider
      value={{ initializing: initializing, user: user }}
    >
      {children}
    </AuthUserStateContext.Provider>
  );
};

export default AuthUserProvider;

export const useAuthStateContext = () => useContext(AuthUserStateContext);

const styles = StyleSheet.create({});
