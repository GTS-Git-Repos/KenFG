import React, {useState} from 'react';
import RNPgReactNativeSDK from 'react-native-pg-react-native-sdk';
import {useMutation} from 'react-query';
import {errorBox} from '../../../utils/snakBars';
import PaymentOptionScreen from './payment.options.screen';
import {initiatePaymentRemote} from '../../../remote/walletRemote';
import {useSelector} from 'react-redux';
import {appConstantsSelector} from '../../../store/selectors';

export default function AddCashScreenHOC() {
  
  const appConstant = useSelector(appConstantsSelector);

  console.log(appConstant);
  

  const initiatePayment = useMutation(initiatePaymentRemote, {
    onSuccess: (data, vars, context) => {
      const map: any = {
        orderId: `${data.orderId}`,
        orderAmount: `${1000}`,
        orderCurrency: 'INR',
        appId: '122224715b8a570ce3b9253a922221',
        tokenData: data.cftoken,
        orderNote: 'testtesttest ',
        notifyUrl: 'https://test.gocashfree.com/notify',
        customerName: 'Cashfree User',
        customerPhone: '9999999999',
        customerEmail: 'cashfree@cashfree.com',
      };
      RNPgReactNativeSDK.startPaymentWEB(map, 'TEST', result => {
        console.log(result);
      });
    },
    onError: (err, vars) => {
      errorBox('Failed to create payment', 500);
    },
  });

  const [selected_payment, setSelectedPayment] = useState<any>(null);

  function changePayment(option: number): any {
    setSelectedPayment(option);
  }

  function proceedToCashFree() {
    if (!selected_payment) {
      errorBox('Please select any payment option', 0);
    }
    initiatePayment.mutate({
      order_amount: 1000,
      player_key: '9876543210',
    });
    return;
  }

  return (
    <PaymentOptionScreen
      selected_payment={selected_payment}
      changePayment={changePayment}
      proceedToCashFree={proceedToCashFree}
      initiatePayment={initiatePayment}
    />
  );
}
