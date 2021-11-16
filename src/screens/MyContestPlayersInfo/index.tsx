import React from 'react';
import {View, Text, Image} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
// import assets from 'assets';
import {TopBar} from '../../sharedComponents/';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
import PlayerCard from './molecules/PlayerCard';
import RowHeader from './atoms/RowHeader';
import TableData from './atoms/TableData';
const log = console.log;

export default function MyContestPlayersInfo() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBar text={'Player Info'} />

      <View style={[tailwind('m-4 bg-primary rounded-lg p-2')]}>
        <PlayerCard />
        <View style={[tailwind('')]}>
          <RowHeader />
          <TableData title={'Announced'} actual={'22.3'} points={'3.32'} />
          <TableData title={'Runs'} actual={'4'} points={'0.3'} />
          <TableData title={"4's"} actual={'45.3'} points={'0.0'} />
          <TableData title={"6's"} actual={'3.3'} points={'0.0'} />
          <TableData title={'Announced'} actual={'22.3'} points={'3.32'} />
          <TableData title={'Runs'} actual={'4'} points={'0.3'} />
          <TableData title={"4's"} actual={'45.3'} points={'0.0'} />
        </View>
      </View>
    </View>
  );
}
