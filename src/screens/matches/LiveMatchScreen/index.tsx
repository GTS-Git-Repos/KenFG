import React from 'react';
import LiveMatchScreen from './live.match.screen';
import {useMatchMeta} from '../../../shared_hooks/contest.hooks';
import {useNavigation, useRoute} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {userInfo} from '../../../store/selectors';
import {toCompareTeamScreen} from '../../../store/actions/navigationActions';

export default function LiveMatchHOC() {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const userMeta: any = useSelector<any>(userInfo);

  const {matchMeta, matchAPI}: any = useMatchMeta(
    route?.params?.match_key,
    userMeta?.mobile,
  );

  function onPressCompareTeam(src_team_key: string, opp_team_key: string) {
    toCompareTeamScreen(navigation);
  }

  return (
    <LiveMatchScreen
      matchAPI={matchAPI}
      matchMeta={matchMeta}
      onPressCompareTeam={onPressCompareTeam}
    />
  );
}
