import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function PlayerInTeam(props: PropTypes) {
  return (
    <View style={[tailwind('bg-primary p-2 rounded')]}>
      <View style={[tailwind('flex-row items-center')]}>
        <Text
          style={[
            tailwind('rounded font-bold font-15 p-1 bg-dark text-secondary '),
          ]}>
          Current Team
        </Text>
      </View>
    </View>
  );
}
