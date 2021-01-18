import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Course from "./Course";

const styles = StyleSheet.create({
  courseList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

const CourseList = ({ courses }) => (
  <ScrollView>
    <View style={styles.courseList}>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </View>
  </ScrollView>
);

export default CourseList;
