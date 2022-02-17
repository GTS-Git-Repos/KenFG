import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text} from 'react-native';

interface PropTypes {
  isDarkMode: boolean;
  total_spots: any;
  filled_spots: any;
}

export default function ProgressBarContestCard(props: PropTypes) {
  return (
    <View>
      <View
        style={{
          width: '100%',
          borderRadius: 10,
          height: 2.5,
          backgroundColor: '#8797B14D',
        }}>
        <View
          style={[
            {
              backgroundColor: `${props.isDarkMode ? '#B2933D' : '#00513B'}`,
              width: `10%`,
              height: 2.5,
            },
          ]}></View>
      </View>
      <View style={[tailwind('flex-row justify-between items-center pt-3')]}>
        <Text style={[tailwind('font-regular text-secondary font-14')]}>
          {props.total_spots - props?.filled_spots[0]?.team_count} spots left
        </Text>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
          {props.total_spots} Spots
        </Text>
      </View>
    </View>
  );
}
