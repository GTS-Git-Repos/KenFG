import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import NoContest from '../atoms/no.contest';

interface PropTypes {
  text?: string;
}

export default function LivePage(props: PropTypes) {
  return (
    <NoContest
      text={"You haven't joined any contests that are live"}
      actionText={'View Upcomming Matches'}
    />
  );
}
