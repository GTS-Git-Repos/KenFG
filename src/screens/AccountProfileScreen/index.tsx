import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ImageBackground,
  Dimensions,
  ScrollView,
  Touchable,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {TopBar} from '../../sharedComponents';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
import assets_manifest from '../../constants/assets_manifest';
import AccountProfileTopBar from './atoms/AccountProfileTopBar';
import UserProfileCard from './atoms/UserProfileCard';
import LevelCard from './molecules/Levels';
import LinearGradient from 'react-native-linear-gradient';
import AccountSubTitle from './atoms/AccountSubTitle';
import Career from './molecules/Career';
import PlayerContests from './molecules/PlayerContests';
import {useSelector} from 'react-redux';
import {Modalize} from 'react-native-modalize';
import MoreSheet from './atoms/MoreSheet';
const log = console.log;

const WIDTH = Dimensions.get('window').width;

export default function AccountProfileScreen() {
  const moreRef = useRef<Modalize>(null);
  const navigation = useNavigation();
  const userInfoState: any = useSelector<any>(state => state.user.user_info);

  const openSheet = () => {
    moreRef?.current?.open();
  };

  return (
    <View style={[tailwind('h-full bg-dark')]}>
      <AccountProfileTopBar openSheet={openSheet} />
      <View style={[tailwind('bg-secondary'), {height: 15}]}></View>

      <View
        style={[
          tailwind('bg-dark-4 rounded-2xl'),
          {position: 'relative', bottom: 15},
        ]}>
        <ScrollView contentContainerStyle={tailwind('px-2')}>
          <UserProfileCard
            image={''}
            name={userInfoState?.name}
            username={userInfoState?.name}
            level={'0'}
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
        ref={moreRef}
        useNativeDriver={true}
        modalTopOffset={200}
        adjustToContentHeight={true}
        disableScrollIfPossible={false}
        closeOnOverlayTap={true}>
        <MoreSheet />
      </Modalize>
    </View>
  );
}
