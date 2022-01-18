import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {ContestCard} from '../../../../sharedComponents';
import NoContest from '../atoms/no.contest';

interface PropTypes {
  selectedTab: any;
  matches: any;
  matchesAPI: any;
}

export default function CompletedPage(props: PropTypes) {
  
  if (props.selectedTab !== 2) {
    return <NoContest text={''} actionText={''} loading={true} />;
  }
  return (
    <NoContest
      text={'You dont have any completed Contest'}
      actionText={'View Upcomming Matches'}
      loading={false}
    />
  );
}
