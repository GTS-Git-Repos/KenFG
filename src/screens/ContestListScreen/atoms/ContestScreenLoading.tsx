import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Dimensions, Image, Text, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TopBar} from '../../../sharedComponents';

import ContentLoader, {Rect} from 'react-content-loader/native';
import Tabs from '../molecules/TabsContest';
import Filtertab from '../molecules/Filtertab';

interface PropTypes {
  title: string;
}

const width = Dimensions.get('window').width;

export default function ContestScreenLoading(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark h-full')]}>
      <TopBar text={props.title} />
      <View style={[tailwind('')]}>
        <Tabs selectedTab={0} teamsCount={[]} onTabPressed={() => {}} />
        {/* <Filtertab selectedFilter={null} setSelectedFilter={() => {}} /> */}
      </View>
      {/* <ContentLoader
        speed={1}
        backgroundColor="#172338"
        foregroundColor="#25385A">
        <Rect x="22" y="15" width="198" rx="3" height="27" fill="#C4C4C4" />

        <Rect x="22" y="55" width="90" height="22" rx="3" fill="#E91C1C" />
        <Rect x="135" y="55" width="90" height="22" rx="3" fill="#C4C4C4" />
        <Rect x="250" y="55" width="90" height="22" rx="3" fill="#C4C4C4" />

        <Rect x="22" y="100" width="350" height="113" rx="3" fill="#C4C4C4" />

        <Rect x="22" y="228" width="198" rx="3" height="27" fill="#C4C4C4" />

        <Rect x="22" y="268" width="90" height="22" rx="3" fill="#E91C1C" />
        <Rect x="135" y="268" width="90" height="22" rx="3" fill="#C4C4C4" />
        <Rect x="250" y="268" width="90" height="22" rx="3" fill="#C4C4C4" />

        <Rect x="22" y="313" width="350" height="113" rx="3" fill="#C4C4C4" />
      </ContentLoader> */}
      <View style={[tailwind('py-3')]}>
        <ActivityIndicator color="#d1b45a" size="large" />
      </View>
    </View>
  );
}
