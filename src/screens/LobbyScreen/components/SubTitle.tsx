import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text: string;
  actiontext?: string;
}

export default function SubTitle(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center justify-between py-2')]}>
      <Text style={[tailwind('font-semibold uppercase text-gray-400 font-12')]}>
        {props.text}
      </Text>
      {props.actiontext && (
        <TouchableOpacity style={[tailwind('flex-row items-center')]}>
          <Text style={[tailwind('font-regular text-gray-400 px-1 font-12')]}>
            {props.actiontext}
          </Text>
          <Icon name="chevron-forward-outline" size={15} color="gray" />
        </TouchableOpacity>
      )}
    </View>
  );
}
