import React, {useRef, useState} from 'react';
import {LoadingSpinner} from '../../../sharedComponents';
import {useIsScreenReady} from '../../../utils/customHoooks';
import MyMatchesScreen from './my.matches.screen';

export default function MyMatchesScreenHOC() {
  const pagerRef = useRef();
  const isScreenReady = useIsScreenReady();
  const [activeTab, setActiveTab] = useState(0);

  if (!isScreenReady) {
    return <LoadingSpinner title={'My Matches'} />;
  }

  return (
    <MyMatchesScreen
      pagerRef={pagerRef}
      upcomming={false}
      live={false}
      completed={false}
    />
  );
}
