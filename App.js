import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScheduleScreen from "./screens/ScheduleScreen";
import CourseDetailScreen from "./screens/CourseDetailScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ScheduleScreen"
          component={ScheduleScreen}
          options={{
            title: "Schedule",
            headerStyle: { backgroundColor: "#FFF8E7" },
          }}
        />
        <Stack.Screen
          name="CourseDetailScreen"
          component={CourseDetailScreen}
          options={{
            title: "Course detail",
            headerStyle: { backgroundColor: "#FFF8E7" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
