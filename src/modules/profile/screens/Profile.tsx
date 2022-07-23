/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { Easing, FadeIn, FadeOut, Layout, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Ionicon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: 1500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
    marginTop: 300,
    fontSize: 30,
    color: 'white',
  },
  innerContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  checkboxContainer: {
    height: 20,
    width: 20,
    borderWidth: 1,
    marginRight: 5,
  },
});

// type decoration number | "none" | "line-through" | "underline" | "underline line-through" | undefined

const Profile: React.FC = () => {
  // const progress = useSharedValue('none');
  const textState = useSharedValue('none');
  const [todo, setTodo] = useState<{ text: string; completed: boolean }>({ text: 'complete this', completed: false });

  const textReanimatedStyle = useAnimatedStyle(() => {
    if (textState.value === 'checked') {
      return {
        textDecorationLine: 'line-through',
      };
    }

    return {
      textDecorationLine: 'none',
    };
  }, []);

  const toggleTodoHandler = (): void => {
    textState.value = todo.completed ? 'none' : 'checked';
    setTodo({ ...todo, completed: !todo.completed });
  };

  return (
    <Animated.View style={styles.container} entering={FadeIn} exiting={FadeOut} layout={Layout.delay(300)}>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.checkboxContainer} activeOpacity={0.6} onPress={toggleTodoHandler}>
          {todo.completed ? <Ionicon name="checkmark" size={20} color="gray" /> : null}
        </TouchableOpacity>
        <Animated.Text numberOfLines={2} style={[styles.text, textReanimatedStyle]}>
          {todo.text}
        </Animated.Text>
      </View>
    </Animated.View>
  );
};

export default Profile;
