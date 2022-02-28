import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, ActivityIndicator} from 'react-native';
import Tabs from '../molecules/TabsContest';
import {TopbarContest} from '../../../../sharedComponents';
import {getAppThemeSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';
import {useSelector} from 'react-redux';

interface PropTypes {
  title: string;
}

export default function ContestScreenLoading(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[tailwind('bg-dark h-full')]}>
      <TopbarContest
        title={props.title}
        subtitle={'0h:00m:00s'}
        enableNotification={() => {}}
        openWallet={() => {}}
        dT={dT}
      />
      <View style={[tailwind('')]}>
        <Tabs
          selectedTab={0}
          teamsCount={false}
          onTabPressed={() => {}}
          contest_count={0}
          dT={dT}
        />
      </View>

      <View style={[tailwind('py-3')]}>
        <ActivityIndicator color="#d1b45a" size="large" />
      </View>
    </View>
  );
}
