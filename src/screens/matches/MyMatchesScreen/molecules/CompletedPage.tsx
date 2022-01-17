import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {ContestCard} from '../../../../sharedComponents';
import NoContest from '../atoms/no.contest';

interface PropTypes {
  text?: string;
}

export default function CompletedPage(props: PropTypes) {
  return <NoContest text={'You dont have any completed Contest'} />;
}
