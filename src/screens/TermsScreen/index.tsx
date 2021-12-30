import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import tailwind from '../../../tailwind';
import {useNavigation} from '@react-navigation/native';
import {TopBar} from '../../sharedComponents';
import TermsTitle from './atoms/TermsTitle';

const log = console.log;

log('TermsSubtitle', TermsTitle);

export default function TermsScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Terms & Condition'} />
      <ScrollView>
        <TermsTitle text={'Ken11.com'} />
      </ScrollView>
    </View>
  );
}
