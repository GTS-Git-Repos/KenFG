import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text} from 'react-native';
import SubTitle from '../SubTitle';
import MyMatchCard from './MyMatchCard';
import ImageSlider from './ImageSlider';
import UpComingMatchesSlider from './UpComingMatchesSlider';

import {upcomingMatchesRemote} from '../../../../remote/matchesRemote';
import {useQuery} from 'react-query';

interface PropTypes {
  text?: string;
}

export default function CricketPage(props: PropTypes) {
  const upcommingMatches = useQuery('upcomingMatches', upcomingMatchesRemote);

  return (
    <View>
      <View style={[tailwind('px-5 py-1')]}>
        <SubTitle text={'My Matches'} actiontext="View all" />
      </View>
      <View style={[tailwind('px-5')]}>
        <MyMatchCard />
      </View>

      <ImageSlider />

      <View style={[tailwind('px-5 pb-1')]}>
        <SubTitle text={'Upcoming'} />
      </View>

      <UpComingMatchesSlider
        data={upcommingMatches.data}
        status={upcommingMatches.status}
      />

      {/* {[1, 2, 3, 4].map(item => {
          return (
           
          );
        })} */}
    </View>
  );
}
