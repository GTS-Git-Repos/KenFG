import React from 'react';
import tailwind from '../../../../../tailwind';
import {View} from 'react-native';
import FilterLink from '../atoms/FilterLink';
import {WalletSideIcon, MoneySideIcon,SettingSideIcon} from '../../../../assets/newIcons';



export default function FilterSheet() {
  return (
    <View style={[tailwind('bg-dark-4')]}>
      <FilterLink
        icon={<WalletSideIcon dT={true} />}
        title={'Transactions'}
        subTitle={'updates on your withdrawals, added cash, etc.'}
        selected={false}
      />

      <FilterLink
        icon={<MoneySideIcon dT={true} />}
        title={'Promotions'}
        subTitle={'updates on your withdrawals, added cash, etc.'}
        selected={false}
      />
      <FilterLink
        icon={<SettingSideIcon dT={true} />}
        title={'Profile'}
        subTitle={'updates on your withdrawals, added cash, etc.'}
        selected={false}
      />
    </View>
  );
}
