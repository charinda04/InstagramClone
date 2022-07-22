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

const Notifications: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.textStyle}>Notifications</Text>
  </View>
);

export default Notifications;
