import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  teamName: string;
}

export default function TopBar(props: PropTypes) {
  return (
    <View>
      <Text style={[tailwind('font-regular font-15')]}>HEllo</Text>
    </View>
  );
}
