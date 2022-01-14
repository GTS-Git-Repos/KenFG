import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import FilterLink from '../atoms/FilterLink';
import {WalletIcon, MoneyIcon, GearIcon} from '../../../../sharedComponents';

interface PropTypes {
  text?: string;
}

export default function FilterSheet(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark-4')]}>
      <FilterLink
        icon={<WalletIcon />}
        title={'Transactions'}
        subTitle={'updates on your withdrawals, added cash, etc.'}
        selected={false}
      />

      <FilterLink
        icon={<MoneyIcon />}
        title={'Promotions'}
        subTitle={'updates on your withdrawals, added cash, etc.'}
        selected={false}
      />
      <FilterLink
        icon={<GearIcon />}
        title={'Profile'}
        subTitle={'updates on your withdrawals, added cash, etc.'}
        selected={false}
      />
    </View>
  );
}
