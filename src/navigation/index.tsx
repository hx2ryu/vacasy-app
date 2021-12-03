import React, {useEffect} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootParamList} from './types';
import {DetailInfoModal, Home, SearchDictionary} from '@components/pages';
import {COLORS} from '@/constants/theme';
import {useAppDispatch} from '@/store/hooks';
import {loadWordbook} from '@/features/wordbook/slice';
import {getDataFromStorage} from '@/storage';

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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Group
          screenOptions={{
            presentation: 'containedTransparentModal',
          }}>
          <Stack.Screen name="Search" component={SearchDictionary} />
          <Stack.Screen
            name="DetailInfo"
            component={DetailInfoModal}
            options={{animation: 'fade'}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
