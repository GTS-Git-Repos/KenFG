import React, {useEffect, useReducer, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';
import CapSelectionScreen from './cap.selection.screen';
import {createTeamRemote, editTeamRemote} from '../../../remote/matchesRemote';
import {errorBox, infoBox} from '../../../utils/snakBars';
import {clearTeamAction} from '../../../store/actions/teamActions';
import {useDispatch, useSelector} from 'react-redux';
import {
  isFullMatchSelector,
  playersByRole,
  selectedMatch,
  userInfo,
} from '../../../store/selectors';
import {StackActions} from '@react-navigation/native';
import {
  allPlayersSelector,
  capSelectionReducer,
  capSelectionState,
  isTeamsIsDiffrent,
  sortStatusSelector,
} from './capselection.controller';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {FullScreenLoading} from '../../../sharedComponents';
import {useGetTeams} from '../../../shared_hooks/contest.hooks';
import {yearsToMonths} from 'date-fns';
// import {updateJoinModalAction} from '../../../store/actions/appActions';
const log = console.log;

export default function CapSelectionHOC() {
  const route = useRoute<any>();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const [capsState, capsDispatch] = useReducer(
    capSelectionReducer,
    capSelectionState,
  );

  const matchSelector: any = useSelector(selectedMatch);
  const playersByRoleSelector = useSelector(playersByRole);
  const userMeta = useSelector(userInfo);
  const isFullMatch: boolean = useSelector(isFullMatchSelector);

  const allPlayers = allPlayersSelector(capsState);
  const sortStatus = sortStatusSelector(capsState);

  const {teams, teamsAPI}: any = useGetTeams(
    matchSelector.match_key,
    userMeta.mobile,
    isFullMatch,
  );
  console.log('sortStatus >>>', sortStatus);

  // log(JSON.stringify(allPlayers));

  useEffect(() => {
    capsDispatch({type: 'UPDATE_PLAYERS', payload: playersByRoleSelector});
  }, []);

  function sortByAction(sort: any) {
    // log(sortStatus)
    const sPayload: any = {
      sortByPoints: null,
      sortByC: null,
      sortByVC: null,
    };
    if (sort.points) {
      sPayload.sortByPoints = !sortStatus.sortByPoints;
    }
    if (sort.selc) {
      sPayload.sortByC = !sortStatus.sortByC;
    }
    if (sort.selvc) {
      sPayload.sortByVC = !sortStatus.sortByVc;
    }
    capsDispatch({type: 'UPDATE_SORT', payload: sPayload});
  }

  const editTeamAPI = async (payload: any) => {
    try {
      const team_key = route.params.mutation.team_key;
      const new_team = {...payload};
      new_team.team_key = team_key;
      // get the previous team
      const existed_team = teams.find(
        (item: any) => item.team_key === team_key,
      );
      if (!existed_team) {
        throw 'no teams found';
      }
      const isTeamDiffrent = isTeamsIsDiffrent(new_team, existed_team);
      if (isTeamDiffrent === false) {
        infoBox('No Changes has been made', 0);
        // setTimeout(() => {
        //   dispatch(clearTeamAction());
        //   navigation.dispatch(StackActions.popToTop());
        // }, 2000);
        return;
      }
      setLoading(true);
      const response = await editTeamRemote(new_team);
      setLoading(false);

      if (!response.txn) {
        errorBox(response.msg, 500);
        return;
      }
      dispatch(clearTeamAction());
      navigation.dispatch(StackActions.popToTop());
      return;
    } catch (err) {
      console.log(err);
      errorBox('Failed to Edit', 500);
    }
  };

  const cloneAPI = async (payload: any) => {
    try {
      setLoading(true);
      const response: any = await createTeamRemote(payload);
      setLoading(false);
      if (!response.status) {
        errorBox(response.msg, 500);
        // throw 'Failed to Clone a Team !!';
        return;
      }
      infoBox('Team Cloned Successfully', 500);
      dispatch(clearTeamAction());
      navigation.dispatch(StackActions.popToTop());
      return;
    } catch (err) {
      console.log('cloneAPI Error -->', err);
      errorBox('Failed to Clone', 300);
    }
  };

  // check is keepers key exists: else show the loading screen
  if (!allPlayers?.keeper) {
    return <FullScreenLoading title={''} />;
  }

  return (
    <CapSelectionScreen
      allPlayers={allPlayers}
      sortStatus={sortStatus}
      editTeamAPI={editTeamAPI}
      loading={loading}
      setLoading={setLoading}
      cloneAPI={cloneAPI}
      sortByAction={sortByAction}
    />
  );
}

/**
 * to: 3  => edit and clone
 */
