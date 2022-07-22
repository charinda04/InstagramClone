import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

const Discovery: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.textStyle}>Discovery</Text>
  </View>
);

export default Discovery;
