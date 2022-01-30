import React from 'react';
import tailwind from '../../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ContestTypeSwitch} from '../../../../../sharedComponents';

interface PropTypes {
  isFullMatch: boolean;
  onPressMatchType(match_type: number): void;
}

export default function upcommingMatchTitle(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center justify-between')]}>
      <Text
        style={[tailwind('font-bold uppercase font-12'), {color: '#8797B1'}]}>
        Upcomming
      </Text>
      <ContestTypeSwitch
        isFullMatch={props.isFullMatch}
        onPressMatchType={props.onPressMatchType}
      />
    </View>
  );
}
