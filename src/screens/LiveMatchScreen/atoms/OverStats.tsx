import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, ScrollView} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// interface PropTypes {
//   text?: string;
// }

export default function OverStats() {
  return (
    <View style={[tailwind('')]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <BallStats info={3} />
        <BallStats info={0} />
        <BallStats info={4} />
        <BallStats info={3} />
        <BallStats info={0} />
        <BallStats info={4} />
        <BallStats info={3} />
        <BallStats info={0} />
        <BallStats info={4} />
      </ScrollView>
    </View>
  );
}

const BallStats = ({info}) => {
  return (
    <View
      style={[
        tailwind('rounded-full mr-1'),
        {
          width: 20,
          height: 20,
          backgroundColor: 'rgba(189, 195, 199,0.3)',
        },
      ]}>
      <Text style={[tailwind('font-regular text-center text-white font-15')]}>
        {info}
      </Text>
    </View>
  );
};