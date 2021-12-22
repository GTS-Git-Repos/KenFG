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
      <LeaderProfile
        levelStatus={true}
        isFirst={false}
        isSecond={false}
        isThird={false}
      />
      <LeaderProfile
        levelStatus={null}
        isFirst={true}
        isSecond={false}
        isThird={false}
      />
      <LeaderProfile
        levelStatus={true}
        isFirst={false}
        isSecond={true}
        isThird={false}
      />
      <LeaderProfile
        levelStatus={false}
        isFirst={false}
        isSecond={false}
        isThird={true}
      />
    </ScrollView>
  );
}
