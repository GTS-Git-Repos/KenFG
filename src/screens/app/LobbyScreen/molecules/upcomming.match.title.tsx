import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text} from 'react-native';
import {ContestTypeSwitch} from '../../../../sharedComponents';
import {getAppThemeSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';
import {useSelector} from 'react-redux';

interface PropTypes {
  isFullMatch: boolean;
  onPressMatchType(match_type: number): void;
}

export default function upcommingMatchTitle(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[tailwind('flex-row items-center justify-between')]}>
      <Text
        style={[
          tailwind('font-bold uppercase font-12'),
          dT ? clr.td2 : clr.td1,
        ]}>
        Upcomming
      </Text>
      <ContestTypeSwitch
        dT={dT}
        isFullMatch={props.isFullMatch}
        onPressMatchType={props.onPressMatchType}
      />
    </View>
  );
}
