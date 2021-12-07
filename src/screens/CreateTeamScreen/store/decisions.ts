import {initialState as state} from './reducer';
const log = console.log;

export function isPlayerCanBeSelectable(player_key: string) {
  console.log(state);
}

export function isPlayerSelected(player_key: string) {
  const player = state.players.find(item => item.key === player_key);
  if (player) {
    return true;
  } else {
    return false;
  }
}
