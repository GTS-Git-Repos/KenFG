import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function ProgressBar(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row justify-between items-center p-2')]}>
      <View>
        <Icon name="checkmark-circle" size={15} color="white" />
        <Text style={[tailwind('font-regular py-1 font-15 text-light')]}>
          Select Match
        </Text>
      </View>
      <View style={[tailwind('')]}>
        <Icon
          name="checkmark-circle"
          style={[tailwind('text-center')]}
          size={15}
          color="white"
        />
        <Text style={[tailwind('font-regular py-1 font-15 text-light')]}>
          Join Contest
        </Text>
      </View>

      <View style={[tailwind('')]}>
        <Icon
          name="ellipse"
          style={[tailwind('text-right')]}
          size={15}
          color="white"
        />
        <Text style={[tailwind('font-regular py-1 font-15 text-light')]}>
          Create Team
        </Text>
      </View>
    </View>
  );
}
