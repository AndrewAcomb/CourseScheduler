import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { getCourseTerm } from "../utils/terms";
import Course from "./Course";
import TermSelector from "./TermSelector";
import CourseSelector from "./CourseSelector";

const styles = StyleSheet.create({
  courseList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

const CourseList = ({ courses, view }) => {
  const [selectedTerm, setSelectedTerm] = useState("Fall");
  const termCourses = courses.filter(
    (course) => selectedTerm === getCourseTerm(course)
  );

  return (
    <ScrollView>
      <TermSelector
        selectedTerm={selectedTerm}
        setSelectedTerm={setSelectedTerm}
      />
      <CourseSelector courses={termCourses} view={view} />
    </ScrollView>
  );
};

export default CourseList;
