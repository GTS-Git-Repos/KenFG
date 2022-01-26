import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
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
  blockList,
  creditLeft,
  rolesCount,
  selectedMatch,
  userInfo,
} from '../../../store/selectors';
import {useCountDown, useIsScreenReady} from '../../../utils/customHoooks';
import CreateTeamLoading from './atoms/CreateTeamLoading';
import LoadFailedTeamFormation from './atoms/loadfailed.teamformation';
import TeamFormationScreen from './team.formation.screen';
import {useMatchPlayers} from './teamformation.workers';
import {Modalize} from 'react-native-modalize';
import {toPlayerProfile} from '../../../store/actions/navigationActions';
const log = console.log;

export default function TeamFormationHOC() {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const filterSheet = useRef<Modalize>();

  const [filters, setFilter] = useState<any>(null);
  const [sortByLowCredits, setSortByLowCredits] = useState<boolean>(false);

  const matchSelector: any = useSelector(selectedMatch);
  const userSelector: any = useSelector(userInfo);
  const blockListPlayers: any = useSelector(blockList);
  const countDown = useCountDown(matchSelector.start_at, false);

  const selectedPlayers: any = useSelector(allSelecdtedPlayers);
  const rolesCountSelector: any = useSelector(rolesCount);
  const availableCredits = useSelector(creditLeft);

  const isScreenReady = useIsScreenReady();

  const {players, playersAPI}: any = useMatchPlayers(
    matchSelector.match_key,
    userSelector.mobile,
  );

  useEffect(() => {
    dispatch(updateErrorMsgAction(null));
    dispatch(updateTeamAction([matchSelector.team_a, matchSelector.team_b]));

    if (route.params.mutation) {
      // log('TeamFormationParams -->', route.params.mutation);
    } else {
      dispatch(clearTeamAction());
    }
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

  const onPressPlayerProfile = (player_key: string, player_role: string) => {
    const player = players[0][player_role].find(
      (item: any) => item.key === player_key,
    );
    if (player) {
      toPlayerProfile(navigation, player);
    }
  };

  const navigateToTeamPreviewScreeen = () => {
    // it neeeds to be changed
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
        // console.log(route.params);
        // return
        navigation.navigate('CapSelectionScreen', {
          mutation: route.params.mutation,
        });
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
    return (
      <LoadFailedTeamFormation loading={false} text={''} actionText={''} />
    );
  }

  return (
    <TeamFormationScreen
      countDown={countDown}
      players={players}
      rolesCount={rolesCountSelector}
      creditsLeft={availableCredits}
      match={matchSelector}
      navigateToCapSelection={navigateToCapSelection}
      navigateToTeamPreviewScreeen={navigateToTeamPreviewScreeen}
      filterSheet={filterSheet}
      filters={filters}
      setFilter={setFilter}
      sortByLowCredits={sortByLowCredits}
      setSortByLowCredits={setSortByLowCredits}
      blockListPlayers={blockListPlayers}
      onPressPlayerProfile={onPressPlayerProfile}
    />
  );
}

/**
 * mandatory route params
 *
 * mutation:{edit:true,clone:false,team_key} || false
 *
 */
