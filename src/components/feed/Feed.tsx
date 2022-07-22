import { FlatList, ListRenderItemInfo } from 'react-native';
import React, { useState } from 'react';
import stories from '@assets/data/stories';
import { PostType } from '@src/shared/types';
import posts from '@assets/data/posts';
import Post from '../post/Post';
import StoriesHeader from '../storiesHeader/StoriesHeader';

const Feed: React.FC = () => (
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  // const fetchPosts = async () => {
  //   try {
  //     const postsData = await API.graphql(graphqlOperation(listPosts));
  //     setPosts(postsData.data.listPosts.items);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };

  <FlatList
    data={posts}
    renderItem={({ item }: ListRenderItemInfo<PostType>): JSX.Element => <Post post={item} />}
    keyExtractor={({ id }): string => id}
    ListHeaderComponent={StoriesHeader}
  />
);
export default Feed;
