import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { util } from "prettier";
import CourseList from "../components/CourseList";
// import CourseEditScreen from "./CourseEditScreen";
import UserContext from "../UserContext";
import Colors from "../components/Form/colors";
import { firebase } from "../firebase";

const db = firebase.database().ref();

const fixCourses = (json) => ({
  ...json,
  courses: Object.values(json.courses),
});

const Banner = ({ title }) => (
  <Text style={styles.banner}>{title || "[loading...]"}</Text>
);

const ScheduleScreen = ({ navigation }) => {
  const user = useContext(UserContext);
  const canEdit = user && user.role === "admin";

  useEffect(() => {
    const db = firebase.database().ref();
    const handleData = (snap) => {
      if (snap.val()) setSchedule(fixCourses(snap.val()));
    };
    db.on("value", handleData, (error) => alert(error));
    return () => {
      db.off("value", handleData);
    };
  }, []);

  const [schedule, setSchedule] = useState({ title: "", courses: [] });

  const view = (course) => {
    navigation.navigate(canEdit ? "CourseEditScreen" : "CourseDetailScreen", {
      course,
    });
  };

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
