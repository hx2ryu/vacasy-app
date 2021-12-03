import AsyncStorageLib from '@react-native-async-storage/async-storage';

export const storeDataIntoStorage = async (key: string, value: any) => {
  try {
    const jsonStr = JSON.stringify(value);
    await AsyncStorageLib.setItem(key, jsonStr);
  } catch {}
};

export const getDataFromStorage = async (key: string) => {
  try {
    const jsonStr = await AsyncStorageLib.getItem(key);
    if (jsonStr) {
      return JSON.parse(jsonStr) as Wordbook;
    }

    return null;
  } catch (e) {}
};

export const getAllDataFromStorage = async () => {
  try {
    const keys = await AsyncStorageLib.getAllKeys();
    const items = await AsyncStorageLib.multiGet(keys);
    return items.map(([key, value]) => {
      return {
        date: key,
        wordList: JSON.parse(value!),
      } as Wordbook;
    });
  } catch {}
};
