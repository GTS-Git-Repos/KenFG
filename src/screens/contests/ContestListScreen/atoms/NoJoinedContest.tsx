import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function NoJoinedContest(props: PropTypes) {
  return (
    <View style={[tailwind('p-7 text-dark-1  font-15')]}>
      <Text style={[tailwind('font-regular text-center text-dark-1 font-15')]}>
        You did not Join any contests
      </Text>
    </View>
  );
}
