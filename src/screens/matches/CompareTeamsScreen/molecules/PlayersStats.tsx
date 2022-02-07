import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text} from 'react-native';
import ComparePlayerProfile from '../atoms/ComparePlayerProfile';
import {PlayerRole} from '../compare.team.workers';

interface PropTypes {
  srcTeamPlayers: Array<any>;
  oppTeamPlayers: Array<any>;
}

export default function PlayersStats(props: PropTypes) {
  return (
    <View style={[tailwind('py-3 bg-dark-3')]}>
      <View style={[tailwind('flex-row px-1')]}>
        <View style={[tailwind('border-r border-gray-700'), {flex: 4.5}]}>
          {props.srcTeamPlayers.map((item: any, index: number) => {
            return (
              <ComparePlayerProfile
                key={`${item.uuid}${item.key}`}
                name={item.name}
                role={PlayerRole(item.team_key, item.seasonal_role)}
                points={item.points}
                team1={false}
              />
            );
          })}
        </View>

        <View style={[tailwind('border-r border-gray-700'), {flex: 4.5}]}>
          {props.oppTeamPlayers.map((item: any, index: any) => {
            return (
              <ComparePlayerProfile
                key={`${item.uuid}${item.key}`}
                name={item.name}
                role={PlayerRole(item.team_key, item.seasonal_role)}
                points={item.points}
                team1={false}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}
