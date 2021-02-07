import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScheduleScreen from "./screens/ScheduleScreen";
import CourseDetailScreen from "./screens/CourseDetailScreen";
import CourseEditScreen from "./screens/CourseEditScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UserContext from "./UserContext";
import colors from "./components/Form/colors";
import { firebase } from "./firebase";
import SignInButton from "./components/SignInButton";

const Stack = createStackNavigator();
const App = () => {
  const [auth, setAuth] = useState();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (auth && auth.uid) {
      const db = firebase.database().ref("users").child(auth.uid);
      const handleData = (snap) => {
        setUser({ uid: auth.uid, ...snap.val() });
      };
      db.on("value", handleData, (error) => alert(error));
      return () => {
        db.off("value", handleData);
      };
    } else {
      setUser(null);
    }
  }, [auth]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      setAuth(auth);
    });
  }, []);

  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ScheduleScreen"
            component={ScheduleScreen}
            options={({ navigation }) => ({
              title: "Schedule",
              headerRight: () => (
                <SignInButton navigation={navigation} user={user} />
              ),
            })}
          />
          <Stack.Screen
            name="CourseDetailScreen"
            component={CourseDetailScreen}
            options={{
              title: "Course detail",
              headerStyle: { backgroundColor: colors.white },
            }}
          />
          <Stack.Screen
            name="CourseEditScreen"
            component={CourseEditScreen}
            options={{
              title: "Course editor",
              headerStyle: { backgroundColor: colors.white },
            }}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={({ navigation }) => ({
              title: "Schedule",
              headerRight: () => (
                <SignInButton navigation={navigation} user={user} />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
