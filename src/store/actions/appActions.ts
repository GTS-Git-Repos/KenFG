import {
  SAVE_IP,
  UPDATE_SELECTED_MATCH,
  UPDATE_SELECTED_CONTEST,
} from './actionTypes';

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
