import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function Projection(props: PropTypes) {
  return (
    <View>
      <Text style={[tailwind('font-regular text-light text-center font-15')]}>
        Projected Score 97 @ 4.3
      </Text>
    </View>
  );
}
