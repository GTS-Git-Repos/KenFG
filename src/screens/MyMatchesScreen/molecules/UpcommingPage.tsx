import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ButtonComponent} from '../../../sharedComponents';
import assets from '../../../constants/assets_manifest';
import NoContestFound from '../atoms/NoContestFound';

interface PropTypes {
  text?: string;
}

export default function UpcommingPage(props: PropTypes) {
  return <NoContestFound text={'You haven\'t joined any upcomming contests'} />;
}
