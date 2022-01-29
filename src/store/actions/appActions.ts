import {
  HANDLE_ERROR,
  UPDATE_SELECTED_MATCH,
  UPDATE_JOINCONTEST_REQUEST,
} from './actionTypes';

interface JoinContestRequestShape {
  contestKey: string;
  entryAmount: string;
  maxTeam: string;
}

export const updateAppError = (payload: string) => ({
  type: HANDLE_ERROR,
  payload,
});

export const updateSelectedMatchAction = (payload: any) => ({
  type: UPDATE_SELECTED_MATCH,
  payload,
});

export const joinContestRequestAction = (payload: JoinContestRequestShape) => ({
  type: UPDATE_JOINCONTEST_REQUEST,
  payload,
});
