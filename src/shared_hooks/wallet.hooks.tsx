// A place where a wallet related hooks all are placed

import {useMutation, useQuery} from 'react-query';
import {initiatePaymentRemote} from '../remote/walletRemote';

// export const useInitPayment = () => {
//   const {isLoading, mutate} = useMutation(newTodo, initiatePaymentRemote);
//   // const {
//   //   data: teams,
//   //   isSuccess: teamsAPI,
//   //   isFetching: teamsAPILive,
//   //   refetch: refetchTeams,
//   // } = useQuery(['teams', match_key, user_id], initiatePaymentRemote, {
//   //   notifyOnChangeProps: ['data', 'isSuccess', 'isFetching'],
//   // });
//   return {isLoading, mutate, teamsAPILive, refetchTeams};
// };
