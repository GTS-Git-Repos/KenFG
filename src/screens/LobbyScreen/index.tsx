import React, {useState, useEffect} from 'react';
import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import tailwind from '../../../tailwind';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute, CommonActions} from '@react-navigation/native';
import assets from '../../constants/assets_manifest';
import {UpcommingMatches} from '../../sharedComponents';
import LinearGradient from 'react-native-linear-gradient';

// import {useQuery} from 'react-query';
// import {initialRemote} from '../../remote/appRemote';
// import {saveIpAction} from '../../store/actions/appActions';

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
      <ScrollView fadingEdgeLength={150}>
        <LinearGradient
          start={{x: 0.49, y: 1.1}}
          end={{x: 1, y: 0.1}}
          locations={[0.4, 0.3, 0, 0.1, 0]}
          // colors={['red', 'green', 'blue']}
          colors={['#C2A554', '#C2A554', '#C2A755', '#BD9F4B', '#BB9C49']}>
          <LobbyTopBar amount={'10,000'} />
          <LobbyNav />
        </LinearGradient>

        <View style={[tailwind('px-4 py-1')]}>
          <SubTitle text={'My Matches'} actiontext="View all" />
        </View>
        <View style={[tailwind('px-2')]}>
          <MyMatchCard />
        </View>

        <ImageSlider />

        <View style={[tailwind('px-4 pb-1')]}>
          <SubTitle text={'Upcoming'} />
        </View>

        <View style={[tailwind('flex flex-row flex-wrap px-2')]}>
          {[1, 2, 3, 4].map(item => {
            return (
              <View key={item} style={[tailwind('w-6/12 px-1 bg-dark')]}>
                <UpcommingMatches />
              </View>
            );
          })}
        </View>

        <View style={[tailwind('h-10')]}></View>
      </ScrollView>
      {/* <View>
        <LinearGradient
          colors={['transparent', 'transparent', 'transparent', '#000']}>
          <View
            style={[
              tailwind('flex-row justify-between items-center h-3'),
            ]}></View>
        </LinearGradient>
      </View> */}

      {/* <View
        style={[
          tailwind('h-5'),
          {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        ]}></View> */}
    </View>
  );
}
