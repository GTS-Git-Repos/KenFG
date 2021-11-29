import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {ContestCard} from '../../../sharedComponents/';

interface PropTypes {
  text?: string;
}

export default function CompletedPage(props: PropTypes) {
  return (
    <View style={[tailwind('m-2')]}>
      <ContestCard
        name={''}
        title={''}
        left_spot={0}
        total_spot={0}
        first_reward={''}
        gaurantee={false}
        practice={false}
        demo_entry_amount={0}
        entry_amount={0}
      />
    </View>
  );
}
