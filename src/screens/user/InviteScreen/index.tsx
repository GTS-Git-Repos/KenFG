import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import tailwind from '../../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {useNavigation} from '@react-navigation/native';
import assets from '../../../constants/assets_manifest';
import {TopBar} from '../../../sharedComponents';
import InfoContent from './atoms/InfoContent';
import UserCode from './molecules/UserCode';
import ReferContacts from './atoms/ReferContacts';
import {SocialMediaShare} from '../../../sharedComponents';
import FriendsListLink from './atoms/FriendsListLink';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';

// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function InviteScreen() {
  const dT = useSelector(getAppThemeSelector);

  const navigation = useNavigation();

  return (
    <View style={[tailwind('h-full'), dT ? clr.bgd1 : clr.bgGray]}>
      <TopBar text="Invite Friends" />
      <InfoContent dT={dT} />
      <View style={[tailwind('my-1')]} />
      <View style={[tailwind('p-4'), dT ? clr.bgd1 : clr.bgGray]}>
        <UserCode dT={dT} code={''} />
        <ReferContacts dT={dT} />
        <SocialMediaShare dT={dT} />
        <MoreOption dT={dT} />
      </View>
      <FriendsListLink dT={dT} />
    </View>
  );
}

const MoreOption = (props: any) => {
  return (
    <View
      style={[
        tailwind('flex-row mt-4 items-center justify-center'),
        {paddingVertical: 10, borderRadius: 4},
        props.dT ? styles.dBorder : styles.lBorder,
        props.dT ? clr.bgd2 : clr.bgw,
      ]}>
      {/* FIXME: move to SVG */}
      <Image
        resizeMode="contain"
        source={assets.more_share}
        style={[{width: 18, height: 18}]}
      />
      <Text
        style={[
          tailwind('font-regular px-2 font-15 uppercase'),
          props.dT ? clr.tw : clr.td1,
        ]}>
        More Options
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dBorder: {
    borderBottomColor: 'rgba(31, 41, 55,1)',
    borderBottomWidth: 1,
  },
  lBorder: {
    borderBottomColor: 'rgba(31, 41, 55,0.1)',
    borderBottomWidth: 1,
    elevation: 3,
  },
});
