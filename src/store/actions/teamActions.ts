import store from '../';
import {
  UPDATE_PLAYERS,
  HANDLE_ERROR,
  UPDATE_CREDITS,
  UPDATE_TEAM_COUNT,
} from './actionTypes';

export const updatePlayer = (payload: any) => ({
  type: UPDATE_PLAYERS,
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
export const handleError = (payload: string) => ({
  type: HANDLE_ERROR,
});

export const updatePlayerAction = (payload: any) => {
  return async (dispatch: any) => {
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
      } else {
        const newPlayerState = [...oldPlayerState];
        const newObj = {...payload, cap: false, vc: false};
        newPlayerState.push(newObj);
        dispatch(updatePlayer(newPlayerState));
      }
    } catch (err) {
      dispatch(handleError(`updatePlayerAction()`));
    }
  };
};
