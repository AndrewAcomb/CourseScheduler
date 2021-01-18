import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { util } from "prettier";
import CourseList from "./components/CourseList";

const Banner = ({ title }) => (
  <Text style={styles.banner}>{title || "[loading...]"}</Text>
);

const fetchSchedule = async () => {
  const response = await fetch(url);
  if (!response.ok) throw response;
  const json = await response.json();
  setSchedule(json);
};

const App = () => {
  const [schedule, setSchedule] = useState({ title: "", courses: [] });
  // const banner = useEffect((<Banner title={schedule.title} />), [schedule]);

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
      <CourseList courses={schedule.courses} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f20",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  banner: {
    color: "#FFF8E7",
    fontSize: 32,
    fontWeight: 400,
  },
});

export default App;
