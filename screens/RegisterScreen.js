import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import Form from "../components/Form";
import * as Yup from "yup";
import { firebase } from "../firebase";
import colors from "../components/Form/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter a valid email address")
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(6, "Password must have be least 6 characters long")
    .label("Password"),
  name: Yup.string().label("Name"),
  confirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const RegisterScreen = ({ navigation }) => {
  const [signInError, setSignInError] = useState("");
  async function handleOnLogin(values) {
    const { email, password } = values;
    setSignInError(null);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate("ScheduleScreen");
    } catch (error) {
      setSignInError(error.message);
    }
  }

  async function handleOnSignUp(values) {
    const { name, email, password } = values;
    setSignInError(null);
    try {
      const authCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const user = authCredential.user;
      await user.updateProfile({ displayName: name });
      navigation.navigate("ScheduleScreen");
    } catch (error) {
      setSignInError(error.message);
    }
  }

  async function handleOnSubmit(values) {
    return values.confirm ? handleOnSignUp(values) : handleOnLogin(values);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Form
          initialValues={{
            email: "",
            password: "",
            name: "",
            confirm: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleOnSubmit}
        >
          <Form.Field
            name="email"
            leftIcon="email"
            placeholder="Enter email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <Form.Field
            name="password"
            leftIcon="lock"
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
          <Text>&nbsp;</Text>
          <Text style={{ marginHorizontal: 10, color: colors.white }}>
            Sign up to CourseScheduler with your name and a password:
          </Text>
          <Text>&nbsp;</Text>
          <Form.Field
            name="name"
            leftIcon="account-box"
            placeholder="Name"
            textContentType="name"
          />
          <Form.Field
            name="confirm"
            leftIcon="lock"
            placeholder="Confirm password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
          <Form.Button
            title={(values) => (values.confirm ? "Register" : "Login")}
            navigation={navigation}
          />
          {<Form.ErrorMessage error={signInError} visible={true} />}
        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    backgroundColor: colors.black,
    color: colors.white,
  },
});
export default RegisterScreen;
