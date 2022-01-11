import React from 'react';
import TeamSelectionScreen from './team.selection.screen';
import {useRoute} from '@react-navigation/native';
import {selectedMatch, userInfo} from '../../store/selectors';
import {useSelector} from 'react-redux';
import {getJoinedTeamsRemote} from '../../remote/matchesRemote';
import {useQuery} from 'react-query';

export default function TeamSelectionHOC() {
  const userInfoSelector: any = useSelector(userInfo);
  const matchSelector: any = useSelector(selectedMatch);

  const teams = useQuery(
    ['teams', matchSelector.match_key, userInfoSelector?.mobile],
    getJoinedTeamsRemote,
  );

  const route = useRoute();

  return <TeamSelectionScreen teams={teams.data} status={teams.status} />;
}
