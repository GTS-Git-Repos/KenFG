import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text} from 'react-native';

interface Props {
  title: string;
}

export default function TopBar(props: Props) {
  return (
    <View style={[tailwind('flex flex-row justify-between items-center py-2')]}>
      <Text style={[tailwind('')]}>TopBar</Text>
    </View>
  );
}
