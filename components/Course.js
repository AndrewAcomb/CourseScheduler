import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import CourseSelector from "./CourseSelector";
import colors from "./Form/colors";

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
    backgroundColor: colors.lightblue,
  },
  courseButtonSelected: {
    ...courseBase,
    backgroundColor: colors.darkblue,
  },
  courseButtonDisabled: {
    ...courseBase,
    backgroundColor: colors.lightgrey,
  },
  courseText: {
    color: colors.white,
    fontSize: 12,
    textAlign: "center",
  },
});

export default Course;
