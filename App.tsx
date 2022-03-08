import 'react-native-reanimated';
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import tailwind from 'tailwind-rn';
import {LogBox, SafeAreaView, Text, View, StatusBar} from 'react-native';
// import {enableFreeze} from 'react-native-screens';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from 'react-query';
// import SQLite from 'react-native-sqlite-storage';
import * as Sentry from '@sentry/react-native';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import RootNavigation from './src/navigations/RootNavigation';
import store from './src/store';

export const queryClient = new QueryClient();

// enableFreeze(true);

// Sentry.init({
//   dsn: 'https://7e7f29d7464d49ecabe0a505398c8c00@o1129974.ingest.sentry.io/6173909',
//   tracesSampleRate: 1.0,
// });

LogBox.ignoreLogs([
  'Setting a timer',
  'Warning: Cannot record touch end without a touch start.',
  'source.uri should not be an empty string',
]);

if (__DEV__ === false) {
  console.log = () => {};
}
const App: React.FC = (): JSX.Element | null => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar barStyle={'light-content'} backgroundColor="#172338" />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <GestureHandlerRootView style={{flex: 1}}>
            <RootNavigation />
          </GestureHandlerRootView>
        </QueryClientProvider>
      </Provider>
    </SafeAreaView>
  );
};

// export default Sentry.wrap(App);
export default App;
