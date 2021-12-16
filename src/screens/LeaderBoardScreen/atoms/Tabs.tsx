import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  selectedTab: number;
}

export default function Tabs(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row bg-dark-3 items-center')]}>
      <View style={[tailwind(''), {flex: 6}]}>
        <TouchableOpacity style={[tailwind('pt-4 pb-3')]}>
          <Text style={[tailwind('font-bold text-center text-white font-14')]}>
            Series
          </Text>
        </TouchableOpacity>
        {props.selectedTab === 0 && <BottomLine />}
      </View>
      <View style={[tailwind(''), {flex: 6}]}>
        <TouchableOpacity style={[tailwind('pt-4 pb-3')]}>
          <Text
            style={[tailwind('font-regular text-center text-dark-1 font-14')]}>
            Weekly
          </Text>
        </TouchableOpacity>
        {props.selectedTab === 1 && <BottomLine />}
      </View>
    </View>
  );
}

const BottomLine = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={[tailwind('')]}
      colors={['#816D2E', '#614920']}>
      <View style={[tailwind(''), {height: 2}]}></View>
    </LinearGradient>
  );
};
