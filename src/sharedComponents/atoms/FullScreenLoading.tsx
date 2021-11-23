import React from 'react';
import tailwind from '../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TopBar from '../atoms/TopBar';

interface PropTypes {
  title: string;
}

export default function FullScreenLoading(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark h-full')]}>
      <TopBar text={props.title} />
      <View style={[tailwind('bg-dark-3 my-5 mx-2 h-36 ')]}></View>
      <View style={[tailwind('bg-dark-3  mx-1 h-20 ')]}></View>
      <View style={[tailwind('bg-dark-3  mx-2 my-4 h-20 ')]}></View>
      <View style={[tailwind('bg-dark-3  mx-2   h-20 ')]}></View>

      {/* <View style={[tailwind('flex-row items-center justify-between  my-2')]}>
        <View style={[tailwind('bg-dark-3 bg-red-400 mx-3 h-20 ')]}></View>
        <View style={[tailwind('bg-dark-3  mx-3 h-20 ')]}></View>
      </View> */}
    </View>
  );
}
