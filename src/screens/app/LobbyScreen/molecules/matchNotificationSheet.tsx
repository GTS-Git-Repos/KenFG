import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {SwitchIcon} from '../../../../assets/newIcons/';

interface PropTypes {
  matchInfo: any;
}

export default function MatchNotificationSheet(props: PropTypes) {
  if (!props.matchInfo.current) {
    return null;
  }
  const teams = `${props.matchInfo?.current?.teams.a.key} VS ${props.matchInfo?.current?.teams.b.key}`;
  const tour = `${props.matchInfo?.current?.teams?.tournament?.short_name}`;

  return (
    <View style={[tailwind('bg-dark-3')]}>
      <TouchableOpacity style={styles.option}>
        <Text style={[tailwind('font-bold text-white font-15')]}>
          {teams.toUpperCase()}
        </Text>
        <SwitchIcon selected={false} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={[tailwind('font-bold text-white font-15')]}>{tour}</Text>
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
