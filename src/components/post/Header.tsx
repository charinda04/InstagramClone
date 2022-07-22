import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import ProfilePicture from '../profilePicture/ProfilePicture';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
  },
  right: {
    marginRight: 15,
  },
  name: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#3c3c3c',
  },
});

interface Props {
  imageUri: string;
  name: string;
}
const Header: React.FC<Props> = props => {
  const { imageUri, name } = props;
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <ProfilePicture uri={imageUri} size={40} />
        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.right}>
        <Icon name="dots-three-vertical" size={16} />
      </View>
    </View>
  );
};

export default Header;
