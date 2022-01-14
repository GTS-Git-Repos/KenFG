import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, useWindowDimensions, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  amount: string;
  isSuccess: boolean;
  level: number;
}

export default function LevelCard(props: PropTypes) {
  const {width} = useWindowDimensions();
  return (
    <View
      style={[
        tailwind('flex-col items-center mt-4 justify-center'),
        {width: width / 3},
      ]}>
      <Prize amount={props.amount} success={props.isSuccess} />
      <View style={[tailwind(''), {width: 60, height: 50}]}>
        <Image
          resizeMode="contain"
          source={assets.trophy}
          style={[tailwind(''), {width: 60, height: 50}]}
        />
      </View>
      <Level level={props.level} />
    </View>
  );
}

const Prize = (props: any) => {
  return (
    <View
      style={[
        tailwind(
          `flex-row items-center top-2 rounded p-0.5 ${
            props.success
              ? 'bg-green-500 border-4 border-green-700'
              : 'bg-red-500 border-4 border-red-700'
          }`,
        ),
      ]}>
      <Text style={[tailwind('font-regular text-white pl-0.5 font-11')]}>
        {'\u20B9'} {props.amount}
      </Text>
      {props.success ? (
        <Icon name="checkmark-outline" size={16} color="white" />
      ) : (
        <Icon name="close-outline" size={16} color="white" />
      )}
    </View>
  );
};

const Level = (props: any) => {
  return (
    <View
      style={[
        tailwind(
          'flex-row items-center p-0.5 bg-white border-2 border-gray-300',
        ),
        {borderRadius: 3},
      ]}>
      <Text style={[tailwind('font-bold text-brown-5 text-center font-11')]}>
        Lv. {props.level}
      </Text>
    </View>
  );
};
