import store from '../store/';
import {occupaid_role_count} from './decision';

export const createTeamObjCreator = () => {
  const UserInfo = store.getState().user.user_info;
  const Players = store.getState().team.players;
  const Teams = store.getState().team.teams;
  const c_key = store.getState().team.cap_key;
  const selected_match = store.getState().app.selected_match;
  const selected_contest = store.getState().app.selected_contest;
  const vc_key = store.getState().team.vc_key;

  let finalPlayers: any = [];

  Players.forEach((item: any) => {
    let obj = {...item};
    delete obj.selected_by;
    delete obj.recent_performance;
    finalPlayers.push(obj);
  });

  return {
    match_key: selected_match.match_key,
    player_key: UserInfo?.mobile,
    access_key: UserInfo?.mobile,
    team: {
      cap_key: c_key,
      vc_key: vc_key,
      team_a: Teams[0],
      team_b: Teams[1],
      players: finalPlayers,
    },
  };
};
