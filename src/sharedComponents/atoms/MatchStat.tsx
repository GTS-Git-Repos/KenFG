import React, {useEffect} from 'react';
import tailwind from '../../../tailwind';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {liveTeamShape} from '../../types/api';

interface PropTypes {
  matchStatus: string;
  team_a: any;
  team_b: any;
  score_a: any;
  score_b: any;
}

export default function MatchStat(props: PropTypes) {
  

  return (
    <View style={[tailwind('flex-row items-center justify-between')]}>
      <View style={[tailwind('flex-col'), {flex: 4}]}>
        <Text style={[tailwind('font-regular text-white font-14')]}>
          {props.team_a.name}
        </Text>
        {props.score_a.length > 1 && (
          <CompletedInnings
            runs={props.score_a[0]?.runs}
            wickets={props.score_a[0]?.wickets}
            overs={props.score_a[0]?.overs}
          />
        )}
        {props.score_a.length > 1 ? (
          <View style={[tailwind('flex-row items-center py-0.5')]}>
            <Text style={[tailwind('font-bold text-white font-20')]}>
              {props.score_a[1].runs}/{props.score_a[1].wickets}
            </Text>
            <Text style={[tailwind('font-regular text-dark-1 pl-2 font-12')]}>
              ({props.score_a[1].overs})
            </Text>
          </View>
        ) : (
          <View style={[tailwind('flex-row items-center py-0.5')]}>
            <Text style={[tailwind('font-bold text-white font-20')]}>
              {props.score_a[0].runs}/{props.score_a[0].wickets}
            </Text>
            <Text style={[tailwind('font-regular text-dark-1 pl-2 font-12')]}>
              ({props.score_a[0].overs})
            </Text>
          </View>
        )}
      </View>
      {props.matchStatus === 'completed' ? <Completed /> : <LiveIndicator />}

      <View style={[tailwind('flex-col items-end'), {flex: 4}]}>
        <Text style={[tailwind('font-regular text-white font-14')]}>
          {props.team_b.name}
        </Text>
        {props.score_b.length > 1 && (
          <CompletedInnings
            runs={props.score_b[0]?.runs}
            wickets={props.score_b[0]?.wickets}
            overs={props.score_b[0]?.overs}
          />
        )}
        {props.score_b.length > 1 ? (
          <View style={[tailwind('flex-row items-center py-0.5')]}>
            <Text style={[tailwind('font-bold text-white font-20')]}>
              {props.score_b[1].runs}/{props.score_b[1].wickets}
            </Text>
            <Text style={[tailwind('font-regular text-dark-1 pl-2 font-12')]}>
              ({props.score_b[1].overs})
            </Text>
          </View>
        ) : (
          <View style={[tailwind('flex-row items-center py-0.5')]}>
            <Text style={[tailwind('font-bold text-white font-20')]}>
              {props.score_b[0].runs}/{props.score_b[0].wickets}
            </Text>
            <Text style={[tailwind('font-regular text-dark-1 pl-2 font-12')]}>
              ({props.score_b[0].overs})
            </Text>
          </View>
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

const CompletedInnings = (props: any) => {
  return (
    <View style={[tailwind('flex-row items-center pt-0.5')]}>
      <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
        {props.runs}/{props.wickets}{' '}
      </Text>
      <Text style={[tailwind('font-regular text-dark-1 font-9')]}>
        ({props.overs})
      </Text>
    </View>
  );
};
