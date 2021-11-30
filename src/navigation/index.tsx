import React, {useEffect} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootParamList} from './types';
import {DictionaryDetailPage, HomePage, SearchPage} from '@components/pages';
import {COLORS} from '@/constants/theme';
import {BasicNavigationBar} from '../components/molecules';
import {useAppDispatch} from '@/store/hooks';
import {loadWordbook} from '@/features/wordbook/slice';
import {getDataFromStorage} from '@/storage';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.primary,
  },
};
const Stack = createNativeStackNavigator<RootParamList>();

const RootNavigator: React.FC = () => {
  const {top} = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const loadData = async () => {
    const wordbook = await getDataFromStorage('WORDBOOK');
    if (wordbook) {
      dispatch(loadWordbook(wordbook));
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen
          name="Search"
          component={SearchPage}
          options={{
            presentation: 'containedTransparentModal',
          }}
        />
        <Stack.Screen
          name="DictionaryDetail"
          component={DictionaryDetailPage}
          options={{presentation: 'transparentModal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
