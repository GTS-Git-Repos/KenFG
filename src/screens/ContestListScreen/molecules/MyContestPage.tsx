import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import CardMyContest from './CardMyContest';
import {ContestCard} from '../../../sharedComponents';

interface PropTypes {
  text?: string;
}

export default function MyContestPage(props: PropTypes) {
  return (
    <Text
      style={[tailwind('font-regular text-center p-7 text-dark-1  font-15')]}>
      No Joined Contests Found
    </Text>
  );

  return (
    <View style={[tailwind('m-3')]}>
      <Text
        style={[tailwind('font-regular text-center p-7 text-dark-1  font-15')]}>
        No Joined Contests Found
      </Text>
      {/* <ContestCard
        name={'Prize Pool'}
        title="10 Crores"
        left_spot={10}
        total_spot={100}
        first_reward={'1 Crore'}
        gaurantee={true}
        practice={false}
        demo_entry_amount={56}
        entry_amount={20}
        joined={['T1', 'T2', 'T3']}
      /> */}
      <View style={[tailwind('h-20')]}></View>
    </View>
  );
}
