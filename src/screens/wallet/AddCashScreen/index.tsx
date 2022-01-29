import React, {useState} from 'react';
import {useMutation} from 'react-query';
import {initiatePaymentRemote} from '../../../remote/walletRemote';
import {errorBox, infoBox} from '../../../utils/snakBars';
import AddCashScreen from './add.cash.screen';
import RNPgReactNativeSDK from 'react-native-pg-react-native-sdk';

export default function AddCashScreenHOC() {
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
        } else {
          console.log(parsedResponse);
          errorBox('Payment Failed !', 0);
        }
      });
    },
    onError: (err, vars) => {
      errorBox('Failed to create payment', 500);
    },
  });

  return (
    <AddCashScreen
      from={'1'}
      amount={amount}
      setAmount={setAmount}
      initiatePayment={initiatePayment}
    />
  );
}
