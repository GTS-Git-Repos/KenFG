// import {initialState as state} from './reducer';
import store from './';
import {minRoles} from '../constants/appContants';
const log = console.log;

export function isPlayerSelected(player_key: string) {
  const state = store.getState().team;
  const player = state.players.find((item: any) => item.key === player_key);
  if (player) {
    return true;
  } else {
    return false;
  }
}

export function isPlayerCanBeSelected(
  player_key: string,
  seasonal_role: string,
  team_key: string,
  rolesCountSelector: any,
) {
  const state = store.getState().team;
  const count = state.team_count;
  const block_list = state.block_list;

  const player = state.players.find((item: any) => item.key === player_key);
  if (player) {
    return true;
  } else if (block_list.includes(seasonal_role)) {
    return false;
  } else if (block_list.includes(team_key)) {
    return false;
  } else {
    return true;
  }
}

export function isPlayerCaptain(player_key: string) {
  const state = store.getState().team;
  if (player_key === state.cap_key) {
    return true;
  } else {
    return false;
  }
}

const isAnyRuleReachesMin = () => {
  return;
};

export function isPlayerViceCaptain(player_key: string) {
  const state = store.getState().team;
  if (player_key === state.vc_key) {
    return true;
  } else {
    return false;
  }
}

// export function isPlayerCaptain(player_key: string) {
//   const state = store.getState().team;
//   const player = state.players.find((item: any) => item.cap === );
//   if (player) {
//     return true;
//   } else {
//     return false;
//   }
// }
