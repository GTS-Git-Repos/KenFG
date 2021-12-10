import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ButtonComponent, JoinedContestCard} from '../../../sharedComponents';
import assets from '../../../constants/assets_manifest';
import NoContestFound from '../atoms/NoContestFound';
import {useNavigation} from '@react-navigation/core';

interface PropTypes {
  text?: string;
}

export default function UpcommingPage(props: PropTypes) {
  const navigation = useNavigation<any>();

  const navigate = () => {
    navigation.navigate('LiveMatchScreen');
  };

  return (
    <View style={[tailwind('m-3')]}>
      <JoinedContestCard
        navigate={navigate}
        contest_key={'123345'}
        match_key={'123345'}
        title={'Practice 1'}
        total_joined={100}
        total_spots={1000}
        amount_letters={'10000'}
        amount={'1000000'}
        guaranteed={true}
        entry={''}
        max_entry={1}
        bonus={'32%'}
        is_practice={true}
      />
      <View style={[tailwind('h-20')]}></View>
    </View>
  );
}
