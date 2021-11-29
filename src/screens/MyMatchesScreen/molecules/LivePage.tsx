import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import NoContestFound from '../atoms/NoContestFound';

interface PropTypes {
  text?: string;
}

export default function LivePage(props: PropTypes) {
  return <NoContestFound text={"You haven't joined any contests that are live"} />;
}
