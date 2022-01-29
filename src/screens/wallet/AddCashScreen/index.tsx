import React, {useState} from 'react';
import {useMutation} from 'react-query';
import {initiatePaymentRemote} from '../../../remote/walletRemote';
import {errorBox, infoBox} from '../../../utils/snakBars';
import AddCashScreen from './add.cash.screen';
import RNPgReactNativeSDK from 'react-native-pg-react-native-sdk';
import {updateWalletRemote} from '../../../remote/userRemote';
import {useDispatch, useSelector} from 'react-redux';
import {userInfo} from '../../../store/selectors';
import {updateUserInfo} from '../../../store/actions/userAction';
import {useNavigation} from '@react-navigation/core';

export default function AddCashScreenHOC() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userMeta = useSelector(userInfo);
  const [amount, setAmount] = useState('');

  const initiatePayment = useMutation(initiatePaymentRemote, {
    onSuccess: (data, vars, context) => {
      const map: any = {
        orderId: `${data.orderId}`,
        orderAmount: `${amount}`,
        orderCurrency: 'INR',
        appId: '122224715b8a570ce3b9253a922221',
        tokenData: data.cftoken,
        orderNote: 'testtesttest ',
        customerName: 'Cashfree User',
        customerPhone: '9999999999',
        customerEmail: 'cashfree@cashfree.com',
      };
      RNPgReactNativeSDK.startPaymentWEB(map, 'TEST', (result: any) => {
        const parsedResponse = JSON.parse(result);
        if (parsedResponse.txStatus === 'SUCCESS') {
          infoBox('Transaction success', 100);
          updateWallet.mutate({...parsedResponse, player_key: userMeta.mobile});
        } else {
          errorBox('Payment Failed !', 0);
        }
      });
    },
    onError: (err, vars) => {
      errorBox('Failed to create payment', 500);
    },
  });

  const updateWallet = useMutation(updateWalletRemote, {
    onSuccess: (data, vars, context) => {
      dispatch(updateUserInfo(userMeta.mobile));
      infoBox('Wallet updated', 200);
      navigation.goBack();
    },
    onError: (err, vars) => {
      errorBox('Failed to create payment', 200);
    },
  });

  return (
    <AddCashScreen
      from={'1'}
      amount={amount}
      setAmount={setAmount}
      initiatePayment={initiatePayment}
      updateWallet={updateWallet}
    />
  );
}
