import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from '@/components/navigation';

const App: React.FC = () => (
  <SafeAreaProvider>
    <RootNavigator />
  </SafeAreaProvider>
);

export default App;
