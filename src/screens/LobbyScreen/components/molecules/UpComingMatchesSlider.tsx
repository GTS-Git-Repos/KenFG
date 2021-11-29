import React from 'react';
import tailwind from '../../../../../tailwind';
import UpCommingMatchesCard from '../atoms/UpCommingMatchesCard';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type data = undefined | boolean | [];

interface PropTypes {
  data: any;
  status: any;
}

export default function UpComingMatchesSlider(props: PropTypes) {
  if (props.status.isLoading) {
    return (
      <Text
        style={[
          tailwind('font-regular text-light text-center text-light font-15'),
        ]}>
        Loading ...
      </Text>
    );
  }
  if (!props.status.isLoading && !props.data) {
    return (
      <Text
        style={[
          tailwind('font-regular text-light text-center text-light font-15'),
        ]}>
        No Upcomming Matches
      </Text>
    );
  }

  return (
    <View style={[tailwind('flex-row flex-wrap')]}>
      {props.data.map((item: any) => (
        <View key={item.key} style={[tailwind('w-6/12')]}>
          <UpCommingMatchesCard
            tournament_name={item?.tournament?.name}
            team_a_name={item?.teams?.a?.code}
            team_a_flag={''}
            team_b_name={item?.teams?.b?.code}
            team_b_flag={''}
            tournament_shortName={item?.tournament?.short_name}
            price={item.price}
          />
        </View>
      ))}
    </View>
  );
}
