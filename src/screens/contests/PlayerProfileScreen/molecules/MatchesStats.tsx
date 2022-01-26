import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  op_team: string;
  date: string;
  selected_by: string;
  points: string;
  credits: string;
}

interface TopSectionPropType {
  op_team: string;
  date: string;
}

interface MatchDataPropType {
  selected_by: string;
  points: string;
  credits: string;
}

export default function MatchesStats(props: PropTypes) {
  return (
    <View style={[tailwind('mx-2 mb-2 bg-dark-3 py-2  rounded')]}>
      <TopSection op_team={props.op_team} date={props.date} />
      <MatchData
        selected_by={props.selected_by}
        points={props.points}
        credits={props.credits}
      />
    </View>
  );
}

const TopSection = (props: TopSectionPropType) => {
  return (
    <View style={[tailwind('flex-row items-center px-4 pb-1 justify-between')]}>
      <View style={[tailwind('flex-row items-center')]}>
        <Text style={[tailwind('font-regular text-white font-11')]}>VS</Text>
        <Text style={[tailwind('font-bold text-white px-2 font-12')]}>
          {props.op_team}
        </Text>
        <Text style={[tailwind('font-bold text-dark-1 font-12')]}>
          {props.date}
        </Text>
      </View>
      <Icon name="chevron-down-outline" size={16} color="lightgray" />
    </View>
  );
};

const MatchData = (props: MatchDataPropType) => {
  return (
    <View style={[tailwind('flex-row items-center bg-dark-3 px-4 py-2')]}>
      <View style={[tailwind('items-start'), {flex: 4}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-11 pb-0.5')]}>
          Selected by
        </Text>
        <Text style={[tailwind('font-regular text-white font-18')]}>
          {props.selected_by}
        </Text>
      </View>
      <View
        style={[
          tailwind('border-l border-gray-400 border-r items-center'),
          {flex: 4},
        ]}>
        <Text style={[tailwind('font-regular text-dark-1 font-11 pb-0.5')]}>
          Points
        </Text>
        <Text style={[tailwind('font-regular text-white font-18')]}>
          {props.points}
        </Text>
      </View>

      <View style={[tailwind('items-end'), {flex: 4}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-11 pb-0.5')]}>
          Credits
        </Text>
        <Text style={[tailwind('font-regular text-white font-18')]}>
          {props.credits}
        </Text>
      </View>
    </View>
  );
};
