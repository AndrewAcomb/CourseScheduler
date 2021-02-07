import React from "react";
import { Button } from "react-native";
import { firebase } from "../firebase";
import color from "./Form/colors";

const SignInButton = ({ navigation, user }) =>
  user && user.uid ? (
    <Button
      title="Logout"
      color={color.lightblue}
      onPress={() => firebase.auth().signOut()}
    />
  ) : (
    <Button
      title="SignIn"
      color={color.lightblue}
      onPress={() => navigation.navigate("RegisterScreen")}
    />
  );

export default SignInButton;
