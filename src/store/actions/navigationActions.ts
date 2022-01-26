// this file is not tied with redux, it's a central location for dispatching navigation actions,

import {CommonActions} from '@react-navigation/native';
import store from '../';
import {
  joinContestRequestAction,
  updateSelectedMatchAction,
} from './appActions';

interface selectedMatchShape {
  match_key: string;
  name: string;
  team_a: string;
  team_b: string;
  team_a_name: string;
  team_b_name: string;
  start_at: string;
}

interface JoinContestRequestShape {
  contestKey: string;
  entryAmount: string;
  maxTeam: string;
}

export const navigateMatchContestsAction = (
  navigation: any,
  payload: selectedMatchShape,
) => {
  store.dispatch(updateSelectedMatchAction(payload));
  navigation.dispatch(
    CommonActions.navigate({
      name: 'Contest',
    }),
  );
  return false;
};

export const navigateWith_AutoJoin = (
  navigation: any,
  numberOfTeams: number,
  payload: JoinContestRequestShape,
) => {
  // need to do,any one of the team can be free to join
  store.dispatch(joinContestRequestAction(payload));
  // console.log('numberOfTeams', numberOfTeams);
  if (numberOfTeams > 1) {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'TeamSelectionScreen',
      }),
    );
  } else {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'TeamFormationScreen',
        params: {
          mutation: false,
        },
      }),
    );
  }
};

const navigateToTeamFormationWithOut_AutoJoin = () => {
  return false;
};

export const toWiningsList = (navigation: any) => {
  // from create contests to winnings list
  navigation.dispatch(
    CommonActions.navigate({
      name: 'WinningsListScreen',
      params: {
        mutation: false,
      },
    }),
  );
  return true;
};

export const toPlayerProfile = (navigation: any, payload: any) => {
  // from create contests to winnings list
  navigation.dispatch(
    CommonActions.navigate({
      name: 'PlayerProfileScreen',
      params: {
        payload,
      },
    }),
  );
  return true;
};
