import {
    SAVE_IP
} from './actionTypes';


export const saveIpAction = (payload: string) => ({
    type: SAVE_IP,
    payload,
});
