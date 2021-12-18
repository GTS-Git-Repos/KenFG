import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import MyContestStatus from './MyContestStatus';

interface PropTypes {
  text?: string;
}

export default function MyContestPage(props: PropTypes) {
  return (
    <ScrollView style={[tailwind('')]}>
      <MyContestStatus />
    </ScrollView>
  );
}
