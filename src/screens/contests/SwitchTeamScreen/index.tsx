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
import {filter} from 'lodash';

type RouteParams = {
  params: {
    contest_key: string;
    old_team_key: string;
    existedTeams: Array<any>;
  };
};

export default function SwitchTeamHOC() {
  const route = useRoute<RouteProp<RouteParams, 'params'>>();

  const navigation = useNavigation();
  const isScreenReady = useIsScreenReady();

  const [selectedTeam, setSelectedTeam] = useState('');
  const [availableTeams, setAvailableTeams] = useState<any>([]);
  const [unavailableTeams, setUnavailableTeams] = useState<any>([]);

  const matchMeta: SelectedMatchType = useSelector(selectedMatch);
  const userMeta = useSelector(userInfo);
  const isFullMatch: boolean = useSelector(isFulMatchSelector);

  const {teams}: any = useGetTeams(
    matchMeta.match_key,
    userMeta.mobile,
    isFullMatch,
  );

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
    if (teams) {
      setSelectedTeam(route.params.old_team_key);

      const existedTeams = route.params.existedTeams;
    
      const availableTeams = [];
      const unavailableTeams = [];
      for (const team of teams) {
        const isExisted = existedTeams.includes(team.team_key);
        if (isExisted) {
          unavailableTeams.push(team);
        } else {
          availableTeams.push(team);
        }
      }
      setAvailableTeams(availableTeams);
      setUnavailableTeams(unavailableTeams);
      // const unavailableTeams = filter(teams,)
    }
  }, [teams]);

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
      availableTeams={availableTeams}
      unavailableTeams={unavailableTeams}
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
