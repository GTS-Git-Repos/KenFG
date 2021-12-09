import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
import {TeamsCard} from '../../../sharedComponents';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  teams: any;
  status: string;
}

export default function MyTeamsPage(props: PropTypes) {
  if (props.status === 'loading') {
    return (
      <Text style={[tailwind('font-regular text-light font-15')]}>
        Loading...
      </Text>
    );
  }
  if (props.status === 'success' && !props?.teams?.teams) {
    return (
      <Text style={[tailwind('font-regular text-light font-15')]}>
        No Teams Found
      </Text>
    );
  }

  return (
    <View style={[tailwind('m-3')]}>
      {props.teams.teams.map((item: any) => {
        return <TeamsCard teams_key={item.teams_key} key={item.teams_key} />;
      })}
    </View>
  );
}
