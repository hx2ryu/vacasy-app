import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from '@/navigation';
import store from '@/store';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <RootNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
