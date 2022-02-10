import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  isFulMatchSelector,
  selectedMatch,
  userInfo,
} from '../../../store/selectors';
import {useGetTeams} from '../../../shared_hooks/contest.hooks';
import SwitchTeamScreen from './switch.team.screen';
import {SelectedMatchType} from '../../../types/match';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import {useMutation} from 'react-query';
import {switchTeamInContestRemote} from '../../../remote/contestRemote';
import {errorBox, infoBox} from '../../../utils/snakBars';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {FullScreenLoading} from '../../../sharedComponents';

export default function SwitchTeamHOC() {
  const navigation = useNavigation();
  const isScreenReady = useIsScreenReady();

  type RouteParams = {
    params: {
      contest_key: string;
      old_team_key: string;
      alreadyJoinedTeams: Array<any>;
    };
  };
  const [selectedTeam, setSelectedTeam] = useState('');

  const matchMeta: SelectedMatchType = useSelector(selectedMatch);
  const userMeta = useSelector(userInfo);
  const isFullMatch: boolean = useSelector(isFulMatchSelector);
  const route = useRoute<RouteProp<RouteParams, 'params'>>();

  const switchTeam = useMutation(switchTeamInContestRemote, {
    onSuccess: (response, vars, _) => {
      infoBox('Team Changed Succesfully !!', 1000);
      navigation.goBack();
    },
    onError: (error: any) => {
      errorBox('Failed to Switch', 500);
    },
  });

  useEffect(() => {
    setSelectedTeam(route.params.old_team_key);
  }, []);

  const {teams}: any = useGetTeams(
    matchMeta.match_key,
    userMeta.mobile,
    isFullMatch,
  );

  function onPressSwitchTeam() {
    switchTeam.mutate({
      match_key: matchMeta.match_key,
      contest_key: route.params.contest_key,
      old_team_key: route.params.old_team_key,
      new_team_key: selectedTeam,
      player_key: userMeta.mobile,
    });
  }

  if (isScreenReady === false || !teams) {
    return <FullScreenLoading title={'Switch Teams'} />;
  }

  return (
    <SwitchTeamScreen
      teams={teams}
      selectedTeam={selectedTeam}
      old_team_key={route.params.old_team_key}
      setSelectedTeam={setSelectedTeam}
      alreadyJoinedTeams={[]}
      onPressSwitchTeam={onPressSwitchTeam}
      switchTeam={switchTeam}
    />
  );
}
