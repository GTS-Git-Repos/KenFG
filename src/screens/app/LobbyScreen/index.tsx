import React, {useState,} from 'react';
import {View, Text, ScrollView} from 'react-native';
import tailwind from '../../../../tailwind';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

import LobbyTopBar from './components/LobbyTopBar';
import LobbyNav from './components/LobbyNav';

import CricketPage from './components/molecules/CricketPage';
import MyMatchCard from './components/molecules/mymatch.card.lobby';
import SubTitle from './components/SubTitle';

const log = console.log;

export default function LobbyScreen() {
  const route = useRoute();
  const dispatch = useDispatch();

  const [cricket, setCricket] = useState(true);

  const userInfoState: any = useSelector<any>(state => state.user.user_info);

  return (
    <View style={tailwind('bg-dark h-full')}>
      <View style={[tailwind('bg-secondary')]}>
        <LobbyTopBar amount={userInfoState.un_utilized} />
        <LobbyNav
          cricket={cricket}
          setCricket={setCricket}
          name={userInfoState?.name}
        />
      </View>

      {cricket ? (
        <View style={[tailwind('px-5 py-4 pb-0.5')]}>
          <SubTitle text={'My Matches'} actiontext="View all" />
          <View style={[tailwind('h-1')]} />
          <MyMatchCard/>
        </View>
      ) : null}

      <ScrollView fadingEdgeLength={50}>
        {cricket ? (
          <CricketPage />
        ) : (
          <View style={[tailwind('py-10')]}>
            <Text
              style={[
                tailwind('font-semibold text-center uppercase font-17'),
                {color: '#8797B1'},
              ]}>
              Coming Soon ...
            </Text>
          </View>
        )}

        <View style={[tailwind('h-10')]}></View>
      </ScrollView>
    </View>
  );
}
