import 'react-native-reanimated';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {LogBox, SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Host, Portal} from 'react-native-portalize';
import SQLite from 'react-native-sqlite-storage';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import RootNavigation from './src/navigations/RootNavigation';
import store from './src/store';
import {COMPARISON_BINARY_OPERATORS} from '@babel/types';

// SQLite.DEBUG(true);
// SQLite.enablePromise(true);

const queryClient = new QueryClient();

LogBox.ignoreLogs([
  'Setting a timer',
  'Warning: Cannot record touch end without a touch start.',
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
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor="#0c1320" />
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

export default App;
