import { useCallback } from 'react';
import { BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const useBackButton = (handler: () => boolean | null | undefined): void => {
  useFocusEffect(
    // To avoid the running the effect too often, it's important to wrap the callback in useCallback before passing it to useFocusEffect
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', handler);
      return (): void => BackHandler.removeEventListener('hardwareBackPress', handler);
    }, [handler]),
  );
};

export default useBackButton;
