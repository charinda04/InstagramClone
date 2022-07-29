import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppText } from 'react-native-instagram-clone-components';

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
    <AppText>Discovery</AppText>
  </View>
);

export default Discovery;
