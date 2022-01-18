import React, {useEffect} from 'react';
import tailwind from '../../../../../../tailwind';
import {View, StyleSheet, Text} from 'react-native';
import SubTitle from '../SubTitle';

import NewMyMatchesCard from './mymatch.card.lobby';
import ImageSlider from './ImageSlider';
import UpComingMatchesSlider from './UpComingMatchesSlider';

import {upcommingMatchesandBannersRemote} from '../../../../../remote/matchesRemote';
import {useQuery} from 'react-query';
import {useSelector} from 'react-redux';
import {userInfo} from '../../../../../store/selectors';

interface PropTypes {
  banners: Array<any>;
  upcomming: Array<any>;
}

export default function CricketPage(props: PropTypes) {
  return (
    <View>
      <View style={[tailwind('pt-3')]}>
        <ImageSlider data={props.banners} status={props.banners} />
      </View>
      <View style={[tailwind('px-5 pt-4')]}>
        <SubTitle text={'Upcoming'} />
      </View>
      <UpComingMatchesSlider data={props.upcomming} status={props.upcomming} />
    </View>
  );
}
