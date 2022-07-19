import { useState, useEffect } from 'react';
import { AppState } from 'react-native';

const useAppState = (): string => {
  const [appState, setAppState] = useState<string>(AppState.currentState);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: string): void => {
      setAppState(nextAppState);
    };

    AppState.addEventListener('change', handleAppStateChange);

    return (): void => AppState.removeEventListener('change', handleAppStateChange);
  }, []);

  return appState;
};

export default useAppState;
