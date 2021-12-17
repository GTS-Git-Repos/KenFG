import React from 'react';
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
import TableHeader from './atoms/TableHeader';
import TableData from './atoms/TableData';
const log = console.log;

const WIDTH = Dimensions.get('window').width;

export default function AccountProfileScreen() {
  const navigation = useNavigation();
  const userInfoState: any = useSelector<any>(state => state.user.user_info);

  return (
    <View style={[tailwind('h-full bg-dark')]}>
      <AccountProfileTopBar />
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
          <View style={[tailwind('px-5 py-2')]}>
            <Text
              style={[
                tailwind('font-bold text-light font-20'),
                {fontSize: 23},
              ]}>
              Chris Gayle
            </Text>
          </View>

          <TableHeader />
          <TableData title={'Duck'} actual={'0'} points={''} />
          <TableData title={'Overs Bowled'} actual={'0'} points={''} />
          <TableData title={'Wickets'} actual={'0'} points={''} />
          <TableData title={'LBW / Bowled Bonus'} actual={'0'} points={'N/A'} />
          <TableData title={'2/3/4 Wicket Bonus'} actual={'0'} points={''} />
          <TableData title={'Maiden Over'} actual={'0'} points={'0'} />
          <TableData title={'E / R'} actual={'0'} points={'-'} />
          <View style={[tailwind('flex-row items-center justify-center')]}>
            <LinearGradient
              style={[tailwind('p-2 m-3 rounded')]}
              colors={['#D8C872', '#C2A954']}>
              <TouchableOpacity style={[tailwind('rounded')]}>
                <Text
                  style={[
                    tailwind('font-bold uppercase text-brown-4 font-15'),
                  ]}> 
                  Add to Team
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <View style={[tailwind('h-20')]}></View>
        </ScrollView>
      </View>
    </View>
  );
}
