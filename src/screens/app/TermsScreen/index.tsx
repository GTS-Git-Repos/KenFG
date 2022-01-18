import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import tailwind from '../../../../tailwind';
import {TopBar} from '../../../sharedComponents';
import TermsTitle from './atoms/TermsTitle';

export default function TermsScreen() {
  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Terms & Condition'} />
      <ScrollView>
        <TermsTitle text={'Ken11.com'} />
      </ScrollView>
    </View>
  );
}
