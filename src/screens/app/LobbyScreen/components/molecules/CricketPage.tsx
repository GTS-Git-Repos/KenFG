import React, {useEffect} from 'react';
import tailwind from '../../../../../../tailwind';
import {View, StyleSheet, Text} from 'react-native';
import SubTitle from '../SubTitle';

import ImageSlider from './ImageSlider';
import UpComingMatchesSlider from './UpComingMatchesSlider';

interface PropTypes {
  banners: Array<any>;
  upcomming: Array<any>;
}

export default function CricketPage(props: PropTypes) {
  return (
    <View>
      <View style={[tailwind('pt-3')]}>
        <ImageSlider
          upcomming={props.upcomming}
          data={props.banners}
          status={props.banners}
        />
      </View>
      <View style={[tailwind('px-5 pt-4')]}>
        <SubTitle text={'Upcoming'} />
      </View>
      <UpComingMatchesSlider data={props.upcomming} status={props.upcomming} />
    </View>
  );
}
