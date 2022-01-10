// import {initialState as state} from './reducer';
import store from './';
import {
  PLAYER_ALREADY_SELECTED,
  PLAYER_CAN_BE_SELECTED,
  PLAYER_DISABLED,
} from '../constants/appContants';
const log = console.log;

export function isPlayerSelected(player_key: string) {
  // DEPRECATED
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
  seasonal_role: string,
  team_key: string,
): number {
  try {
    const {all_players, players, credits_left, team_count} =
      store.getState().team;
    const isExists = players.find((item: any) => item.key === player_key);
    // is player already selected
    if (isExists) {
      return PLAYER_ALREADY_SELECTED;
    }
    // is 11 players is selected
    if (players.length === 11) {
      throw '11 Players selected Tap Continue';
    }
    // is one of the team reaches it's maximum
    const teamsSlot = players.filter(
      (item: any) => item.team_key === team_key,
    ).length;
    if (teamsSlot >= 7) {
      throw 'Maximum 7 members only per team';
    }
    // is credits not enough
    const inputPlayer = all_players[0][seasonal_role].find(
      (item: any) => item.key === player_key,
    );
    if (inputPlayer.credits > credits_left) {
      throw 'Credits not enough';
    }

    return PLAYER_CAN_BE_SELECTED;
  } catch (err) {
    console.log(err);
    return PLAYER_DISABLED;
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
