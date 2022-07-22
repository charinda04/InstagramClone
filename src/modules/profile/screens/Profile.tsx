import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Profile: React.FC = () => (
  <View style={{ backgroundColor: 'yellow', height: 1500 }}>
    <Text style={{ textAlign: 'center', marginTop: 300, fontSize: 30, color: 'white' }}>Profile</Text>
  </View>
);

export default Profile;
