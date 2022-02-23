import React from 'react';

import {infoBox} from '../../../utils/snakBars';

import VerifyAccountScreen from './verify.account.screen';

export default function VerifyAccountHOC() {
  function initiateEmailVerify() {
    infoBox('Verification link has been sented to registered email', 0);
  }

  return <VerifyAccountScreen initiateEmailVerify={initiateEmailVerify} />;
}
