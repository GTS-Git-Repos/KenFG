/**
 * The central navigations in match feature
 */
import {CommonActions} from '@react-navigation/native';
import store from '../store';
import {errorBox} from '../utils/snakBars';

export const toContestMatch = (
  navigation: any,
  match_key:string,
  contest_key: string,
) => {
  navigation.dispatch(
    CommonActions.navigate({
      name: 'ContestMatchScreen',
      params: {
        match_key,
        contest_key,
      },
    }),
  );
};
