import {
  SAVE_IP,
  UPDATE_SELECTED_MATCH,
  UPDATE_SELECTED_CONTEST,
  UPDATE_JOINCONTEST_REQUEST,
} from './actionTypes';

interface JoinContestRequestShape {
  contestKey: string;
  entryAmount: string;
  maxTeam: string;
}

export const saveIpAction = (payload: string) => ({
  type: SAVE_IP,
  payload,
});

export const updateSelectedMatchAction = (payload: any) => ({
  type: UPDATE_SELECTED_MATCH,
  payload,
});

export const updateSelectedContestAction = (payload: any) => ({
  type: UPDATE_SELECTED_CONTEST,
  payload,
});

export const joinContestRequestAction = (payload: JoinContestRequestShape) => ({
  type: UPDATE_JOINCONTEST_REQUEST,
  payload,
});
