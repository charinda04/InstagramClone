import { StyleSheet, Image, Dimensions, ImageBackground, ImageBackgroundProps, ImageSourcePropType, View } from 'react-native';
import React, { useCallback, useRef } from 'react';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';
import HeartImage from '@assets/images/heart.png';

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
  turtles: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface Props {
  imageUri: string;
}

const AnimatedImage = Animated.createAnimatedComponent(Image);

const Body: React.FC<Props> = props => {
  const { imageUri } = props;
  const doubleTapRef = useRef();
  const scale = useSharedValue(0);
  const opacity = useSharedValue(1);

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ scale: Math.max(scale.value, 0) }],
  }));

  const rTextStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const handleOnDoubleTapPress = () => {
    console.log('==>');

    scale.value = withSpring(1, undefined, isFinished => {
      if (isFinished) {
        scale.value = withDelay(500, withSpring(0));
      }
    });
  };

  const handleOnSingleTapPress = () => {
    opacity.value = withTiming(0, undefined, isFinished => {
      if (isFinished) {
        opacity.value = withDelay(500, withTiming(1));
      }
    });
  };

  return (
    <View style={styles.container}>
      <TapGestureHandler waitFor={doubleTapRef} onActivated={handleOnSingleTapPress}>
        <TapGestureHandler maxDelayMs={250} ref={doubleTapRef} numberOfTaps={2} onActivated={handleOnDoubleTapPress}>
          <Animated.View>
            {/* <Image source={{ uri: imageUri }} style={styles.image} /> */}
            <ImageBackground source={{ uri: imageUri }} style={styles.image}>
              <AnimatedImage
                source={HeartImage as ImageSourcePropType}
                style={[
                  styles.image,
                  {
                    shadowOffset: { width: 0, height: 20 },
                    shadowOpacity: 0.35,
                    shadowRadius: 35,
                  },
                  rStyle,
                ]}
                resizeMode="center"
              />
              {/* <Animated.Text style={[styles.turtles, rTextStyle]}>🐢🐢🐢🐢</Animated.Text> */}
            </ImageBackground>
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
    </View>
  );
};

export default Body;
