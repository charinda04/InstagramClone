/* Async storage services */
import AsyncStorage from '@react-native-async-storage/async-storage';

const keyPrefix = 'amnesia';

const StorageService = {
  setItemAsync: async (key: string, data: string): Promise<void> => {
    const itemKey = keyPrefix.concat('-', key);
    await StorageService.removeItemAsync(itemKey);
    await AsyncStorage.setItem(itemKey, data);
  },

  getItemAsync: async (key: string): Promise<string | null> => {
    const itemKey = keyPrefix.concat('-', key);
    return AsyncStorage.getItem(itemKey);
  },

  removeItemAsync: async (key: string): Promise<void> => {
    const itemKey = keyPrefix.concat('-', key);
    await AsyncStorage.removeItem(itemKey);
  },
};

export default StorageService;
