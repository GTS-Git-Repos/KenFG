import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
import {TeamsCard} from '../../../sharedComponents';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function MyTeamsPage(props: PropTypes) {
  return (
    <View style={[tailwind('m-3')]}>
      <TeamsCard />
    </View>
  );
}
