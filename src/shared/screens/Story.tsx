/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
  ImageBackground,
  TextInput,
  ActivityIndicator,
  Dimensions,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { ProfilePicture } from '@src/components';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import storiesData from '@assets/data/stories';
import { UserStory, StoryObject } from '../types';
import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HOME, MAIN_TAB_NAVIGATOR } from '@src/app/navigation/route.actions';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  userName: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  postedTime: {
    marginLeft: 10,
    fontWeight: '700',
    color: '#808080',
    fontSize: 16,
  },
  bottomContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal: 10,
  },
  cameraButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
  },
  messageButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: '100%',
    color: 'white',
    fontSize: 16,
  },
  textInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
    height: 50,
  },
});

type StoryNavigationProp = StackNavigationProp<ParamListBase, 'Trial_Rated'>;
type StoryRouteProp = RouteProp<ParamListBase, 'Trial_Rated'>;

interface Props {
  navigation: StoryNavigationProp;
  route: StoryRouteProp;
}

type NavParams = {
  userId?: string;
};

const Story: React.FC<Props> = props => {
  const { navigation, route } = props;
  const navParams = route.params as NavParams | undefined;
  const [userStories, setUserStories] = useState<UserStory | undefined>();
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);
  // const [activeStory, setActiveStory] = useState<StoryObject | undefined>();
  const activeStory = userStories && userStories.stories[activeStoryIndex];
  const userId = navParams?.userId;

  const fetchStories = async () => {
    try {
      // const storiesData = await API.graphql(graphqlOperation(listStorys));
      // const storiesDataArray = storiesData as Array<Story>;
      const tempUserStories = storiesData.find(storyData => storyData.user.id === userId);
      setUserStories(tempUserStories);
    } catch (e) {
      console.log('error fetching stories');
      console.log(e);
    }
  };

  useEffect(() => {
    fetchStories();
    setActiveStoryIndex(0);
  }, []);

  useEffect(() => {
    if (!userStories) return;

    if (activeStoryIndex < 0) {
      setActiveStoryIndex(0);
      return;
    }

    if (activeStoryIndex >= userStories.stories.length) {
      setActiveStoryIndex(userStories.stories.length - 1);
      // return;
    }

    // setActiveStory(userStories.stories[activeStoryIndex]);
  }, [activeStoryIndex]);

  const navigateToNextUser = (): void => {
    if (!userId) return;
    navigation.push('Story', { userId: (parseInt(userId, 10) + 1).toString() });
  };

  const navigateToPreviousUser = (): void => {
    if (!userId) return;
    navigation.push('Story', { userId: (parseInt(userId, 10) - 1).toString() });
  };

  const handleNextStory = () => {
    if (userStories && activeStoryIndex >= userStories?.stories.length - 1) {
      navigateToNextUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      navigateToPreviousUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  const handlePress = (evt: GestureResponderEvent) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;

    if (x < screenWidth / 2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };

  if (!userStories || userStories.stories.length === 0) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  if (!activeStory) return <></>;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground source={{ uri: activeStory.imageUri }} style={styles.image}>
          <View style={styles.userInfo}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(MAIN_TAB_NAVIGATOR);
              }}>
              <ProfilePicture uri={userStories.user.imageUri} size={50} />
            </TouchableOpacity>
            <Text style={styles.userName}>{userStories.user.name}</Text>
            <Text style={styles.postedTime}>{activeStory.postedTime}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.cameraButton}>
              <Feather name="camera" size={30} color="#ffffff" />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput style={styles.textInput} editable placeholder="Send message" placeholderTextColor="white" />
            </View>
            <View style={styles.messageButton}>
              <Ionicons name="paper-plane-outline" size={35} color="#ffffff" />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Story;
