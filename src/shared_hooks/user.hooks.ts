// user related custom hooks
import {useQuery} from 'react-query';
import {getNotificationRemote} from '../remote/userRemote';

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
  });
  return {ntfi, ntfi_s, ntfi_e, ntfi_f, ntfi_l, rfNtfi};
};
