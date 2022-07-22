import { StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
});

interface Props {
  imageUri: string;
}

const Body: React.FC<Props> = props => {
  const { imageUri } = props;

  return <Image source={{ uri: imageUri }} style={styles.image} />;
};

export default Body;
