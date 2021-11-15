import 'react-native-reanimated';
import React from 'react';
import {LogBox, SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from 'react-query';

import RootNavigation from './src/navigations/RootNavigation';
import store from './src/store';

const queryClient = new QueryClient();

LogBox.ignoreLogs(['Setting a timer']);

if (__DEV__ === false) {
  console.log = () => {};
}

const App: React.FC = (): JSX.Element | null => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor="#0c1320" />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RootNavigation />
        </QueryClientProvider>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
