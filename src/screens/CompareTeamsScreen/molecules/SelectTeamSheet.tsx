import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {BottomLine} from '../../../sharedComponents';

interface PropTypes {
  name: string;
}

export default function SelectTeamSheet(props: PropTypes) {
  return (
    <View style={[tailwind('')]}>
      <View
        style={[
          tailwind('bg-dark-4 flex-row items-center justify-between p-4'),
        ]}>
        <Text style={[tailwind('font-bold text-light font-15')]}>
          {props.name}
        </Text>
        <Text style={[tailwind('font-regular text-light font-15')]}>
          493.32 (#325222)
        </Text>
      </View>
      <View>
        <BottomLine />
      </View>
    </View>
  );
}
