/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  leftIcons: {
    flexDirection: 'row',
    width: 120,
    justifyContent: 'space-between',
  },
  likes: {
    fontWeight: 'bold',
    margin: 3,
  },
  caption: {
    margin: 3,
  },
  postedAt: {
    color: '#8c8c8c',
    margin: 3,
  },
});

interface Props {
  likesCount: number;
  caption: string;
  postedAt: string;
}

const Footer: React.FC<Props> = props => {
  const { likesCount: likesCountProp, caption, postedAt } = props;

  const [isLiked, setIsLike] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const onLikePressed = (): void => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);

    setIsLike(!isLiked);
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            {isLiked ? <ADIcon name="heart" size={25} color="#e73838" /> : <ADIcon name="hearto" size={25} color="#545454" />}
          </TouchableWithoutFeedback>
          <FontistoIcon name="comment" size={23} color="#545454" />
          <IoniconsIcon name="paper-plane-outline" size={25} color="#545454" />
        </View>
        <FAIcon name="bookmark-o" size={25} color="#545454" />
      </View>

      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;
