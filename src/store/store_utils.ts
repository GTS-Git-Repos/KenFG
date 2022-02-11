// import {initialState as state} from './reducer';
import store from './';
import {
  PLAYER_ALREADY_SELECTED,
  PLAYER_CAN_BE_SELECTED,
  PLAYER_DISABLED,
} from '../constants/appContants';
import {errorBox} from '../utils/snakBars';
const log = console.log;

export function isPlayerSelected(player_key: string) {
  // DEPRECATED
  errorBox('DEPRECATED isPlayerSelected ',100);
  const state = store.getState().team;
  const player = state.players.find((item: any) => item.key === player_key);
  if (player) {
    return true;
  } else {
    return false;
  }
}

export function currentPlayerStatus(
  player_key: string,
  blockListPlayers: Array<string>,
) {
  // is player already selected
  const {players} = store.getState().team;
  const isExists = players.find((item: any) => item.key === player_key);
  if (isExists) {
    return PLAYER_ALREADY_SELECTED;
  }
  // is in blocklist
  const isInBlocklist = blockListPlayers.find(
    (item: any) => item === player_key,
  );
  if (isInBlocklist) {
    return PLAYER_DISABLED;
  } else {
    return PLAYER_CAN_BE_SELECTED;
  }
}

export function sumOfMustNeedToFillSlots(team_count: any) {
  let total = 0;
  if (team_count['keeper'].must_need > 0) {
    total = total + team_count['keeper'].must_need;
  }
  if (team_count['batsman'].must_need > 0) {
    total = total + team_count['batsman'].must_need;
  }
  if (team_count['all_rounder'].must_need > 0) {
    total = total + team_count['all_rounder'].must_need;
  }
  if (team_count['bowler'].must_need > 0) {
    total = total + team_count['bowler'].must_need;
  }
  return total;
}

export function isPlayerCaptain(player_key: string) {
  const state = store.getState().team;
  if (player_key === state.cap_key) {
    return true;
  } else {
    return false;
  }
}

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
