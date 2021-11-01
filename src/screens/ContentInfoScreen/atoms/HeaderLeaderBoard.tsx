import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Dimensions} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

const ALLTEAMSWIDTH = Dimensions.get('window').width / 2;
const SUBITEMSWIDTH = ALLTEAMSWIDTH / 2;

interface PropTypes {
  text?: string;
}

export default function HeaderLeaderBoard(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('flex-row items-center border-b border-gray-800'),
        {paddingVertical: 11},
      ]}>
      <View
        style={[tailwind('pl-4 text-left flex-1 '), {width: ALLTEAMSWIDTH}]}>
        <Text style={[tailwind('font-regular text-gray-400 font-13')]}>
          All Teams (100)
        </Text>
      </View>

      <View style={[tailwind('flex-row items-center'), {width: ALLTEAMSWIDTH}]}>
        <View style={[tailwind(''), {width: SUBITEMSWIDTH}]}>
          <Text
            style={[
              tailwind('font-regular text-center text-gray-400 font-13'),
            ]}>
            Points
          </Text>
        </View>

        <View style={[tailwind(''), {width: SUBITEMSWIDTH}]}>
          <Text style={[tailwind('font-regular text-gray-400 font-13')]}>
            # Rank
          </Text>
        </View>
      </View>
    </View>
  );
}
