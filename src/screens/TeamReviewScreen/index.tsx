import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
// import assets from 'assets';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
const log = console.log;
import TopBarTeamReview from './atoms/TopBarTeamReview';
import ProgressBar from './atoms/ProgressBar';
import RowHeader from './atoms/RowHeader';
import PlayerProfile from './molecules/PlayerProfile';
export default function TeamReviewScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBarTeamReview />
      <ProgressBar />
      <View style={[tailwind('bg-primary py-4')]}>
        <Text style={[tailwind('font-regular text-center text-light font-16')]}>
          Choose your Captain and Vice Captain
        </Text>
        <Text
          style={[
            tailwind('font-regular text-center text-light py-2 font-14'),
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
    </View>
  );
}
