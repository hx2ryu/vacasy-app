import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootParamList} from './types';
import {HomePage} from '@components/pages';
import {COLORS} from '@/constants/theme';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.primary,
  },
};
const Stack = createNativeStackNavigator<RootParamList>();

const RootNavigator: React.FC = () => (
  <NavigationContainer theme={Theme}>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default RootNavigator;
