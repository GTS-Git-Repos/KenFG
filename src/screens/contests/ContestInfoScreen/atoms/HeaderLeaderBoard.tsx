import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, Dimensions} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

const ALLTEAMSWIDTH = Dimensions.get('window').width / 2;
const SUBITEMSWIDTH = ALLTEAMSWIDTH / 2;

interface PropTypes {
  length: number;
}

export default function HeaderLeaderBoard(props: PropTypes) {
  return (
    <View
      style={[
        tailwind(
          'flex-row items-center bg-dark-3 px-4 py-2 border-b border-gray-800',
        ),
      ]}>
      <View style={[tailwind(''), {width: ALLTEAMSWIDTH}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
          All Teams ({props.length})
        </Text>
      </View>
    </View>
  );
}
