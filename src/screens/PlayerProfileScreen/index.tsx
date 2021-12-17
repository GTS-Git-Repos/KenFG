import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
// import assets from 'assets';
import {TopBar} from '../../sharedComponents/';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
import ProfileCard from './atoms/ProfileCard';
import SubTitle from './atoms/SubTitle';
import AddedTeam from './molecules/AddedTeam';
import MatchesStats from './molecules/MatchesStats';
import AddTeamButton from './atoms/AddTeamButton';

const log = console.log;

export default function MyContestPlayersInfo() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBar text={'Player Info'} />
      <ScrollView>
        <ProfileCard />
        <SubTitle text={'In your teams'} />
        <AddedTeam />
        <SubTitle text={'Matchwise Fantasy Systems'} />
        <MatchesStats />
        <MatchesStats />
        <MatchesStats />
        <MatchesStats />
        <View style={[tailwind('h-10')]}></View>
      </ScrollView>
      <AddTeamButton />
    </View>
  );
}
