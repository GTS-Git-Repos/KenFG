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

export const captainSelection = (player_key: any) => {
  return async (dispatch: any) => {
    try {
      const playersState = store.getState().team.players;
      const oldPlayerState = [...playersState];
      const isPlayerExist = oldPlayerState.find(
        (item: any) => item.key === player_key,
      );
      if (isPlayerExist) {
        // is cap already selected
        const isCapSelected = isPlayerExist.cap === true;
        console.log(isCapSelected);
        if (isCapSelected) {
          // remove captain ship
          let newObj = {...isPlayerExist};
          newObj.cap = false;
          newObj.vc = false;
          const index = oldPlayerState.findIndex(
            (item: any) => item.key === player_key,
          );
          if (index >= 0) {
            oldPlayerState.splice(index, 1, newObj);
            dispatch(updatePlayer(oldPlayerState));
          } else {
            throw 'not found';
          }
        } else {
          // add captain ship
          let newObj = {...isPlayerExist};
          newObj.cap = true;
          newObj.vc = false;
          const index = oldPlayerState.findIndex(
            (item: any) => item.key === player_key,
          );
          if (index >= 0) {
            oldPlayerState.splice(index, 1, newObj);
            dispatch(updatePlayer(oldPlayerState));
          } else {
            throw 'not found';
          }
        }
      } else {
        throw 'No Player found';
      }
    } catch (err) {
      dispatch(handleError(`updatePlayerAction()`));
    }
  };
};
