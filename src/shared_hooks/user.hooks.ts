// user related custom hooks
import {useQuery} from 'react-query';
import {getNotificationRemote, getUserStatsRemote} from '../remote/userRemote';

export const useGetNotifications = (mobile: string) => {
  const {
    data: ntfi,
    isSuccess: ntfi_s,
    isError: ntfi_e,
    isFetching: ntfi_f,
    isLoading: ntfi_l,
    refetch: rfNtfi,
  } = useQuery(['notifications', mobile], getNotificationRemote, {
    notifyOnChangeProps: [
      'data',
      'isSuccess',
      'isLoading',
      'isError',
      'isFetching',
    ],
    cacheTime: 0,
  });
  return {ntfi, ntfi_s, ntfi_e, ntfi_f, ntfi_l, rfNtfi};
};

export const useGetUserStatsRemote = (mobile: string) => {
  const {
    data: userStat,
    isSuccess: us_s,
    isError: us_e,
    isFetching: us_f,
    isLoading: us_l,
    refetch: rf_us,
  } = useQuery(['user_stats', mobile], getUserStatsRemote, {
    notifyOnChangeProps: [
      'data',
      'isSuccess',
      'isLoading',
      'isError',
      'isFetching',
    ],
    cacheTime: 0,
  });
  return {userStat, us_s, us_e, us_f, us_l, rf_us};
};
