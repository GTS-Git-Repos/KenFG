import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import tailwind from '../../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';
import assets from '../../../constants/assets_manifest';
import {TopBar} from '../../../sharedComponents';
import InfoContent from './atoms/InfoContent';
import UserCode from './molecules/UserCode';
import ReferContacts from './atoms/ReferContacts';
import {SocialMediaShare} from '../../../sharedComponents';
import FriendsListLink from './atoms/FriendsListLink';

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
        <MoreOption />
      </View>
      <FriendsListLink />
    </View>
  );
}

const MoreOption = () => {
  return (
    <View
      style={[
        tailwind('flex-row bg-dark-3 mt-4 items-center justify-center'),
        {paddingVertical: 10},
        styles.link,
      ]}>
      <Image
        resizeMode="contain"
        source={assets.more_share}
        style={[{width: 18, height: 18}]}
      />
      <Text
        style={[tailwind('font-regular px-2 text-white font-15 uppercase')]}>
        More Options
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    borderColor: '#8797B14D',
    borderWidth: 1,
    borderRadius: 2,
  },
});
