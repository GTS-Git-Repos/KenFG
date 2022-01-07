import store from '../store/';
import {occupaid_role_count} from './decision';

export const createTeamObjCreator = () => {
  const UserInfo = store.getState().user.user_info;
  const Players = store.getState().team.players;
  const Teams = store.getState().team.teams;
  const captain = store.getState().team.cap_key;
  const selected_match = store.getState().app.selected_match;
  const selected_contest = store.getState().app.selected_contest;
  const vc = store.getState().team.vc_key;

  const {keeper, batsman, all_rounder, bowler} = occupaid_role_count();

  let finalPlayers: any = [];

  Players.forEach((item: any) => {
    let obj = {...item};
    delete obj.selected_by;
    finalPlayers.push(obj);
  });

  const c_player = Players.find((item: any) => item.key === captain);
  const vc_player = Players.find((item: any) => item.key === vc);

  // console.log('c_player',c_player)

  return {
    match_key: selected_match.match_key,
    // contest_key: selected_contest,
    player_key: UserInfo?.mobile ? UserInfo.mobile : '9876543210',
    access_key: UserInfo?.mobile ? UserInfo.mobile : '9876543210',
    players: finalPlayers,
    captain: {
      key: c_player.key,
      name: c_player.name,
      team_key: c_player.team_key,
    },
    vc_captain: {
      key: vc_player.key,
      name: vc_player.name,
      team_key: vc_player.team_key,
    },
    team_a: Teams[0],
    team_b: Teams[1],
    keepers: keeper,
    batters: batsman,
    all_rounders: all_rounder,
    bowlers: bowler,
  };
};
