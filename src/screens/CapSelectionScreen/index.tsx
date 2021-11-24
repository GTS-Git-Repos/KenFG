import React from 'react';
import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

// import assets from 'assets';
import {TopBar} from '../../sharedComponents';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
const log = console.log;

import ProgressBar from './atoms/ProgressBar';
import RowHeader from './atoms/RowHeader';
import PlayerProfile from './molecules/PlayerProfile';
import CapSelectionAction from './atoms/CapSelectionAction';

export default function CapSelectionScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'15h 33m Left'} />
      <ProgressBar />
      <ScrollView>
        <View style={[tailwind('bg-dark-3 py-4')]}>
          <Text
            style={[tailwind('font-regular text-center text-dark-1 font-14')]}>
            Choose your Captain and Vice Captain
          </Text>
          <Text
            style={[
              tailwind('font-regular text-center text-dark-1 py-2 font-13'),
            ]}>
            C Gets 2x Points, VC gets 1.5x Points
          </Text>
        </View>
        <RowHeader />
        <PlayerProfile
          name={'V Kohli'}
          points={'343'}
          teamname={'IND'}
          title={'BAT'}
          c={'43.3%'}
          vc={'8.3%'}
        />
        <PlayerProfile
          name={'R Sharma'}
          points={'232'}
          teamname={'IND'}
          title={'BAT'}
          c={'33.3%'}
          vc={'8.3%'}
        />
        <PlayerProfile
          name={'R Sharma'}
          points={'232'}
          teamname={'IND'}
          title={'BAT'}
          c={'33.3%'}
          vc={'8.3%'}
        />
        <PlayerProfile
          name={'R Sharma'}
          points={'232'}
          teamname={'IND'}
          title={'BAT'}
          c={'33.3%'}
          vc={'8.3%'}
        />
        <PlayerProfile
          name={'R Sharma'}
          points={'232'}
          teamname={'IND'}
          title={'BAT'}
          c={'33.3%'}
          vc={'8.3%'}
        />
        <View style={[tailwind('h-16')]}></View>
      </ScrollView>
      <View
        style={[tailwind('absolute bottom-0 w-full flex-row justify-center')]}>
        <CapSelectionAction />
      </View>
    </View>
  );
}
