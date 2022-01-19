import React from 'react';
import {useRoute} from '@react-navigation/core';
import CapSelectionScreen from './cap.selection.screen';
import {editTeamRemote} from '../../../remote/matchesRemote';
const log = console.log;

export default function CapSelectionHOC() {
  const route = useRoute<any>();

  const editTeamAPI = async (payload: any) => {
    // const team_key = route.params.mutation.team_key;
    // const obj = {...payload};
    // obj.team_key = team_key;
    // const response = await editTeamRemote(obj);
  };

  return <CapSelectionScreen editTeamAPI={editTeamAPI} />;
}
