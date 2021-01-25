import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import CourseSelector from "./CourseSelector";

const getCourseNumber = (course) => course.id.slice(1);

const Course = ({ course, isSelected, isDisabled, select, view }) => (
  <TouchableOpacity
    style={
      styles[
        isSelected
          ? "courseButtonSelected"
          : isDisabled
          ? "courseButtonDisabled"
          : "courseButton"
      ]
    }
    onPress={() => {
      if (!isDisabled) select(course);
    }}
    onLongPress={() => view(course)}
  >
    <Text style={styles.courseText}>
      {`CS ${getCourseNumber(course)}\n${course.meets}`}
    </Text>
  </TouchableOpacity>
);

const courseBase = {
  borderRadius: 5,
  justifyContent: "center",
  alignItems: "center",
  margin: 10,
  height: 60,
  padding: 10,
  minWidth: 90,
  maxWidth: 90,
};

const styles = StyleSheet.create({
  courseButton: {
    ...courseBase,
    backgroundColor: "#4080C0",
  },
  courseButtonSelected: {
    ...courseBase,
    backgroundColor: "#004A99",
  },
  courseButtonDisabled: {
    ...courseBase,
    backgroundColor: "#A0A0A0",
  },
  courseText: {
    color: "#FFF8E7",
    fontSize: 12,
    textAlign: "center",
  },
});

export default Course;
