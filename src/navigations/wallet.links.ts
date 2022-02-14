// The file where wallet related navigation will be there
import {CommonActions} from '@react-navigation/native';

export const toWalletPage = (navigation: any, match_key: string) => {
  navigation.dispatch(
    CommonActions.navigate({
      name: 'Wallet',
    }),
  );
};

export const toRecentTransactions = (navigation: any, match_key: string) => {
  navigation.dispatch(
    CommonActions.navigate({
      name: 'TransactionListScreen',
    }),
  );
};

export const toManagePayments = (navigation: any, match_key: string) => {
  navigation.dispatch(
    CommonActions.navigate({
      name: 'ManagePaymentsScreen',
    }),
  );
};

export const toVerifyAccount = (navigation: any, match_key: string) => {
  navigation.dispatch(
    CommonActions.navigate({
      name: 'VerifyAccountScreen',
    }),
  );
};

// export const toReferral = (navigation: any, match_key: string) => {
//     navigation.dispatch(
//       CommonActions.navigate({
//         name: 'VerifyAccountScreen',
//       }),
//     );
//   };
