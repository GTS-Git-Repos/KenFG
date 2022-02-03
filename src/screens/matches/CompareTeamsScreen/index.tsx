import React, {useEffect, useState} from 'react';
import CompareTeamScreen from './compare.team.screen';
import mockCompare from '../../../constants/mocks/mockCompareTeam.json';
import {
  filterExistPlayers,
  totalTeamPoints,
  diffPlayersByTeam,
} from './compare.team.workers';

interface filterPlayersType {
  commanPlayers: Array<any>;
  diffPlayers: Array<any>;
}

export default function CompareTeam() {
  const [selected_team, setSelected_team] = useState<any>(null);
  const [op_team, setOp_team] = useState<any>(null);
  const [diffPlayers, setDiffPlayers] = useState<any>(null);

  const player1 = mockCompare[0].name;
  const player2 = mockCompare[1].name;
  const player_1_teams = mockCompare[0].teams;
  const player_2_teams = mockCompare[1].teams;

  useEffect(() => {
    const payload: any = mockCompare;
    const sel_team_key = payload[0].teams[0];
    const opp_team_key = payload[1].teams[0];

    const sel_team = payload[0][sel_team_key];

    const opp_team = payload[1][opp_team_key];

    const selectedPlayerKeys = sel_team.players.map((item: any) => {
      return item.key;
    });
    const oppPlayerKeys = opp_team.players.map((item: any) => {
      return item.key;
    });

    console.log('oppPlayerKeys', oppPlayerKeys);

    const sel_team_caps = {
      cap: payload[0][sel_team_key].cap,
      vc: payload[0][sel_team_key].vc,
    };
    const opp_team_caps = {
      cap: payload[1][opp_team_key].cap,
      vc: payload[1][opp_team_key].vc,
    };

    const points = totalTeamPoints(sel_team, opp_team);

    const filterPlayers: filterPlayersType = filterExistPlayers(
      sel_team,
      opp_team,
    );

    console.log(filterPlayers.diffPlayers);

    // const diffPlayers = diffPlayersByTeam(
    //   filterPlayers.diffPlayers,
    //   selectedPlayerKeys,
    //   oppPlayerKeys,
    // );
    // setDiffPlayers(diffPlayers);

    // console.log(diffPlayers);

    setSelected_team({
      team_key: sel_team_key,
      team_rank: payload[0][sel_team_key].rank,
      points: points[0],
    });
    setOp_team({
      team_key: opp_team_key,
      team_rank: payload[1][opp_team_key].rank,
      points: points[1],
    });
  }, []);

  return (
    <CompareTeamScreen
      f_1={player1}
      f_2={player2}
      f_1_teams={player_1_teams}
      f_2_teams={player_2_teams}
      selected_team={selected_team}
      op_team={op_team}
      diff_players={diffPlayers}
      comman_players={undefined}
    />
  );
}
