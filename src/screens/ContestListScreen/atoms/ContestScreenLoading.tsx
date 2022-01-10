import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Dimensions, Image, Text, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TopBar} from '../../../sharedComponents';

import ContentLoader, {Rect} from 'react-content-loader/native';
import Tabs from '../molecules/TabsContest';
import Filtertab from '../molecules/Filtertab';
import {TopbarContest} from '../../../sharedComponents';

interface PropTypes {
  title: string;
}

const width = Dimensions.get('window').width;

export default function ContestScreenLoading(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark h-full')]}>
      <TopbarContest title={props.title} subtitle={'0h:00m:00s'} />
      <View style={[tailwind('')]}>
        <Tabs selectedTab={0} teamsCount={[]} onTabPressed={() => {}} />
      </View>

      <View style={[tailwind('py-3')]}>
        <ActivityIndicator color="#d1b45a" size="large" />
      </View>
    </View>
  );
}
