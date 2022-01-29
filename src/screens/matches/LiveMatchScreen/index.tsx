import React from 'react';
import LiveMatchScreen from './live.match.screen';
import {useMatchMeta} from '../../../shared_hooks/contest.hooks';
import {useRoute} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {userInfo} from '../../../store/selectors';

export default function LiveMatchHOC() {
  const route = useRoute<any>();
  const userMeta: any = useSelector<any>(userInfo);

  const {matchMeta, matchAPI}: any = useMatchMeta(
    route.params.match_key,
    userMeta.mobile,
  );

  return <LiveMatchScreen matchAPI={matchAPI} matchMeta={matchMeta} />;
}
