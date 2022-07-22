import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    margin: 7,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#ae22e0',
  },
  image: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
});

interface Props {
  uri: string;
  size?: number;
}

const ProfilePicture: React.FC<Props> = props => {
  const { uri, size = 70 } = props;
  return (
    <View style={[styles.container, { width: size + 6, height: size + 6 }]}>
      <Image source={{ uri }} style={[styles.image, { width: size, height: size }]} />
    </View>
  );
};

export default ProfilePicture;
