import React from 'react';
import {View, Text} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {TopBar} from '../../sharedComponents';
import Player from './atoms/PlayerProfile';
import PlayerDetails from './atoms/PlayerDetails';
import SubTitlePlayerProfile from './atoms/SubTitlePlayerProfile';
import PlayerInTeam from './atoms/PlayerInTeams';
import PlayerMatch from './molecules/PlayerMatch';
// import assets from 'assets';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function PlayerProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Player Info'} closeicon={true} />
      <Player teamName={'IND'} points={'31'} credit={'4.3'} />
      <PlayerDetails
        name={'Rishabh Pant'}
        title={'WK'}
        position={'Left handed Bat'}
        nationality={'India'}
        born_on={'23-Jan-1993'}
        info={'Played last match'}
      />
      <SubTitlePlayerProfile text={'In Your Teams'} />
      <View style={[tailwind('px-5')]}>
        <PlayerInTeam />
      </View>
      <SubTitlePlayerProfile text={'Match Wise Fantasy Stats'} />
      <View style={[tailwind('px-5')]}>
        <PlayerMatch
          op_team={'NZ'}
          date={'21 Dec 2021'}
          selected_by={'75.43%'}
          points={'433'}
          credits={'32.2'}
        />
      </View>
    </View>
  );
}
