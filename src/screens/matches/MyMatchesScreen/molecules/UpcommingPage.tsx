import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {JoinedContestCard} from '../../../../sharedComponents';
import assets from '../../../../constants/assets_manifest';
import NoContest from '../atoms/no.contest';
import {useNavigation} from '@react-navigation/core';

interface PropTypes {
  upcomming: any;
}

export default function UpcommingPage(props: PropTypes) {
  const navigation = useNavigation<any>();

  const navigate = () => {
    navigation.navigate('LiveMatchScreen');
  };

  return <NoContest text={"You haven't joined any contests"} />;

  return (
    <View style={[tailwind('m-3')]}>
      <Text style={[tailwind('font-regular text-white font-15')]}>H</Text>
    </View>
  );
}
