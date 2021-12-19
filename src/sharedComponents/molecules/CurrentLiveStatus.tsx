import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text, ScrollView} from 'react-native';
// import CurrentPlayerStats from '../atoms/CurrentPlayerStats';
// import CurrentOverStats from './CurrentOverStats';
// import OverStats from '../atoms/OverStats';
// import Icon from 'react-native-vector-icons/Ionicons';

interface CurrentPlayerStatusShape {
  player1: string;
  player2: string;
  player1_runs: string;
  player1_balls: string;
  player2_runs: string;
  player2_balls: string;
  active: number;
}

export default function CurrentLiveStats(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row')]}>
      <View style={[tailwind(''), {flex: 4.75}]}>
        <CurrentPlayerStats
          player1={'D Warner'}
          player2={'A Finch'}
          player1_runs={'23'}
          player1_balls={'8'}
          player2_runs={'43'}
          player2_balls={'23'}
          active={0}
        />
      </View>
      <View style={[{flex: 0.25}]}></View>
      <View style={[tailwind('flex-col justify-between'), {flex: 4.75}]}>
        <CurrentOverStats />
        <OverStats />
      </View>
    </View>
  );
}

const CurrentPlayerStats = (props: CurrentPlayerStatusShape) => {
  return (
    <View style={[tailwind('flex-col')]}>
      <View style={[tailwind('flex-row justify-between items-center pb-1')]}>
        <Text style={[tailwind('font-bold text-white font-13')]}>
          {props.player1}
        </Text>
        <View style={[tailwind('flex-row justify-between items-center')]}>
          <Text style={[tailwind('font-bold text-white font-14')]}>
            {props.player1_runs}
          </Text>
          <Text style={[tailwind('font-bold px-1 text-light font-12')]}>
            ({props.player1_balls})
          </Text>
        </View>
      </View>

      <View style={[tailwind('flex-row justify-between py-1 items-center')]}>
        <Text style={[tailwind('font-regular text-dark-1 font-13')]}>
          {props.player2}
        </Text>
        <View style={[tailwind('flex-row justify-between items-center')]}>
          <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
            {props.player2_runs}
          </Text>
          <Text style={[tailwind('font-regular text-dark-1  font-13')]}>
            ({props.player2_balls})
          </Text>
        </View>
      </View>
    </View>
  );
};

const CurrentOverStats = () => {
  return (
    <View style={[tailwind('')]}>
      <View style={[tailwind('flex-row justify-between items-center')]}>
        <Text
          numberOfLines={2}
          style={[tailwind('font-bold text-white font-13'), {flex: 6}]}>
          A. Millence
        </Text>
        <View
          style={[tailwind('flex-row justify-end items-center'), {flex: 6}]}>
          <Text style={[tailwind('font-bold text-white font-14')]}>2/34</Text>
          <Text style={[tailwind('font-bold px-1 text-light font-14')]}>
            (3.2)
          </Text>
        </View>
      </View>
    </View>
  );
};

const OverStats = () => {
  return (
    <View style={[tailwind('')]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <BallStats info={3} />
        <BallStats info={0} />
        <BallStats info={4} />
        <BallStats info={3} />
        <EmptyBall />
        <EmptyBall />
      </ScrollView>
    </View>
  );
};

const BallStats = ({info}) => {
  return (
    <View
      style={[
        tailwind('rounded-full mr-1'),
        {
          width: 20,
          height: 20,
          backgroundColor: 'rgba(255, 255, 255,1)',
        },
      ]}>
      <Text
        style={[tailwind('font-bold text-center text-black top-0.5 font-13')]}>
        {info}
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
