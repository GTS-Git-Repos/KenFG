import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {selectedMatch, userInfo} from '../../../store/selectors';
import {useGetTeams} from '../../../shared_hooks/contest.hooks';
import SwitchTeamScreen from './switch.team.screen';
import {SelectedMatchType} from '../../../types/match';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import {useMutation} from 'react-query';
import {switchTeamInContestRemote} from '../../../remote/matchesRemote';
import {errorBox, infoBox} from '../../../utils/snakBars';

export default function SwitchTeamHOC() {
  const navigation = useNavigation();
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
  const route = useRoute<RouteProp<RouteParams, 'params'>>();

  const switchTeam = useMutation(switchTeamInContestRemote, {
    onSuccess: (response, vars, _) => {
      infoBox('Team Changed Succesfully !!', 600);
      navigation.goBack();
    },
    onError: (error: any) => {
      errorBox('Failed to Switch', 100);
    },
  });

  useEffect(() => {
    // console.log('route', route.params.old_team_key);
    setSelectedTeam(route.params.old_team_key);
  }, []);

  const {teams}: any = useGetTeams(matchMeta.match_key, userMeta.mobile);

  function onPressSwitchTeam() {
    switchTeam.mutate({
      match_key: matchMeta.match_key,
      contest_key: route.params.contest_key,
      old_team_key: route.params.old_team_key,
      new_team_key: selectedTeam,
      player_key: userMeta.mobile,
    });
  }

  return (
    <SwitchTeamScreen
      teams={teams}
      selectedTeam={selectedTeam}
      old_team_key={route.params.old_team_key}
      setSelectedTeam={setSelectedTeam}
      alreadyJoinedTeams={[]}
      onPressSwitchTeam={onPressSwitchTeam}
    />
  );
}
