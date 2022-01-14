import React from 'react';
import tailwind from '../../../../../../tailwind';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import CardMyContest from './CardMyContest';
import {ContestCard, JoinedContestCard} from '../../../../../sharedComponents';
import {useNavigation} from '@react-navigation/core';
import NoJoinedContest from '../atoms/NoJoinedContest';

interface PropTypes {
  contests: any;
  status: any;
}

export default function MyContestPage(props: PropTypes) {
  const navigation = useNavigation<any>();

  const navigate = () => {
    navigation.navigate('LiveMatchScreen');
  };

  if (props.status === 'loading') {
    return <ActivityIndicator size={'large'} color="#d1b45a" />;
  }
  if (
    props.status === 'success' &&
    (!props.contests || props.contests.length === 0)
  ) {
    return <NoJoinedContest />;
  }

  return (
    <ScrollView contentContainerStyle={[tailwind('m-3')]}>
      {props.contests.map((item: any, index: number) => {
        return (
          <JoinedContestCard
            key={index}
            navigate={navigate}
            contest_key={'123345'}
            match_key={'123345'}
            title={item.contest_name}
            total_joined={100}
            total_spots={1000}
            amount_letters={'10000'}
            amount={'1000000'}
            guaranteed={true}
            entry={''}
            max_entry={1}
            bonus={'32%'}
            is_practice={true}
            teams={item.contest_team}
          />
        );
      })}

      <View style={[tailwind('h-20')]}></View>
    </ScrollView>
  );
}
