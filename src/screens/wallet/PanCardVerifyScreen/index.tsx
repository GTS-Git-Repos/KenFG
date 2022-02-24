import React, {useState} from 'react';
import {useMutation} from 'react-query';
import {initiatePaymentRemote} from '../../../remote/walletRemote';
import {errorBox, infoBox} from '../../../utils/snakBars';
import PanVerifyScreen from './pan.verify.screen';
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

  return <PanVerifyScreen />;
}
