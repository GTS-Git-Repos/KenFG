import React from 'react';
import {useQuery} from 'react-query';
import {useSelector} from 'react-redux';
import {contestListsRemote} from '../../remote/matchesRemote';
import {selectedMatch} from '../../store/selectors';
import ContestListScreen from './contest.list.screen';

export default function ContestListHOC() {
  const matchSelector: any = useSelector(selectedMatch);

  // const contests = useQuery(
  //   ['contests', matchSelector?.match_key],
  //   contestListsRemote,
  // );
  // // console.log(contests);

  return <ContestListScreen />;
}
