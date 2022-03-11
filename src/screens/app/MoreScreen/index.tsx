import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import tailwind from '../../../../tailwind';
import {useSelector} from 'react-redux';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {useNavigation} from '@react-navigation/native';
import {MoneySideIcon} from '../../../assets/newIcons';
import {TopBar} from '../../../sharedComponents';
import Links from './atoms/Links';

const log = console.log;

export default function MoreScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'More'} />
      <ScrollView>
        <Links
          icon={<MoneySideIcon dT={true} />}
          text={'Fair Play Guidelines'}
          goto={''}
        />
        <Links
          icon={<MoneySideIcon dT={true} />}
          text={'Privacy Contest Code'}
          goto={''}
        />
        <Links
          icon={<MoneySideIcon dT={true} />}
          text={'About Us'}
          goto={'AboutUsScreen'}
        />
        <Links icon={<MoneySideIcon dT={true} />} text={'Legality'} goto={''} />
        <Links
          icon={<MoneySideIcon dT={true} />}
          text={'T&C'}
          goto={'TermsScreen'}
        />
        <Links
          icon={<MoneySideIcon dT={true} />}
          text={'Join with us'}
          goto={''}
        />
      </ScrollView>
    </View>
  );
}
