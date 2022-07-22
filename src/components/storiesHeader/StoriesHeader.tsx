import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import stories from '@assets/data/stories';
import UserStoryPreview from '../userStoryPreview/UserStoryPreview';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Props {}

const StoriesHeader: React.FC<Props> = props => {
  const {} = props;

  return (
    <FlatList
      data={stories}
      keyExtractor={({ user: { id } }) => id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => <UserStoryPreview user={item.user} />}
    />
  );
};

export default StoriesHeader;
