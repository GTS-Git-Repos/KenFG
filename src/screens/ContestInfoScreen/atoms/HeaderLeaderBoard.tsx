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
        {paddingVertical: 15},
      ]}>
      <View style={[tailwind('pl-4 '), {width: ALLTEAMSWIDTH}]}>
        <Text style={[tailwind('font-bold text-dark-1 font-13')]}>
          All Teams (100)
        </Text>
      </View>

      <View style={[tailwind('flex-row items-center'), {width: ALLTEAMSWIDTH}]}>
        <View style={[tailwind(''), {width: SUBITEMSWIDTH}]}>
          <Text style={[tailwind('font-bold text-dark-1 font-13 text-center')]}>
            Points
          </Text>
        </View>

        <View style={[tailwind(''), {width: SUBITEMSWIDTH}]}>
          <Text style={[tailwind('font-bold text-dark-1 text-center font-13')]}>
            # Rank
          </Text>
        </View>
      </View>
    </View>
  );
}
