import React from 'react';
import tailwind from '../../../../../tailwind';
import {View} from 'react-native';
import FilterLink from '../atoms/FilterLink';
import clr from '../../../../constants/colors';

import {
  WalletSideIcon,
  MoneySideIcon,
  SettingSideIcon,
} from '../../../../assets/newIcons';

interface PropTypes {
  dT: boolean;
}

export default function FilterSheet(props: PropTypes) {
  const dT = props.dT;
  return (
    <View style={[dT ? clr.bgd1 : clr.bgw]}>
      <FilterLink
        dT={dT}
        icon={<WalletSideIcon dT={true} />}
        title={'Transactions'}
        subTitle={'updates on your withdrawals, added cash, etc.'}
        selected={false}
      />

      <FilterLink
        dT={dT}
        icon={<MoneySideIcon dT={true} />}
        title={'Promotions'}
        subTitle={'updates on your withdrawals, added cash, etc.'}
        selected={false}
      />
      <FilterLink
        dT={dT}
        icon={<SettingSideIcon dT={true} />}
        title={'Profile'}
        subTitle={'updates on your withdrawals, added cash, etc.'}
        selected={false}
      />
    </View>
  );
}
