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
} from './actionTypes';
const log = console.log;

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

export const handleError = (payload: string) => ({
  type: HANDLE_ERROR,
  payload: payload,
});

export const updatePlayerAction = (payload: any) => {
  return async (dispatch: any) => {
    const maxRoles: any = {
      keeper: 4 - 1,
      batsman: 6 - 1,
      bowler: 4 - 1,
      all_rounder: 4 - 1,
    };
    try {
      const oldPlayerState = store.getState().team.players;
      const isPlayerExist = oldPlayerState.find(
        (item: any) => item.key === payload.key,
      );
      if (isPlayerExist) {
        const playerIndex = oldPlayerState.findIndex(
          (item: any) => item.key === payload.key,
        );
        oldPlayerState.splice(playerIndex, 1);
        const newPlayerState = [...oldPlayerState];
        dispatch(updatePlayer(newPlayerState));
        // update blocklist
        // is role slots filled

        const occupaidRoleSlots = oldPlayerState.filter(
          (item: any) => item.seasonal_role === isPlayerExist.seasonal_role,
        );
        // console.log('occupaidRoleSlots -->', occupaidRoleSlots.length);
        // console.log(
        //   'condition',
        //   maxRoles[isPlayerExist.seasonal_role] >= occupaidRoleSlots,
        // );
        if (maxRoles[isPlayerExist.seasonal_role] >= occupaidRoleSlots) {
          dispatch(updateBlockListAction(isPlayerExist.seasonal_role));
        }
      } else {
        const newPlayerState = [...oldPlayerState];
        const newObj = {...payload};
        newPlayerState.push(newObj);
        dispatch(updatePlayer(newPlayerState));
        // update blocklist

        const occupaidRoleSlots = oldPlayerState.filter(
          (item: any) => item.seasonal_role === newObj.seasonal_role,
        );
        console.log("mr",maxRoles[newObj.seasonal_role]);
        console.log('occupaidRoleSlots -->', occupaidRoleSlots.length);
        if (maxRoles[newObj.seasonal_role] === occupaidRoleSlots) {
          log('dang it')
          dispatch(updateBlockListAction(newObj.seasonal_role));
        }
      }
    } catch (err) {
      dispatch(handleError(`updatePlayerAction()`));
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
