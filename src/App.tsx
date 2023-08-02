import React from 'react';
import RootNavigation from './navigations/RootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './store/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
