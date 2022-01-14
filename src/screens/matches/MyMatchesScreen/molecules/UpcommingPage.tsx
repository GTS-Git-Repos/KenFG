import React from 'react';
import tailwind from '../../../../../tailwind';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {JoinedContestCard} from '../../../../sharedComponents';
import assets from '../../../../constants/assets_manifest';
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
      <View style={[tailwind('h-20')]}></View>
    </View>
  );
}
