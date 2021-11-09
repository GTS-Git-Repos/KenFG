import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text} from 'react-native';
import SubTitle from '../SubTitle';
import MyMatchCard from './MyMatchCard';
import ImageSlider from './ImageSlider';
import {UpcommingMatches} from '../../../../sharedComponents/';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function CricketPage(props: PropTypes) {
  return (
    <View>
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
    </View>
  );
}
