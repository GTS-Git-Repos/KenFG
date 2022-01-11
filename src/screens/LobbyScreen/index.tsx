import React, {useState, useEffect} from 'react';
import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import tailwind from '../../../tailwind';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute, CommonActions} from '@react-navigation/native';
import assets from '../../constants/assets_manifest';

import LinearGradient from 'react-native-linear-gradient';

// import {useQuery} from 'react-query';
// import {initialRemote} from '../../remote/appRemote';
// import {saveIpAction} from '../../store/actions/appActions';

import LobbyTopBar from './components/LobbyTopBar';
import LobbyNav from './components/LobbyNav';
import NewLobbyNav from './components/molecules/NewLobbyNav';

import CricketPage from './components/molecules/CricketPage';
import NewMyMatchesCard from './components/molecules/NewMyMatchesCard';
import SubTitle from './components/SubTitle';
import MyCompletedMatchCard from './components/molecules/MyCompletedMatchCard';

const log = console.log;

export default function LobbyScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const dispatch = useDispatch();

  const [cricket, setCricket] = useState(true);

  const userInfoState: any = useSelector<any>(state => state.user.user_info);

  return (
    <View style={tailwind('bg-dark h-full')}>
      <View style={[tailwind('bg-secondary')]}>
        <LobbyTopBar amount={userInfoState.un_utilized} />
        {/* <NewLobbyNav/> */}
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
          <NewMyMatchesCard />
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
