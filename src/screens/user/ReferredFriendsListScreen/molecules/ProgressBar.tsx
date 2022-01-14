import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  completed: boolean;
}

export default function ProgressBar(props: PropTypes) {
  return (
    <View style={[tailwind('my-2')]}>
      <View style={[{backgroundColor: '#8797B14D', height: 2}]}>
        <View
          style={[
            tailwind(''),
            {
              backgroundColor: props.completed ? '#006A4D' : '#EB5757',
              height: 2,
              width: props.completed ? '100%' : '60%',
            },
          ]}></View>
      </View>
    </View>
  );
}
