import React from 'react';
import {View} from 'react-native';
import tailwind from '../../../../tailwind';
import {TopBar} from '../../../sharedComponents';
import VerifyInfoContent from './atoms/verify.info.content';
import Item from './molecules/Item';
const log = console.log;

interface PropTypes {
  userMeta: any;
  emailVerified: boolean;
  panCardVerified: boolean;
  bankAccountVerified: boolean;
  initiateEmailVerify(): any;
  initiatePanCardVerify(): any;
  initiateBankVerify(): any;
}

export default function VerifyAccountScreen(props: PropTypes) {
  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Verify Account'} />
      <VerifyInfoContent />
      <Item
        title={'Mobile Number'}
        value={props.userMeta.mobile}
        preverifiedvalue={'For joining contests'}
        verified={true}
        type={'mobile'}
        action={() => {}}
      />
      <Item
        title={'Email Address'}
        value={''}
        preverifiedvalue={'For more relevant fantasy sports'}
        verified={props.emailVerified}
        action={props.initiateEmailVerify}
        type={'email'}
      />
      <Item
        title={'PAN Card'}
        value={''}
        preverifiedvalue={'For Safety & Security'}
        verified={props.panCardVerified}
        type={'pancard'}
        action={props.initiatePanCardVerify}
      />
      <Item
        title={'Bank Account'}
        value={''}
        preverifiedvalue={'For Quick Withdrawals'}
        verified={props.bankAccountVerified}
        type={'bank'}
        action={props.initiateBankVerify}
      />
    </View>
  );
}
