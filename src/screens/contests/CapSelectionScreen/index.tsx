import React, {useEffect, useReducer, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';
import CapSelectionScreen from './cap.selection.screen';
import {createTeamRemote, editTeamRemote} from '../../../remote/matchesRemote';
import {errorBox, infoBox} from '../../../utils/snakBars';
import {clearTeamAction} from '../../../store/actions/teamActions';
import {useDispatch, useSelector} from 'react-redux';
import {playersByRole, selectedMatch} from '../../../store/selectors';
import {StackActions} from '@react-navigation/native';
import {
  allPlayersSelector,
  capSelectionReducer,
  capSelectionState,
  sortStatusSelector,
} from './capselection.controller';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {FullScreenLoading} from '../../../sharedComponents';
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

  const allPlayers = allPlayersSelector(capsState);
  const sortStatus = sortStatusSelector(capsState);
  console.log('sortStatus >>>', sortStatus);

  useEffect(() => {
    capsDispatch({type: 'UPDATE_PLAYERS', payload: playersByRoleSelector});
  }, []);

  function sortByAction(input: any) {
    capsDispatch({type: 'UPDATE_SORT', payload: input.sortByPoints});
  }

  const editTeamAPI = async (payload: any) => {
    try {
      const team_key = route.params.mutation.team_key;
      const obj = {...payload};
      obj.team_key = team_key;
      setLoading(true);
      const response = await editTeamRemote(obj);
      setLoading(false);
      if (!response) {
        throw 'Failed to Edit a Team !!';
      }
      dispatch(clearTeamAction());
      navigation.dispatch(StackActions.popToTop());
      // return;
      // resetContestListNavigation(navigation, {
      //   match_key: matchSelector.match_key,
      //   to: 3,
      // });
    } catch (err) {
      console.log('editTeamAPI Error ->', err);
      setTimeout(() => {
        errorBox('Failed to Edit', 500);
      }, 500);
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
      // resetContestListNavigation(navigation, {
      //   match_key: matchSelector.match_key,
      //   to: 3,
      // });
    } catch (err) {
      console.log('cloneAPI Error -->', err);
      errorBox('Failed to Clone', 300);
    }
  };

  if (!allPlayers?.keeper?.length) {
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
