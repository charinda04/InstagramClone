import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 1500,
  },
  textStyle: {
    textAlign: 'center',
    marginTop: 300,
    fontSize: 30,
    color: 'white',
  },
});

const CreatePost: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.textStyle}>CreatePost</Text>
  </View>
);

export default CreatePost;
