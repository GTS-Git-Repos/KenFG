import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import tailwind from '../../../../tailwind';
import {useNavigation} from '@react-navigation/native';
import AccountProfileTopBar from './atoms/AccountProfileTopBar';
import {BlockScreenByLoading} from '../../../sharedComponents';

import UserProfileCard from './atoms/UserProfileCard';
import LevelCard from './molecules/Levels';
import Icon from 'react-native-vector-icons/Ionicons';

import AccountSubTitle from './atoms/AccountSubTitle';
import Career from './molecules/Career';
import PlayerContests from './molecules/PlayerContests';
import {useSelector} from 'react-redux';
import {Modalize} from 'react-native-modalize';
import MoreSheet from './atoms/MoreSheet';
import {UserMetaType} from '../../../types/user';
import {TopBar} from '../../../sharedComponents';
const log = console.log;

interface PropTypes {
  loading: boolean;
  userMeta: UserMetaType;
  moreOptionSheet: any;
  imageUpload(): any;
}

export default function AccountProfileScreen(props: PropTypes) {
  // console.log(
  //   tailwind(
  //     'bg-dark-4 p-3 rounded-t-lg flex-row items-center border-b border-gray-800',
  //   ),
  // );

  return (
    <View style={[tailwind('h-full bg-dark')]}>
      <TopBar text={'User Account'} />
      {/* <AccountProfileTopBar moreOptionSheet={props.moreOptionSheet} /> */}
      {/* <View style={[tailwind('bg-secondary'), {height: 15}]}></View> */}

      <View
        style={[
          tailwind('bg-dark-4 rounded-2xl'),
          // {position: 'relative', bottom: 15},
        ]}>
        <ScrollView contentContainerStyle={tailwind('px-2')}>
          <UserProfileCard
            image={props.userMeta.profile_img}
            name={props.userMeta.name}
            username={props.userMeta.name}
            gender={props.userMeta.gender}
            level={'0'}
            moreOptionSheet={props.moreOptionSheet}
          />
          <AccountSubTitle text={'Achivements and reward'} />
          <LevelCard nextReward={'\u20B9 10000'} />
          <View style={[tailwind('my-2')]}>
            <AccountSubTitle text={'Career Stats'} />
          </View>
          <Career />
          <View style={[tailwind('py-3')]}>
            <AccountSubTitle text={'Recently Played'} />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PlayerContests />
            <PlayerContests />
            <PlayerContests />
          </ScrollView>

          <View style={[tailwind('h-40')]}></View>
        </ScrollView>
      </View>

      <Modalize
        ref={props.moreOptionSheet}
        HeaderComponent={<SheetHeader />}
        useNativeDriver={true}
        modalTopOffset={200}
        adjustToContentHeight={true}
        disableScrollIfPossible={false}
        closeOnOverlayTap={true}>
        <View style={[tailwind('bg-dark-4 p-3')]}>
          <MyInfoLink />
          <ChangeProfileLink imageUpload={props.imageUpload} />
          <RemoveProfileLink />
        </View>
      </Modalize>

      {/* loading while image upload process */}
      {props.loading && <BlockScreenByLoading />}
    </View>
  );
}

const SheetHeader = () => {
  return (
    <View style={[ss.sheetHeader]}>
      <Icon name="menu-outline" size={25} color="white" />
      <Text style={[tailwind('font-regular px-4 text-white font-15')]}>
        More Settings
      </Text>
    </View>
  );
};

const MyInfoLink = (props: any) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProfileEditScreen')}
      style={[tailwind('p-3 flex-row items-center ')]}>
      <Icon name="settings-outline" size={20} color="white" />
      <Text style={[tailwind('font-regular px-3 text-white font-15')]}>
        My Info & Settings
      </Text>
    </TouchableOpacity>
  );
};

const ChangeProfileLink = (props: any) => {
  return (
    <TouchableOpacity
      onPress={props.imageUpload}
      style={[tailwind('p-3 flex-row items-center')]}>
      <Icon name="images-outline" size={20} color="white" />
      <Text style={[tailwind('font-regular px-3 text-white font-15')]}>
        Change Profile Picture
      </Text>
    </TouchableOpacity>
  );
};

const RemoveProfileLink = (props: any) => {
  return (
    <TouchableOpacity style={[tailwind('p-3 flex-row items-center')]}>
      <Icon name="person-circle-outline" size={20} color="white" />
      <Text style={[tailwind('font-regular px-3 text-white font-15')]}>
        Removev Profile Picture
      </Text>
    </TouchableOpacity>
  );
};

const ss = StyleSheet.create({
  sheetHeader: {
    alignItems: 'center',
    backgroundColor: '#0D1320',
    borderColor: 'rgba(31, 41, 55, 1)',
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: 'row',
    padding: 12,
  },
});
