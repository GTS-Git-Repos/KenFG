import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  name: string;
  title: string;
  position: string;
  nationality: string;
  born_on: string;
  info: string;
}

export default function PlayerDetails(props: PropTypes) {
  return (
    <View style={[tailwind('p-3 bg-primary')]}>
      <Text style={[tailwind('font-bold text-light font-20')]}>
        {props.name}
      </Text>
      <View style={[tailwind('flex-row items-center py-1')]}>
        <Text style={[tailwind('font-bold text-light font-12')]}>
          {props.title},
        </Text>
        <Text style={[tailwind('font-regular text-light px-2 font-11')]}>
          {props.position}
        </Text>
      </View>
      <View style={[tailwind('flex-row items-center py-1')]}>
        <Text style={[tailwind('font-bold text-light font-12')]}>
          Nationality: {props.nationality},
        </Text>
        <Text style={[tailwind('font-regular text-light px-2 font-15')]}>
          |
        </Text>
        <Text style={[tailwind('font-regular text-light  font-11')]}>
          Born On: {props.born_on}
        </Text>
      </View>

      <View style={[tailwind('flex-row flex-wrap items-center')]}>
        <View style={[tailwind('w-1 h-1 rounded-full bg-secondary')]}></View>
        <Text style={[tailwind('font-bold text-secondary pl-2 font-10')]}>
          {props.info}
        </Text>

        <Text
          style={[tailwind('font-regular px-2 font-9'), {color: '#8797B1'}]}>
          ( Indicated Information as per official sources (T&C) )
        </Text>
      </View>
    </View>
  );
}
