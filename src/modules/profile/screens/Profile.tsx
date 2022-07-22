import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    height: 1500,
  },
  textStyle: {
    textAlign: 'center',
    marginTop: 300,
    fontSize: 30,
    color: 'white',
  },
});

const Profile: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.textStyle}>Profile</Text>
  </View>
);

export default Profile;
