import {
  findARoleNeedToFilled,
  isAnyRoleReachedMaxSlots,
} from '../../workers/decision';
import {rolesConstraints} from '../../constants/appContants';
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
} from './actionTypes';
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

export const updatePlayerAction = (payload: any) => {
  return async (dispatch: any, getState: any) => {
    try {
      dispatch(updateErrorMsgAction(null));

      const {all_players, players, credits_left} = getState().team;

      const isExists = players.findIndex(
        (item: any) => item.key === payload.key,
      );
      if (isExists !== -1) {
        players.splice(isExists, 1);
        const newPlayerState = [...players];
        dispatch(updatePlayer(newPlayerState));
        return;
        // throw 'remove that player';
      }

      const player = all_players[0][payload.role].find(
        (item: any) => item.key === payload.key,
      );
      // log(player);

      const teamsSlot = players.filter(
        (item: any) => item.team_key === player.team_key,
      ).length;
      if (teamsSlot >= 7) {
        throw 'Maximum 7 members only per team';
      }
      if (player.credits > credits_left) {
        throw 'Not enough credits';
      }

      // is any one of the role reached maximum slot
      const maxSlotsExist = isAnyRoleReachedMaxSlots();
      const roleSlots = players.filter(
        (item: any) => item.seasonal_role === payload.role,
      ).length;

      if (maxSlotsExist) {
        // check with min roles
        if (rolesConstraints[payload.role].min <= roleSlots) {
          const message = findARoleNeedToFilled();
          throw message;
        } else {
          const newPlayerState = [...players];
          newPlayerState.push(player);
          dispatch(updatePlayer(newPlayerState));
          return;
        }
      } else {
        // check with max roles
        if (rolesConstraints[payload.role].max <= roleSlots) {
          throw `Maximum ${rolesConstraints[payload.role].max} ${
            payload.role
          } only`;
        }

        // check all are passed add that player
        const newPlayerState = [...players];
        newPlayerState.push(player);
        // log(new)
        dispatch(updatePlayer(newPlayerState));
        return;
        // throw '1'
      }
    } catch (err: string) {
      const {error_message} = getState().team;
      let newObj = {...error_message};
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
