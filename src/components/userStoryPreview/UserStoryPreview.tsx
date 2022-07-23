import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { User } from '@src/shared/types';
import { useNavigation } from '@react-navigation/native';
import ProfilePicture from '../profilePicture/ProfilePicture';

const styles = StyleSheet.create({
  container: {},
  name: {
    textAlign: 'center',
  },
});

interface Props {
  user: User;
}

const UserStoryPreview: React.FC<Props> = props => {
  const {
    user: { imageUri, name, id },
  } = props;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Story', { userId: id });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default UserStoryPreview;
