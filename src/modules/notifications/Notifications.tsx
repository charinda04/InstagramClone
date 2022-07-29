import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textStyle: {
    textAlign: 'center',
    marginTop: 300,
    fontSize: 30,
    color: 'white',
  },
});

const Notifications: React.FC = () => (
  <View style={{ flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',}}>
    <View
      style={{
        width: 300,
        height: 500,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}>
      <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
        <Text>CHRISTMAS SALE</Text>
        <Text>25%</Text>
        <Text>OFF</Text>
      </View>
      <View
        style={{ height: 1, width: '100%', borderRadius: 1, borderWidth: 3, borderColor: 'red', borderStyle: 'dotted', position: 'absolute',bottom: 165}}
      />
      <View style={{ flex: 1.5 }}>
        <Button title="Redeem" onPress={() => {}} />
      </View>
      <View style={{ position: 'absolute', height: 40, width: 40, borderRadius: 40, backgroundColor: 'white', left: -28, bottom: 150 }} />
      <View style={{ position: 'absolute', height: 40, width: 40, borderRadius: 40, backgroundColor: 'white', right: -28, bottom: 150 }} />
    </View>
  </View>
);

export default Notifications;
