import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {errorBox} from '../../../utils/snakBars';
import {
  clearTeamAction,
  saveAllPlayersAction,
  updateCreditsAction,
  updateErrorMsgAction,
  updateTeamAction,
  updateTeamCountAction,
} from '../../../store/actions/teamActions';
import {
  allSelecdtedPlayers,
  creditLeft,
  rolesCount,
  selectedMatch,
  userInfo,
} from '../../../store/selectors';
import {useIsScreenReady} from '../../../utils/customHoooks';
import CreateTeamLoading from './atoms/CreateTeamLoading';
import LoadFailedTeamFormation from './atoms/loadfailed.teamformation';
import TeamFormationScreen from './team.formation.screen';
import {useMatchPlayers} from './teamformation.workers';

export default function TeamFormationHOC() {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const matchSelector: any = useSelector(selectedMatch);
  const userSelector: any = useSelector(userInfo);

  const selectedPlayers: any = useSelector(allSelecdtedPlayers);
  const rolesCountSelector: any = useSelector(rolesCount);
  const availableCredits = useSelector(creditLeft);

  const isScreenReady = useIsScreenReady();

  const {players, playersAPI} = useMatchPlayers(
    matchSelector.match_key,
    userSelector.mobile,
  );

  useEffect(() => {
    if (route?.params?.from === 1) {
      // Dont clear its from clone or edit
    } else {
      // dispatch(clearTeamAction());
    }
    dispatch(updateErrorMsgAction(null));
    dispatch(updateTeamAction([matchSelector.team_a, matchSelector.team_b]));
  }, []);

  useEffect(() => {
    if (players) {
      dispatch(saveAllPlayersAction(players));
    }
  }, [players]);

  useEffect(() => {
    dispatch(updateTeamCountAction(rolesCountSelector));
    dispatch(updateCreditsAction(availableCredits));
  }, [selectedPlayers]);

  const navigateToTeamPreviewScreeen = () => {
    navigation.navigate('TeamPreviewScreen', {
      from: 1,
      keepers: selectedPlayers.filter(
        (item: any) => item.seasonal_role === 'keeper',
      ),
      batsman: selectedPlayers.filter(
        (item: any) => item.seasonal_role === 'batsman',
      ),
      all_rounder: selectedPlayers.filter(
        (item: any) => item.seasonal_role === 'all_rounder',
      ),
      bowler: selectedPlayers.filter(
        (item: any) => item.seasonal_role === 'bowler',
      ),
      cap_key: 1,
      vc_key: 1,
      team_a: {
        key: matchSelector.team_a,
        count: rolesCountSelector[matchSelector.team_a],
      },
      team_b: {
        key: matchSelector.team_b,
        count: rolesCountSelector[matchSelector.team_b],
      },
      credits_left: availableCredits,
    });
  };

  const navigateToCapSelection = () => {
    try {
      if (selectedPlayers.length === 11) {
        navigation.navigate('CapSelectionScreen'),
          {
            match_key: !route?.params?.match_key,
          };
      } else {
        throw 'Team requires total 11 players';
      }
    } catch (err: any) {
      errorBox(err);
    }
  };

  if (!isScreenReady || !playersAPI) {
    return <CreateTeamLoading text={``} />;
  }
  if (playersAPI && !players) {
    return <LoadFailedTeamFormation />;
  }

  return (
    <TeamFormationScreen
      players={players}
      rolesCount={rolesCountSelector}
      creditsLeft={availableCredits}
      match={matchSelector}
      navigateToCapSelection={navigateToCapSelection}
      navigateToTeamPreviewScreeen={navigateToTeamPreviewScreeen}
    />
  );
}
