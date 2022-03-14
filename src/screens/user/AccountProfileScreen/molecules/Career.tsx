import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  career: any;
}

export default function Career(props: PropTypes) {
  return (
    <View>
      <View style={[tailwind('bg-dark-3 rounded-t py-3 px-4')]}>
        <WinRate />
        <View style={[ss.frc, {marginTop: 10}]}>
          <MatchStat
            index={0}
            text="Mathches"
            value={props.career?.total_matches}
          />
          <MatchStat
            index={1}
            text="Series"
            value={props.career?.total_series}
          />
          <MatchStat
            index={2}
            text="Contests"
            value={props.career?.total_contests}
          />
        </View>
      </View>
      <View
        style={[
          tailwind('bg-dark-3 rounded-b'),
          {padding: 6},
          {backgroundColor: '#121D2E'},
        ]}>
        <Text style={[ss.txt, {textAlign: 'center'}]}>
          You have been testing your skill in Kenfg since {props.career?.since}
        </Text>
      </View>
    </View>
  );
}

const WinRate = (props: any) => {
  return (
    <View style={[ss.frc]}>
      <View style={[tailwind(''), {flex: 2}]}>
        <Text style={[tailwind('font-regular text-dark-1  font-13')]}>
          Win Rate
        </Text>
        <Text
          style={[
            tailwind('font-regular text-light py-2 text-center font-13'),
          ]}>
          {props.winrate || 0} %
        </Text>
      </View>
      <View style={[tailwind('bg-dark rounded-full'), {flex: 5, height: 5}]}>
        <View
          style={[
            tailwind('bg-secondary rounded-full'),
            {width: '5%', height: 5},
          ]}></View>
      </View>

      <View style={[tailwind(''), {flex: 3}]}>
        <Text
          style={[
            tailwind('font-regular text-brown-2 uppercase text-right font-12'),
          ]}>
          Total Won
        </Text>
        <Text
          style={[tailwind('font-regular text-light py-2 text-right font-13')]}>
          {'\u20B9'} {props.total_won || 0}
        </Text>
      </View>
    </View>
  );
};

const MatchStat = (props: any) => {
  return (
    <View
      style={[
        tailwind(
          `${props.index === 1 ? 'border-l border-r border-gray-800' : ''}`,
        ),
        {flex: 10 / 3},
      ]}>
      <Text
        style={[
          tailwind(
            `font-regular text-dark-1 font-13 ${
              props.index === 2 ? 'text-right' : ''
            }
            ${props.index === 1 ? 'text-center ' : ''}
            `,
          ),
        ]}>
        {props.text}
      </Text>
      <Text
        style={[
          tailwind(
            `font-regular text-light font-15 ${
              props.index === 2 ? 'text-right' : ''
            }
            ${props.index === 1 ? 'text-center' : ''}
            `,
          ),
          {marginTop: 8},
        ]}>
        {props.value}
      </Text>
    </View>
  );
};

const ss = StyleSheet.create({
  frc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    fontFamily: 'gadugi-normal',
    color: '#8797B1',
    fontSize: 13,
  },
});
