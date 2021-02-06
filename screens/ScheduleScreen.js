import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { util } from "prettier";
import CourseList from "../components/CourseList";
import CourseEditScreen from "./CourseEditScreen";
import UserContext from "../UserContext";
import Colors from "../components/Form/colors";

const Banner = ({ title }) => (
  <Text style={styles.banner}>{title || "[loading...]"}</Text>
);

const ScheduleScreen = ({ navigation }) => {
  const user = useContext(UserContext);
  const canEdit = user && user.role === "admin";
  const [schedule, setSchedule] = useState({ title: "", courses: [] });

  const view = (course) => {
    navigation.navigate(canEdit ? "CourseEditScreen" : "CourseDetailScreen", {
      course,
    });
  };

  const url = "https://courses.cs.northwestern.edu/394/data/cs-courses.php";

  useEffect(() => {
    const fetchSchedule = async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setSchedule(json);
    };
    fetchSchedule();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} view={view} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  banner: {
    color: Colors.white,
    fontSize: 32,
    fontWeight: 400,
  },
});

export default ScheduleScreen;
