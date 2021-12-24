import React, {useEffect} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootParamList} from './types';
import {COLORS} from '@/theme';
import {getDataFromStorage, StorageKeys} from '@/storage';
import {DetailInfoPage, HomePage, SearchPage} from '@/components/pages';
import {useAppDispatch} from '@/store/hooks';
import {wordbookLoaded} from '@/features/wordbook';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.primary,
  },
};
const Stack = createNativeStackNavigator<RootParamList>();

const RootNavigator: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadData = async () => {
      const wordbook = await getDataFromStorage(StorageKeys.wordbook);
      if (wordbook) {
        dispatch(wordbookLoaded(wordbook));
      }
    };
    loadData();
  }, []);

  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Group
          screenOptions={{
            presentation: 'containedTransparentModal',
          }}>
          <Stack.Screen name="Search" component={SearchPage} />
          <Stack.Screen
            name="DetailInfo"
            component={DetailInfoPage}
            options={{animation: 'fade'}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
