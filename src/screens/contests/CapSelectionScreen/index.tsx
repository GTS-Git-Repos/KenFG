import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';
import CapSelectionScreen from './cap.selection.screen';
import {createTeamRemote, editTeamRemote} from '../../../remote/matchesRemote';
import {errorBox, infoBox} from '../../../utils/snakBars';
import {clearTeamAction} from '../../../store/actions/teamActions';
import {useDispatch, useSelector} from 'react-redux';
import {resetContestListNavigation} from '../../../utils/resetNav';
import {selectedMatch} from '../../../store/selectors';
import {StackActions} from '@react-navigation/native';
const log = console.log;

export default function CapSelectionHOC() {
  const route = useRoute<any>();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const matchSelector: any = useSelector(selectedMatch);

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
        errorBox('Failed to Edit');
      }, 500);
    }
  };

  const cloneAPI = async (payload: any) => {
    try {
      setLoading(true);
      const response = await createTeamRemote(payload);
      setLoading(false);
      if (!response.status) {
        setTimeout(() => {
          errorBox(response.msg);
        }, 500);
        // throw 'Failed to Clone a Team !!';
        return;
      }
      dispatch(clearTeamAction());
      navigation.dispatch(StackActions.popToTop());
      return;
      // resetContestListNavigation(navigation, {
      //   match_key: matchSelector.match_key,
      //   to: 3,
      // });
    } catch (err) {
      console.log('cloneAPI Error -->', err);
      setTimeout(() => {
        errorBox('Failed to Clone');
      }, 500);
    }
  };

  return (
    <CapSelectionScreen
      editTeamAPI={editTeamAPI}
      loading={loading}
      setLoading={setLoading}
      cloneAPI={cloneAPI}
    />
  );
}

/**
 * to: 3  => edit and clone
 */
