import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

// import assets from 'assets';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
const log = console.log;
import TopBarCreateTeam from './atoms/TopBarCreateTeam';
import MatchStatus from './atoms/MatchStatus';

export default function CreateTeamScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={tailwind('bg-dark h-full')}>
      <LinearGradient
        start={{x: 0.4, y: 0}}
        locations={[0.5, 0, 0.5]}
        colors={['#C2A554', '#BB9C49', '#BB9C49']}>
        <TopBarCreateTeam />
        <MatchStatus />
        <View
          style={[
            tailwind('flex-row py-4 justify-between items-center'),
          ]}></View>
      </LinearGradient>

      <Text>Hello</Text>
    </View>
  );
}
