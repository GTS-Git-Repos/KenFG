// import {initialState as state} from './reducer';
import store from './';

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
  seasonal_role: string,
  team_key: string,
  player_key: string,
) {
  const state = store.getState().team;
  // is all players in blocklist
  if (state.blocklist.includes('all')) {
    return false;
    // if role is blocked
  } else if (state.blocklist.includes(seasonal_role)) {
    return false;
    // is team is blocked
  } else if (state.blocklist.includes(team_key)) {
    return false;
    // is player is blocked
  } else if (state.blocklist.includes(player_key)) {
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
