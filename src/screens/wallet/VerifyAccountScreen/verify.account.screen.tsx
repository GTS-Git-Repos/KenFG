import React from 'react';
import {View, StyleSheet} from 'react-native';
import tailwind from '../../../../tailwind';
import {TopBar} from '../../../sharedComponents';
import VerifyInfoContent from './atoms/verify.info.content';
import Item from './molecules/Item';
const log = console.log;
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';

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
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[ss.root, dT ? clr.bgd1 : clr.bgGray]}>
      <TopBar text={'Verify Account'} />
      <VerifyInfoContent dT={dT} />
      <Item
        dT={dT}
        title={'Mobile Number'}
        value={props.userMeta.mobile}
        preverifiedvalue={'For joining contests'}
        verified={true}
        type={'mobile'}
        action={() => {}}
      />
      <Item
        dT={dT}
        title={'Email Address'}
        value={''}
        preverifiedvalue={'For more relevant fantasy sports'}
        verified={props.emailVerified}
        action={props.initiateEmailVerify}
        type={'email'}
      />
      <Item
        dT={dT}
        title={'PAN Card'}
        value={''}
        preverifiedvalue={'For Safety & Security'}
        verified={props.panCardVerified}
        type={'pancard'}
        action={props.initiatePanCardVerify}
      />
      <Item
        dT={dT}
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

const ss = StyleSheet.create({
  root: {
    height: '100%',
  },
});
