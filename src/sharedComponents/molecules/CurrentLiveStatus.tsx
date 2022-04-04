import React from 'react';
import tailwind from '../../../tailwind';
// import {} from '../../types/match';/
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default function CurrentLiveStats(props: any) {
  const HAS_STRIKER = props.striker;
  const HAS_NON_STRIKER = props.nonStriker;
  const HAS_BOWLER = props.bowler;
  const HAS_LAST_OVER = props.lastOverData;
  const ALL_NONE =
    !HAS_STRIKER && !HAS_NON_STRIKER && !HAS_BOWLER && !HAS_LAST_OVER;

  if (ALL_NONE) {
    return null;
  }
  return (
    <View style={[ss.root]}>
      <View style={[ss.batR]}>
        {HAS_STRIKER && (
          <View style={[ss.container]}>
            <View style={[ss.nameC]}>
              <Text numberOfLines={1} style={[ss.activeTxt]}>
                {props.striker.name}
              </Text>
            </View>
            <View style={ss.scoreC}>
              <Text style={[ss.activeTxt]}>{props.striker.runs}</Text>
              <Text style={[ss.activeTxt, ss.ph4]}>
                ({props.striker.balls})
              </Text>
            </View>
          </View>
        )}

        {HAS_NON_STRIKER && (
          <View style={[ss.container]}>
            <View style={[ss.nameC]}>
              <Text numberOfLines={1} style={[ss.txt]}>
                {props.nonStriker.name}
              </Text>
            </View>
            <View style={ss.scoreC}>
              <Text style={[ss.txt]}>{props.nonStriker.runs}</Text>
              <Text style={[ss.txt, ss.ph4]}>({props.nonStriker.balls})</Text>
            </View>
          </View>
        )}
      </View>

      <View style={[ss.space]}></View>

      <View style={[ss.bowlC]}>
        {HAS_BOWLER && (
          <View style={[ss.container]}>
            <View style={[ss.nameC]}>
              <Text numberOfLines={1} style={[ss.activeTxt]}>
                {props.bowler.name}
              </Text>
            </View>
            <View style={ss.scoreC}>
              <Text style={[ss.activeTxt]}>
                {props.bowler.taken_wicket}/{props.bowler.given_runs}
              </Text>
              <Text style={[ss.activeTxt, ss.ph4]}>
                ({props.bowler.used_overs})
              </Text>
            </View>
          </View>
        )}
        {props.lastOverData && <OverStats over={props.lastOverData} />}
      </View>
    </View>
  );
}

const OverStats = (props: {over: Array<number>}) => {
  return (
    <View style={[tailwind('')]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {props.over.map((item: any, index: number) => {
          return item != null ? (
            <BallStats value={item} key={index} />
          ) : (
            <EmptyBall key={index} />
          );
        })}
      </ScrollView>
    </View>
  );
};

const BallStats = ({value}: any) => {
  return (
    <View
      style={[
        ss.ballC,
        {
          backgroundColor: value === 'w' ? 'red' : 'white',
        },
      ]}>
      <Text
        style={[
          ss.ball,
          {
            color: value === 'w' ? 'white' : 'black',
          },
        ]}>
        {value}
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

const ss = StyleSheet.create({
  root: {
    flexDirection: 'row',
    marginVertical: 8,
    // alignItems: 'center',
  },
  batR: {
    flex: 4.75,
  },
  bowlC: {
    flex: 4.75,
    justifyContent: 'flex-end',
  },
  space: {
    flex: 0.5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingBottom: 4,
  },
  nameC: {
    flex: 6,
  },
  scoreC: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  activeTxt: {
    fontFamily: 'Gadugi-Bold',
    color: '#FFFFFF',
    fontSize: 13,
    paddingBottom: 6,
  },
  txt: {
    fontFamily: 'Gadugi-Normal',
    fontSize: 13,
    color: '#8797B1',
  },
  frcb: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ph4: {
    paddingHorizontal: 2,
  },
  ballC: {
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
    width: 20,
    height: 20,
  },
  ball: {
    fontFamily: 'Gadugi-Bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 11,
  },
});
