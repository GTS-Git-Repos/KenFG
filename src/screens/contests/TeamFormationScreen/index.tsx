import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {selectedMatch, userInfo} from '../../../store/selectors';
import {useIsScreenReady} from '../../../utils/customHoooks';
import CreateTeamLoading from './atoms/CreateTeamLoading';
import LoadFailedTeamFormation from './atoms/loadfailed.teamformation';
import TeamFormationScreen from './team.formation.screen';
import {useMatchPlayers} from './teamformation.workers';

export default function TeamFormationHOC() {
  const matchSelector: any = useSelector(selectedMatch);
  const userSelector: any = useSelector(userInfo);
  const isScreenReady = useIsScreenReady();

  const {players, playersAPI} = useMatchPlayers('bblt20_2021_g49', '1');

  useEffect(() => {
    if (players) {
      // console.log(players);
    }
  }, [players]);

  if (!isScreenReady || !playersAPI) {
    return <CreateTeamLoading text={``} />;
  }
  if (playersAPI && !players) {
    return <LoadFailedTeamFormation />;
  }

  return <TeamFormationScreen players={players} />;
}
