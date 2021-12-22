import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {BottomLine} from '../../../sharedComponents/';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  amount: string;
  plus: boolean;
  title: string;
  open: boolean;
}

export default function Transaction(props: PropTypes) {
  return (
    <View>
      <View
        style={[
          tailwind('bg-dark-3 flex-row items-center justify-between rounded-t'),
          {marginHorizontal: 5, paddingHorizontal: 16, paddingVertical: 12},
        ]}>
        <Text style={[tailwind('font-bold text-light font-14')]}>
          {props.plus ? '+ ' : '- '}
          {'\u20B9'}
          {props.amount}
        </Text>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
          {props.title}
        </Text>
        <Icon
          name={props.open ? 'chevron-up' : 'chevron-down'}
          size={24}
          color="#FFFFFF"
        />
      </View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[tailwind('')]}
        colors={
          props.open
            ? ['#000000', '#000000', '#000000']
            : ['#172338', '#8797B1', '#172338']
        }>
        <View style={[tailwind(''), {height: 0.4}]}></View>
      </LinearGradient>
      {props.open && <TransactionInfo />}
    </View>
  );
}

const TransactionInfo = () => {
  return (
    <View
      style={[
        tailwind('bg-dark-3 mb-2 rounded-b'),
        {marginHorizontal: 5, paddingHorizontal: 16, paddingVertical: 12},
      ]}>
      <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
        Transaction ID:
      </Text>
      <Text style={[tailwind('font-regular text-light py-1 font-14')]}>
        549372982368264868
      </Text>

      <Text style={[tailwind('font-regular text-dark-1 font-14 pt-2')]}>
        Transaction Date:
      </Text>
      <Text style={[tailwind('font-regular text-light py-1 font-14')]}>
        21 October
      </Text>

      <Text style={[tailwind('font-regular text-dark-1 font-14 pt-2')]}>
        Team Name
      </Text>
      <Text style={[tailwind('font-regular text-light py-1 font-14')]}>
        Team 1
      </Text>
    </View>
  );
};
