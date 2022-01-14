import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text, ScrollView, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import PrivateContestCard from './private.contest.card';
import {FlatList} from 'react-native-gesture-handler';

interface PropTypes {
  activeIndex: number;
  status: string;
  contests: any;
}

export default function JoinedContestListPage(props: PropTypes) {
  console.log(props.status);

  if (props.status === 'loading') {
    return <ActivityIndicator size={'small'} color="white" />;
  }
  if (props.status === 'success' && !props.contests.length === 0) {
    return (
      <Text style={[tailwind('font-regular text-white font-15')]}>
        No Contests Found
      </Text>
    );
  }

  return (
    <View style={[tailwind('m-2 bg-dark')]}>
      <FlatList
        data={props.contests}
        renderItem={({item}) => {
          return (
            <PrivateContestCard
              key={item.pc_id}
              id={item.pc_id}
              contest_name={item.pcname}
              hosted_by={item.pcname}
              amount={'10 Lakhs'}
              entry={item.entry_fee}
              max_team={10}
            />
          );
        }}
        keyExtractor={item => item.pc_id}
      />
    </View>
  );
}
