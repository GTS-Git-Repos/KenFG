import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  text: string;
}

export default function ErrorHint(props: PropTypes) {
  return (
    <View style={[tailwind('py-2')]}>
      <Text
        style={[
          tailwind('font-regular font-13'),
          {
            color: '#d63031',
          },
        ]}>
        {props.text}
      </Text>
    </View>
  );
}
