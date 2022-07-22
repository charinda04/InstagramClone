import { View } from 'react-native';
import React from 'react';
import { PostType } from '@src/shared/types';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

interface Props {
  post: PostType;
}

const Post: React.FC<Props> = props => {
  const {
    post: { caption, likesCount, postedAt, user, imageUri },
  } = props;
  return (
    <View>
      <Header imageUri={user.imageUri} name={user.name} />
      <Body imageUri={imageUri} />
      <Footer likesCount={likesCount} caption={caption} postedAt={postedAt} />
    </View>
  );
};

export default Post;
