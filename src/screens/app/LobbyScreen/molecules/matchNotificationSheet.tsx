import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {SwitchIcon} from '../../../../assets/newIcons/';
import {getAppThemeSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';
import {useSelector} from 'react-redux';

interface PropTypes {
  matchInfo: any;
}

export default function MatchNotificationSheet(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  if (!props.matchInfo.current) {
    return null;
  }
  const teams = `${props.matchInfo?.current?.teams.a.key} VS ${props.matchInfo?.current?.teams.b.key}`;
  const tour = `${props.matchInfo?.current?.teams?.tournament?.short_name}`;

  return (
    <View style={[dT ? clr.bgd2 : clr.bgw]}>
      <TouchableOpacity style={styles.option}>
        <Text style={[tailwind('font-bold font-15'), dT ? clr.tw : clr.td1]}>
          {teams.toUpperCase()}
        </Text>
        <SwitchIcon selected={false} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={[tailwind('font-bold font-15'), dT ? clr.tw : clr.td1]}>
          {tour}
        </Text>
        <SwitchIcon selected={false} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
  },
});
