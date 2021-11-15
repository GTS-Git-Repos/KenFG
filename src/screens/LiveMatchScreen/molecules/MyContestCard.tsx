import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
import MyContestInfo from '../atoms/MyContestInfo';
import MyStatusConestInfo from '../atoms/MyStatusInContest';
// import Icon from 'react-native-vector-icons/Ionicons';

// interface PropTypes {
//   text?: string;
// }

export default function MyContestCard() {
  return (
    <View style={[tailwind('m-3 bg-primary rounded')]}>
      <MyContestInfo />
      <MyStatusConestInfo />
    </View>
  );
}
