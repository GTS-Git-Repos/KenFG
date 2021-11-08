import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function TopBarTeamReview(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('flex-row items-center bg-primary justify-between py-2 px-2'),
      ]}>
      <View style={[tailwind('flex-row items-center')]}>
        <TouchableOpacity>
          <Icon name="arrow-back-outline" size={25} color="white" />
        </TouchableOpacity>
        <Text
          style={[tailwind('font-regular px-4 text-light'), {fontSize: 15}]}>
          15h 54m 36s Left
        </Text>
      </View>

      <TouchableOpacity>
        <Icon name="help-circle-outline" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
}
