import React, {useEffect, useState} from 'react';
import CompareTeamScreen from './compare.team.screen';
import mockCompare from '../../../constants/mocks/mockCompareTeam.json';
import {
  diffPlayersByTeam,
  filterExistPlayers,
  totalTeamPoints,
} from './compare.team.workers';
import {useCompareTeams} from '../../../shared_hooks/match_hooks';

interface setCompareTeamType {
  src_player: string;
  opp_player: string;
  src_playerTeams: Array<string>;
  opp_playerTeams: Array<string>;
  srcTeam: TeamType;
  opTeam: TeamType;
}

interface TeamType {
  team_key: string;
  rank: string;
  points: number;
  players: Array<any>;
  cap_key: string;
  vc_key: string;
}

interface filterPlayersType {
  commanPlayers: Array<any>;
  diffPlayers: Array<any>;
}

export default function CompareTeamHOC() {
  const {compareAPI, compareMeta}: any = useCompareTeams('match', '1');

  const [loading, setLoading] = useState<any>(false);

  const [compareTeam, setCompareTeam] = useState<setCompareTeamType | null>(
    null,
  );

  const [diffPlayers, setDiffPlayers] = useState<any>(null);

  useEffect(() => {
    if (compareMeta) {
      const sel_team_key = compareMeta[0].teams[0];
      const opp_team_key = compareMeta[1].teams[0];

      const points = totalTeamPoints(
        compareMeta[0][sel_team_key],
        compareMeta[1][sel_team_key],
      );

      setCompareTeam({
        src_player: compareMeta[0].name,
        src_playerTeams: compareMeta[0].teams,
        opp_player: compareMeta[1].name,
        opp_playerTeams: compareMeta[1].teams,
        srcTeam: {
          team_key: sel_team_key,
          rank: compareMeta[0][sel_team_key].rank,
          points: points[0],
          cap_key: compareMeta[0][sel_team_key].cap,
          vc_key: compareMeta[0][sel_team_key].vc,
          players: compareMeta[0][sel_team_key].players,
        },
        opTeam: {
          team_key: opp_team_key,
          rank: compareMeta[1][opp_team_key].rank,
          points: points[1],
          cap_key: compareMeta[1][opp_team_key].cap,
          vc_key: compareMeta[1][opp_team_key].vc,
          players: compareMeta[1][opp_team_key].players,
        },
      });
    }
  }, [compareMeta]);

  useEffect(() => {
    const srcTeamKeys = compareTeam?.srcTeam.players.map(
      (item: any) => item.key,
    );

    const diffrentPlayers = diffPlayersByTeam(
      compareTeam?.srcTeam.players,
      compareTeam?.opTeam.players,
      srcTeamKeys,
    );
    // console.log('diffrentPlayers',diffrentPlayers);
  }, [compareTeam]);

  if (!compareMeta) {
    return null;
  }

  return (
    <CompareTeamScreen
      compareTeam={compareTeam}
      diff_players={diffPlayers}
      comman_players={[]}
      loading={loading}
    />
  );
}
