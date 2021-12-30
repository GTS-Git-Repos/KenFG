import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';
import {TopBar, MoneyIcon} from '../../sharedComponents';
import Links from './atoms/Links';

// import assets from 'assets';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function MoreScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'More'} />
      <ScrollView>
        <Links icon={<MoneyIcon />} text={'Fair Play Guidelines'} goto={''} />
        <Links icon={<MoneyIcon />} text={'Privacy Contest Code'} goto={''} />
        <Links icon={<MoneyIcon />} text={'About Us'} goto={'AboutUsScreen'} />
        <Links icon={<MoneyIcon />} text={'Legality'} goto={''} />
        <Links icon={<MoneyIcon />} text={'T&C'} goto={'TermsScreen'} />
        <Links icon={<MoneyIcon />} text={'Join with us'} goto={''} />
      </ScrollView>
    </View>
  );
}
