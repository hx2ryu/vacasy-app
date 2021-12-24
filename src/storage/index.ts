import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeDataIntoStorage = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch {}
};

export const getDataFromStorage = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : undefined;
  } catch {
    return undefined;
  }
};

export const StorageKeys = {
  wordbook: '@wordbook',
};
