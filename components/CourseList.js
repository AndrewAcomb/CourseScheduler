import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { getCourseTerm } from "../utils/terms";
import Course from "./Course";
import TermSelector from "./TermSelector";

const styles = StyleSheet.create({
  courseList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

const CourseList = ({ courses }) => {
  const [selectedTerm, setSelectedTerm] = useState("Fall");
  const termCourses = courses.filter(
    (course) => selectedTerm === getCourseTerm(course)
  );

  return (
    <View>
      <TermSelector
        selectedTerm={selectedTerm}
        setSelectedTerm={setSelectedTerm}
      />
      <ScrollView>
        <View style={styles.courseList}>
          {termCourses.map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CourseList;
