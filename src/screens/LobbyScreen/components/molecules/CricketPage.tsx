import React, {useEffect} from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text} from 'react-native';
import SubTitle from '../SubTitle';
import MyMatchCard from './MyMatchCard';
import NewMyMatchesCard from './NewMyMatchesCard';
import ImageSlider from './ImageSlider';
import UpComingMatchesSlider from './UpComingMatchesSlider';

import {upcommingMatchesandBannersRemote} from '../../../../remote/matchesRemote';
import {useQuery} from 'react-query';
import {useSelector} from 'react-redux';
import {userInfo} from '../../../../store/selectors';

interface PropTypes {
  text?: string;
}

export default function CricketPage(props: PropTypes) {
  const userInfoSelector = useSelector(userInfo);

  const upcommingMatches = useQuery(
    ['upcomingMatches', userInfoSelector?.mobile],
    upcommingMatchesandBannersRemote,
  );

  return (
    <View>
      <View style={[tailwind('px-5 pt-4')]}>
        <SubTitle text={'My Matches'} actiontext="View all" />
      </View>
      <View style={[tailwind('px-5')]}>
        <NewMyMatchesCard />
      </View>

      <ImageSlider
        data={upcommingMatches?.data?.banners}
        status={upcommingMatches.status}
      />

      <View style={[tailwind('px-5 pb-1')]}>
        <SubTitle text={'Upcoming'} />
      </View>
      <UpComingMatchesSlider
        data={upcommingMatches?.data?.matches}
        status={upcommingMatches.status}
      />
    </View>
  );
}
