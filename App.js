import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScheduleScreen from "./screens/ScheduleScreen";
import CourseDetailScreen from "./screens/CourseDetailScreen";
import CourseEditScreen from "./screens/CourseEditScreen";
import UserContext from "./UserContext";
import colors from "./components/Form/colors";

const Stack = createStackNavigator();
const App = () => {
  const [user, setUser] = useState({ role: "admin" });
  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ScheduleScreen"
            component={ScheduleScreen}
            options={{
              title: "Schedule",
              headerStyle: { backgroundColor: colors.white },
            }}
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
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
