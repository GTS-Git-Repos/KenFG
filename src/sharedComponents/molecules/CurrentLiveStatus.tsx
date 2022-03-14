import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text, ScrollView} from 'react-native';

interface CurrentPlayerStatusShape {
  striker: BatterShape;
  nonStriker: BatterShape;
  bowler: any;
  lastOverData: any[];
}

interface BatterShape {
  key: string;
  name: string;
  runs: number;
  balls: number;
}
interface BowlerShape {
  key: string;
  given_runs: number;
  name: string;
  taken_wicket: number;
  used_overs: number;
}

export default function CurrentLiveStats(props: CurrentPlayerStatusShape) {
  if (!props.striker && !props.nonStriker && !props.lastOverData) {
    return null;
  }
  return (
    <View style={[tailwind('flex-row my-2')]}>
      <View style={[tailwind(''), {flex: 4.75}]}>
        {props.striker && (
          <View
            style={[tailwind('flex-row justify-between items-center pb-1')]}>
            <Text style={[tailwind('font-bold text-white font-13')]}>
              {props.striker.name}
            </Text>
            <View style={[tailwind('flex-row justify-between items-center')]}>
              <Text style={[tailwind('font-bold text-white font-14')]}>
                {props.striker.runs}
              </Text>
              <Text style={[tailwind('font-bold px-1 text-light font-12')]}>
                ({props.striker.balls})
              </Text>
            </View>
          </View>
        )}

        {props.nonStriker && (
          <View
            style={[tailwind('flex-row justify-between items-center pb-1')]}>
            <Text style={[tailwind('font-regular text-dark-1 font-13')]}>
              {props.nonStriker.name}
            </Text>
            <View style={[tailwind('flex-row justify-between items-center')]}>
              <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
                {props.nonStriker.runs}
              </Text>
              <Text style={[tailwind('font-regular px-1 text-dark-1 font-12')]}>
                ({props.nonStriker.balls})
              </Text>
            </View>
          </View>
        )}
      </View>
      <View style={[{flex: 0.25}]}></View>
      <View style={[tailwind('flex-col justify-between'), {flex: 4.75}]}>
        {props.bowler && (
          <CurrentBowlerStats
            key={props.bowler.key}
            given_runs={props.bowler.given_runs}
            name={props.bowler.name}
            taken_wicket={props.bowler.taken_wicket}
            used_overs={props.bowler.used_overs}
          />
        )}
        {props.lastOverData && <OverStats lastOverData={props.lastOverData} />}
      </View>
    </View>
  );
}
const CurrentBowlerStats = (props: BowlerShape) => {
  return (
    <View style={[tailwind('')]}>
      <View style={[tailwind('flex-row justify-between items-center')]}>
        <Text
          numberOfLines={1}
          style={[tailwind('font-bold text-white font-13'), {flex: 6}]}>
          {props.name}
        </Text>
        <View
          style={[tailwind('flex-row justify-end items-center'), {flex: 6}]}>
          <Text style={[tailwind('font-bold text-white font-14')]}>
            {props.taken_wicket}/{props.given_runs}
          </Text>
          <Text style={[tailwind('font-bold px-1 text-light font-14')]}>
            ({props.used_overs})
          </Text>
        </View>
      </View>
    </View>
  );
};

const OverStats = (props: any) => {
  return (
    <View style={[tailwind('')]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {props.lastOverData.map((item: any, index: number) => {
          return item != null ? (
            <BallStats info={item} key={index} />
          ) : (
            <EmptyBall key={index} />
          );
        })}
      </ScrollView>
    </View>
  );
};

const BallStats = (props: any) => {
  return (
    <View
      style={[
        tailwind('rounded-full flex-row items-center justify-center mr-1'),
        {
          width: 20,
          height: 20,
          backgroundColor: props.info === 'w' ? 'red' : 'white',
        },
      ]}>
      <Text
        style={[
          tailwind('font-bold text-center text-black uppercase font-11'),
          {
            color: props.info === 'w' ? 'white' : 'black',
          },
        ]}>
        {props.info}
      </Text>
    </View>
  );
};

const EmptyBall = ({}) => {
  return (
    <View
      style={[
        tailwind('rounded-full mr-1'),
        {
          width: 20,
          height: 20,
          borderColor: 'white',
          borderRadius: 10,
          borderStyle: 'dashed',
          borderWidth: 1,
        },
      ]}></View>
  );
};
