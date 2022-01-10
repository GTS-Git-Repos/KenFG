import {findARoleNeedToFilled} from '../../workers/decision';
import store from '../';
import {
  UPDATE_PLAYERS,
  HANDLE_ERROR,
  UPDATE_CREDITS,
  UPDATE_TEAM_COUNT,
  UPDATE_CAPTAIN,
  UPDATE_VC_CAPTAIN,
  CLEAR_TEAM,
  UPDATE_BLOCKLIST,
  UPDATE_ERROR_MESSAGE,
  SAVE_ALL_PLAYERS,
  UPDATE_TEAM,
} from './actionTypes';

import {sumOfMustNeedToFillSlots} from '../store_utils';
const log = console.log;

export const saveAllPlayersAction = (payload: any) => ({
  type: SAVE_ALL_PLAYERS,
  payload,
});
export const updatePlayer = (payload: any) => ({
  type: UPDATE_PLAYERS,
  payload,
});
export const updateBlockListAction = (payload: any) => ({
  type: UPDATE_BLOCKLIST,
  payload,
});

export const updateTeamCountAction = (payload: any) => ({
  type: UPDATE_TEAM_COUNT,
  payload,
});

export const updateCreditsAction = (payload: number) => ({
  type: UPDATE_CREDITS,
  payload,
});

export const updateCaptain = (payload: number) => ({
  type: UPDATE_CAPTAIN,
  payload: payload,
});

export const updateVCaptain = (key: string) => ({
  type: UPDATE_VC_CAPTAIN,
  payload: key,
});

export const clearTeamAction = () => ({
  type: CLEAR_TEAM,
});

export const updateErrorMsgAction = (payload: any) => ({
  type: UPDATE_ERROR_MESSAGE,
  payload: payload,
});
export const handleError = (payload: string) => ({
  type: HANDLE_ERROR,
  payload: payload,
});

export const updateTeamAction = (payload: any) => ({
  type: UPDATE_TEAM,
  payload,
});

export const updatePlayerAction = (payload: any) => {
  return async (dispatch: any, getState: any) => {
    try {
      dispatch(updateErrorMsgAction(null));

      const {all_players, players, credits_left, team_count} = getState().team;

      const isExists = players.findIndex(
        (item: any) => item.key === payload.key,
      );
      if (isExists !== -1) {
        // remove that player
        players.splice(isExists, 1);
        const newPlayerState = [...players];
        dispatch(updatePlayer(newPlayerState));
        return;
      }

      const player = all_players[0][payload.role].find(
        (item: any) => item.key === payload.key,
      );

      if (players.length === 11) {
        throw '11 Players selected Tap Continue';
      }

      const teamsSlot = players.filter(
        (item: any) => item.team_key === player.team_key,
      ).length;
      if (teamsSlot >= 7) {
        throw 'Maximum 7 members only per team';
      }
      if (player.credits > credits_left) {
        throw 'Not enough credits';
      }
      if (team_count[payload.role].occupaid === team_count[payload.role].max) {
        throw `Maximum ${team_count[payload.role].max} ${payload.role} only`;
      }
      let openSlots = 11 - players.length;
      // sum all the must need to fil slots
      let must_need = sumOfMustNeedToFillSlots(team_count);
      // check is the must need fill slot greater than open slots DENY the insertion or else allow to increment
      log('open slots', openSlots);
      log('must_need', must_need);
      // 3 less than 2
      // log(team_count)
      // log(team_count[payload.role].must_need < 0);
      if (openSlots <= must_need) {
        if (team_count[payload.role].must_need <= 0) {
          const message = findARoleNeedToFilled();
          // log('message', message);
          throw message;
        }
      }
      const newPlayerState = [...players];
      const playerObj = {...player};
      delete playerObj.recent_performance;
      newPlayerState.push(playerObj);
      dispatch(updatePlayer(newPlayerState));
      return;
    } catch (err: any) {
      const {error_message} = getState().team;
      const newObj = {...error_message};
      newObj.message = err;
      dispatch(updateErrorMsgAction(newObj));
      return;
    }
  };
};

export const captainSelection = (player_key: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(updateCaptain(player_key));
    } catch (err) {
      dispatch(handleError(`captainSelection()`));
    }
  };
};

export const vicecaptainSelectionAction = (player_key: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(updateVCaptain(player_key));
    } catch (err) {
      dispatch(handleError(`vicecaptainSelectionAction()`));
    }
  };
};
