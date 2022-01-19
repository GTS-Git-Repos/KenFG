import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';
import CapSelectionScreen from './cap.selection.screen';
import {editTeamRemote} from '../../../remote/matchesRemote';
import {errorBox} from '../../../utils/snakBars';
import {clearTeamAction} from '../../../store/actions/teamActions';
import {useDispatch, useSelector} from 'react-redux';
import {resetContestListNavigation} from '../../../utils/resetNav';
import {selectedMatch} from '../../../store/selectors';
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
        throw 'Failed';
      }
      dispatch(clearTeamAction());
      resetContestListNavigation(navigation, {
        match_key: matchSelector.match_key,
        // contest_key: selected_contest,
        // team_key: response.team_key,
      });
    } catch (err) {
      console.log('editTeamAPI', editTeamAPI);
      setTimeout(() => {
        errorBox('Failed to Edit');
      }, 500);
    }
  };

  return (
    <CapSelectionScreen
      editTeamAPI={editTeamAPI}
      loading={loading}
      setLoading={setLoading}
    />
  );
}
