import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  topSection: HeaderSectionProps;
}
interface HeaderSectionProps {
  key: string;
  code: string;
  overs: string;
  runs: string;
  wickets: string;
  isExpanded?: boolean;
}

export default function TeamScoreBoardInnings(props: PropTypes) {
  return (
    <View style={[tailwind('')]}>
      <HeaderSection
        key={props.topSection.key}
        code={props.topSection.code}
        overs={props.topSection.overs}
        runs={props.topSection.runs}
        wickets={props.topSection.wickets}
        isExpanded={false}
      />
    </View>
  );
}

const HeaderSection = (props: HeaderSectionProps) => {
  return (
    <View
      style={[
        tailwind(
          'flex-row py-3 bg-dark-3 border-b border-gray-800 items-center',
        ),
        {
          backgroundColor: '#362F20',
        },
      ]}>
      <View style={[tailwind('flex-row items-center'), {flex: 6}]}>
        <Text
          style={[
            tailwind('font-bold text-white uppercase pl-4 pr-1 font-14'),
          ]}>
          {props.code}
        </Text>
        {/* {props.is_batting && (
            <Text
              style={[
                tailwind(
                  'font-regular rounded-full bg-dark-4 px-2 py-1 text-dark-1 mx-3 font-10',
                ),
              ]}>
              Batting
            </Text>
          )} */}
      </View>

      <View
        style={[tailwind('flex-row justify-between items-center'), {flex: 6}]}>
        <Text style={[tailwind('font-regular text-light font-12'), {flex: 4}]}>
          {`${props.overs} Overs`}
        </Text>
        <Text
          style={[tailwind('font-bold px-3 text-light font-14'), {flex: 4}]}>
          {props.runs}/{props.wickets}
        </Text>

        {props.isExpanded ? (
          <Icon
            name="chevron-down"
            size={20}
            style={[tailwind('mr-2')]}
            color="#8797B1"
          />
        ) : (
          <Icon
            name="chevron-up"
            size={20}
            style={[tailwind('mr-2')]}
            color="#B2933D"
          />
        )}
      </View>
    </View>
  );
};
