import AsyncStorageLib from '@react-native-async-storage/async-storage';

export const storeDataIntoStorage = async (key: STORAGE_KEYS, value: any) => {
  try {
    const jsonStr = JSON.stringify(value);
    await AsyncStorageLib.setItem(key, jsonStr);
  } catch {}
};

export const getDataFromStorage = async (key: STORAGE_KEYS) => {
  try {
    const jsonStr = await AsyncStorageLib.getItem(key);
    if (jsonStr) {
      if (key === 'WORDBOOK') {
        return JSON.parse(jsonStr) as Wordbook;
      }
    }

    return null;
  } catch (e) {}
};
