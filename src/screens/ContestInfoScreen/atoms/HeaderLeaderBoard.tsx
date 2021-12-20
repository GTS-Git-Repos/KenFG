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
      style={[tailwind('flex-row items-center p-4 border-b border-gray-800')]}>
      <View style={[tailwind(''), {width: ALLTEAMSWIDTH}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
          All Teams (100)
        </Text>
      </View>
    </View>
  );
}
