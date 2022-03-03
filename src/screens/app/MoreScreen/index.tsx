import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import tailwind from '../../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {useNavigation} from '@react-navigation/native';
import {MoneySideIcon} from '../../../assets/newIcons';
import {TopBar, MoneyIcon} from '../../../sharedComponents';
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
        <Links
          icon={<MoneySideIcon dT={true} />}
          text={'Fair Play Guidelines'}
          goto={''}
        />
        <Links
          icon={<MoneySideIcon dT={false} />}
          text={'Privacy Contest Code'}
          goto={''}
        />
        <Links
          icon={<MoneySideIcon dT={false} />}
          text={'About Us'}
          goto={'AboutUsScreen'}
        />
        <Links
          icon={<MoneySideIcon dT={false} />}
          text={'Legality'}
          goto={''}
        />
        <Links
          icon={<MoneySideIcon dT={false} />}
          text={'T&C'}
          goto={'TermsScreen'}
        />
        <Links
          icon={<MoneySideIcon dT={false} />}
          text={'Join with us'}
          goto={''}
        />
      </ScrollView>
    </View>
  );
}
