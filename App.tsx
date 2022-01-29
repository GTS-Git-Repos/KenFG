import 'react-native-reanimated';
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {LogBox, SafeAreaView, StatusBar} from 'react-native';
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

Sentry.init({
  dsn: 'https://7e7f29d7464d49ecabe0a505398c8c00@o1129974.ingest.sentry.io/6173909',
  tracesSampleRate: 1.0,
});

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
    // Test Db Actions
    // (async () => {
    //   SQLite.openDatabase({
    //     name: 'test_id',
    //     location: 'default',
    //   })
    //     .then(d => {
    //       // Create Table
    //       d.executeSql(
    //         'CREATE TABLE IF NOT EXISTS hello( ' +
    //           'count INTEGER PRIMARY KEY NOT NULL);',
    //       )
    //         .then(s => {
    //           console.log(s);
    //         })
    //         .catch(e => {
    //           console.log('failesd');
    //         });

    //       // insert some data

    //       d.executeSql('INSERT INTO hello (count) values (5)')
    //         .then(d => {
    //           console.log('insertId ->', d[0].insertId);
    //         })
    //         .catch(e => {
    //           console.log('failed to query');
    //         });

    //       // Read all data

    //       d.executeSql('SELECT count FROM hello')
    //         .then(d => {
    //           console.log('data ==>', d[0].rows.raw());
    //         })
    //         .catch(e => {
    //           console.log('failed to get data');
    //         });

    //       // Select Individual value

    //       d.executeSql('SELECT * from hello WHERE count == 1')
    //         .then(d => {
    //           console.log(d[0].rows.raw()[0].count);
    //         })
    //         .catch(err => {
    //           console.log('Failed to get data', err);
    //         });
    //     })
    //     .catch(e => {
    //       console.log('error');
    //     });
    // })();
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

export default Sentry.wrap(App);
