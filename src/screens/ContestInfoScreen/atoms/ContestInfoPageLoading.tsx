import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {TopBar} from '../../../sharedComponents';

interface PropTypes {
  title: string;
}

export default function ContestInfoPageLoading(props: PropTypes) {
  return (
    <View style={[tailwind('h-full bg-dark-4')]}>
      <TopBar text={props.title} />
      <View style={[tailwind('py-4')]}>
        <ActivityIndicator size={'large'} color="#d1b45a" />
      </View>
    </View>
  );
}
