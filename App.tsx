import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from '@/components/navigation';
import store from '@/store';
import {Provider} from 'react-redux';

const App: React.FC = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  </Provider>
);

export default App;
