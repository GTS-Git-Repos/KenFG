import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {liveTeamShape} from '../../types/api';

interface PropTypes {
  completed: boolean;
  team_a: liveTeamShape;
  team_b: liveTeamShape;
}

export default function MatchStat(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center justify-between')]}>
      <View style={[tailwind('flex-col'), {flex: 4}]}>
        <Text style={[tailwind('font-regular text-white font-14')]}>
          {props.team_a.name}
        </Text>
        {props.team_a.has_points ? (
          <View style={[tailwind('flex-row items-center py-0.5')]}>
            <Text style={[tailwind('font-bold text-white font-20')]}>
              {props.team_a.runs}/{props.team_a.wickets}
            </Text>
            <Text style={[tailwind('font-regular text-dark-1 pl-2 font-14')]}>
              ({props.team_a.overs})
            </Text>
          </View>
        ) : (
          <NoPoints />
        )}
      </View>
      {props.completed ? <Completed /> : <LiveIndicator />}

      <View style={[tailwind('flex-col items-end'), {flex: 4}]}>
        <Text style={[tailwind('font-regular text-white font-14')]}>
          {props.team_b.name}
        </Text>
        {props.team_b.has_points ? (
          <View style={[tailwind('flex-row items-center py-0.5')]}>
            <Text style={[tailwind('font-bold text-white font-20')]}>
              {props.team_b.runs}/{props.team_b.wickets}
            </Text>
            <Text style={[tailwind('font-regular text-dark-1 pl-2 font-12')]}>
              ({props.team_b.overs})
            </Text>
          </View>
        ) : (
          <NoPoints />
        )}
      </View>
    </View>
  );
}

const LiveIndicator = () => {
  return (
    <View style={[tailwind('flex-row justify-center items-center'), {flex: 2}]}>
      <View
        style={[
          tailwind('rounded-full'),
          {backgroundColor: '#EB5757', width: 6, height: 6},
        ]}></View>
      <Text style={[tailwind('font-bold uppercase text-red-400 font-13 px-1')]}>
        LIVE
      </Text>
    </View>
  );
};

const Completed = () => {
  return (
    <View
      style={[tailwind('flex-row justify-center items-center'), {flex: 2.5}]}>
      <View
        style={[
          tailwind('rounded-full'),
          {backgroundColor: '#006A4D', width: 6, height: 6},
        ]}></View>
      <Text
        style={[tailwind('font-regular uppercase text-white font-11 px-1')]}>
        COMPLETED
      </Text>
    </View>
  );
};

const NoPoints = () => {
  return (
    <View style={[tailwind('flex-row items-center py-0.5')]}>
      <Text style={[tailwind('font-regular text-dark-1 font-13')]}>
        Yet to bat
      </Text>
      <Text style={[tailwind('font-regular text-dark-1 pl-2 font-14')]}></Text>
    </View>
  );
};
