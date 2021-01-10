import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>CourseScheduler</Text>
      <Text style={styles.commentText}>Academia optimized.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {color: '#FFF8E7', fontSize: 128, fontWeight: 400},
  commentText: {color: '#FFF8E7', fontSize: 64, fontWeight: 200},
});
