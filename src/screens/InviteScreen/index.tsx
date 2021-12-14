import React from 'react';
import {View, Text} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';
// import assets from 'assets';
import {TopBar} from '../../sharedComponents';
import InfoContent from './atoms/InfoContent';
import UserCode from './molecules/UserCode';
import ReferContacts from './atoms/ReferContacts';
import SocialMediaShare from './atoms/SocialMediaShare';

// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function InviteScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text="Invite Friends" />
      <InfoContent />
      <View style={[tailwind('my-1')]} />
      <View style={[tailwind('bg-dark-3 p-4')]}>
        <UserCode />
        <ReferContacts />
        <SocialMediaShare />
      </View>
    </View>
  );
}
