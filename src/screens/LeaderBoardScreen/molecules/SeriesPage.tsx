import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import SelectSeries from './SelectSeries';
import LeaderProfile from './LeaderProfile';
import SeriesHeader from '../atoms/SeriesHeader';
import Tabs from '../atoms/Tabs';

interface PropTypes {
  text?: string;
}

export default function SeriesPage(props: PropTypes) {
  return (
    <ScrollView>
      <SeriesHeader />
      <LeaderProfile />
      <LeaderProfile />
      <LeaderProfile />
      <LeaderProfile />
    </ScrollView>
  );
}
