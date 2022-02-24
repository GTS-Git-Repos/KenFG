import React from 'react';
import {useSelector} from 'react-redux';
import {userInfo} from '../../../store/selectors';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';

import {infoBox} from '../../../utils/snakBars';

import VerifyAccountScreen from './verify.account.screen';
import {useNavigation} from '@react-navigation/native';

export default function VerifyAccountHOC() {
  const navigation = useNavigation<any>();
  const userMeta = useSelector(userInfo);

  function initiateEmailVerify() {
    infoBox('Verification link has been sented to registered email', 0);
  }
  function initiatePanCardVerify() {
    navigation.navigate('PanCardVerifyScreen');
  }
  function initiateBankVerify() {
    infoBox('Verification link has been sented to registered email', 0);
  }

  return (
    <VerifyAccountScreen
      userMeta={userMeta}
      emailVerified={false}
      panCardVerified={false}
      bankAccountVerified={false}
      initiateEmailVerify={initiateEmailVerify}
      initiatePanCardVerify={initiatePanCardVerify}
      initiateBankVerify={initiateBankVerify}
    />
  );
}
