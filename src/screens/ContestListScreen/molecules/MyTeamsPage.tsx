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
  return (
    <View style={[tailwind('m-3')]}>
      <TeamsCard teams_key={'T1'} current={false} canModify={true} />
      <View style={[tailwind('h-20')]}></View>
    </View>
  );

  if (props.status === 'loading') {
    return (
      <Text style={[tailwind('font-regular text-light font-15')]}>
        Loading...
      </Text>
    );
  }
  if (props.status === 'success' && !props?.teams?.teams) {
    return (
      <Text
        style={[tailwind('font-regular text-center p-7 text-dark-1  font-15')]}>
        No Teams Found
      </Text>
    );
  }

  return (
    <View style={[tailwind('m-3')]}>
      {props.teams.teams.map((item: any, index: number) => {
        return (
          <TeamsCard
            key={index}
            teams_key={item.teams_key}
            // key={item.teams_key}
            canModify={true}
          />
        );
      })}
      <View style={[tailwind('h-20')]}></View>
    </View>
  );
}
