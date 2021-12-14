import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function ProgressBar(props: PropTypes) {
  return (
    <View style={[tailwind('my-2')]}>
      <View style={[{backgroundColor: '#8797B1', height: 2}]}>
        <View
          style={[
            tailwind(''),
            {backgroundColor: '#EB5757', height: 2, width: '60%'},
          ]}></View>
      </View>
    </View>
  );
}
