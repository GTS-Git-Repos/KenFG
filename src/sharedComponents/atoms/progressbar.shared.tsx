import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text} from 'react-native';

interface PropTypes {
  spots: string;
  left: string;
}

export default function ProgressBarShared(props: PropTypes) {
  return (
    <View>
      <View style={[tailwind('my-2')]}>
        <View style={[{backgroundColor: '#8797B14D', height: 2.5}]}>
          <View
            style={[
              tailwind(''),
              {backgroundColor: '#B2933D', height: 2.5, width: '20%'},
            ]}></View>
        </View>
      </View>
      <View style={[tailwind('flex-row items-center justify-between')]}>
        <Text style={[tailwind('font-regular text-secondary font-12')]}>
          {props.left} Spots left
        </Text>
        <Text style={[tailwind('font-regular text-dark-1 font-12')]}>
          {props.spots} Spots
        </Text>
      </View>
    </View>
  );
}
