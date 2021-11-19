import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function FilterByTeam(props: PropTypes) {
  return (
    <View>
      <Text style={[tailwind('font-regular font-15')]}>HEllo</Text>
    </View>
  );
}
