//this file is not tied with redux, it's a shared central location for dispatching navigation actions,
// [NOTE] Need to organized into navigation folder, file name will [featurname].link.ts

import {CommonActions} from '@react-navigation/native';
import store from '../';
import {
  joinContestRequestAction,
  updateSelectedMatchAction,
} from './appActions';
import {
  SwitchTeamType,
  TeamFormationMutationType,
  TeamPreviewType,
} from '../../types/match';
import {updateCaptain, updatePlayer, updateVCaptain} from './teamActions';
import {errorBox} from '../../utils/snakBars';

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
  maxTeam: any;
  isFullMatch: boolean;
}

// update selected match, and nav to contests list to join
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
  return 1;
};

export const toSecondInningsContestList = (navigation: any, payload: any) => {
  store.dispatch(updateSelectedMatchAction(payload));
  navigation.dispatch(
    CommonActions.navigate({
      name: 'SecondInningsContest',
    }),
  );
  return true;
};



/**
 * It used on user clicks the entry button or (join button)
 */

export const toTeamFormationWithAutoJoin = (
  navigation: any,
  hasUnJoinedTeam: boolean,
  payload: JoinContestRequestShape,
) => {
  const selectContest = {...payload};
  selectContest.maxTeam = parseInt(selectContest.maxTeam);
  store.dispatch(joinContestRequestAction(selectContest));
  if (hasUnJoinedTeam) {
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

/**
 * It used only when a player clicks a create team button
 */
export const toTeamFormationNoAutoJoin = (navigation: any) => {
  store.dispatch(joinContestRequestAction(null));
  navigation.dispatch(
    CommonActions.navigate({
      name: 'TeamFormationScreen',
      params: {
        mutation: false,
      },
    }),
  );
};



export const toCompareTeamScreen = (navigation: any) => {
  navigation.dispatch(
    CommonActions.navigate({
      name: 'CompareTeamsScreen',
    }),
  );
};

export const toTeamFormationWithMutation = (
  navigation: any,
  team_key: string,
  team: any,
  mutationPayload: TeamFormationMutationType,
) => {
  try {
    const players = [];
    players.push(
      ...team.keepers,
      ...team.all_rounder,
      ...team.batsman,
      ...team.bowler,
    );
    store.dispatch(updatePlayer(players));
    store.dispatch(updateCaptain(team.cap.key));
    store.dispatch(updateVCaptain(team.vc.key));
    navigation.navigate('TeamFormationScreen', {
      mutation: {...mutationPayload, team_key: team_key},
    });
    return;
  } catch (err) {
    errorBox('Failed to Mutate Team !!', 0);
  }
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

export const toTeamPreview = (navigation: any, payload: TeamPreviewType) => {
  // console.log(JSON.stringify(payload));
  const obj = {
    from: 1,
    keepers: payload.keepers,
    batsman: payload.batsman,
    all_rounder: payload.all_rounder,
    bowler: payload.bowler,
    cap_key: payload?.cap?.key,
    vc_key: payload?.vc?.key,
    team_a: payload.team_a,
    team_b: payload.team_b,
    credits_left: payload.credits_left,
  };
  // return;
  navigation.dispatch(
    CommonActions.navigate({
      name: 'TeamPreviewScreen',
      params: {
        ...obj,
      },
    }),
  );
  return true;
};

export const toSwitchTeam = (navigation: any, payload: SwitchTeamType) => {
  navigation.dispatch(
    CommonActions.navigate({
      name: 'SwitchTeamScreen',
      params: {
        ...payload,
      },
    }),
  );
};
