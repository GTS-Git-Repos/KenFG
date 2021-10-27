import React, {useState, useEffect} from 'react';
import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import tailwind from '../../../tailwind';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute, CommonActions} from '@react-navigation/native';
import assets from '../../constants/assets_manifest';
import {ContestCard} from '../../sharedComponents';
import LinearGradient from 'react-native-linear-gradient';

import {useQuery} from 'react-query';
import {initialRemote} from '../../remote/appRemote';
import {saveIpAction} from '../../store/actions/appActions';

import LobbyTopBar from './components/LobbyTopBar';
import LobbyNav from './components/LobbyNav';
import SubTitle from './components/SubTitle';
import MyMatchCard from './components/molecules/MyMatchCard';
import ImageSlider from './components/molecules/ImageSlider';

const log = console.log;

export default function LobbyScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  // console.log(ImageSlider());

  return (
    <View style={tailwind('bg-dark h-full')}>
      <ScrollView>
        <LinearGradient
          start={{x: 0.5, y: 0.7}}
          end={{x: 0.6, y: 0.3}}
          locations={[0, 0.8, 0.7]}
          colors={['#c5a959', '#c5a959', '#bea14f']}>
          <LobbyTopBar amount={1000} />
          <LobbyNav />
        </LinearGradient>

        <View style={[tailwind('px-4 py-1')]}>
          <SubTitle text={'My Matches'} actiontext="View all" />
        </View>
        <View style={[tailwind('px-2')]}>
          <MyMatchCard />
        </View>

        <ImageSlider />

        <View style={[tailwind('px-4 pb-2')]}>
          <SubTitle text={'Upcomming'} />
        </View>

        <View style={[tailwind('flex flex-row flex-wrap px-2')]}>
          {[1, 2, 3, 4, 6].map(item => {
            return (
              <View key={item} style={[tailwind('w-6/12 px-1 bg-dark')]}>
                <ContestCard />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
