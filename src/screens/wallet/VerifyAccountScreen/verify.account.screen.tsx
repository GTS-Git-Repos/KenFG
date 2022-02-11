import React from 'react';
import {View, Text} from 'react-native';
import tailwind from '../../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {useNavigation} from '@react-navigation/native';
import {TopBar} from '../../../sharedComponents';
import InfoContent from './atoms/InfoContent';
import Item from './molecules/Item';
import assets from '../../../constants/assets_manifest';

// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function VerifyAccountScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Verify Account'} />
      <InfoContent />
      <View style={[tailwind('my-1')]}></View>
      <Item
        icon={assets.verify_mobile}
        title={'Mobile Number'}
        value={'+91 987654321'}
        preverifiedvalue={'For joining contests'}
        verified={true}
      />
      <Item
        icon={assets.verify_email}
        title={'Email Address'}
        value={'+91 987654321'}
        preverifiedvalue={'For more relevant fantasy sports'}
        verified={false}
      />
      <Item
        icon={assets.verify_pancard}
        title={'PAN Card'}
        value={'+91 987654321'}
        preverifiedvalue={'For Safety & Security'}
        verified={false}
      />
      <Item
        icon={assets.verify_bank}
        title={'Bank Account'}
        value={'+91 987654321'}
        preverifiedvalue={'For Quick Withdrawals'}
        verified={false}
      />
    </View>
  );
}
