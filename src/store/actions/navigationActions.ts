// this file is not tied with redux, it's a central location for dispatching navigation actions,

import {CommonActions} from '@react-navigation/native';
import store from '../';
import {joinContestRequestAction} from './appActions';

interface JoinContestRequestShape {
  contestKey: string;
  entryAmount: string;
  maxTeam: string;
}

export const navigateToTeamFormationWith_AutoJoin = (
  navigation: any,
  payload: JoinContestRequestShape,
) => {
  // need to do,any one of the team can be free to join

  store.dispatch(joinContestRequestAction(payload));
  navigation.dispatch(
    CommonActions.navigate({
      name: 'TeamFormationScreen',
      params: {
        mutation: false,
      },
    }),
  );
  return true;
};

const navigateToTeamFormationWithOut_AutoJoin = () => {
  return false;
};
