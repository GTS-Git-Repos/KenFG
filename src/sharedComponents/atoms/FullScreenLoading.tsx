import React from 'react';
import tailwind from '../../../tailwind';
import {View, Dimensions, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TopBar from '../atoms/TopBar';
import ContentLoader, {Rect} from 'react-content-loader/native';

interface PropTypes {
  title: string;
}

const width = Dimensions.get('window').width;

export default function FullScreenLoading(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark h-full')]}>
      <TopBar text={props.title} />
      <ContentLoader
        speed={1}
        backgroundColor="#172338"
        foregroundColor="#25385A">
        <Rect x="7" y="10" rx="2" ry="5" width={width - 15} height="117" />
        <Rect x="7" y="137" rx="2" ry="5" width={width - 15} height="117" />
        <Rect x="7" y="264" rx="2" ry="5" width={width - 15} height="117" />
        <Rect x="7" y="391" rx="2" ry="5" width={width - 15} height="117" />
      </ContentLoader>

      {/* <View style={[tailwind('flex-row items-center justify-between  my-2')]}>
        <View style={[tailwind('bg-dark-3 bg-red-400 mx-3 h-20 ')]}></View>
        <View style={[tailwind('bg-dark-3  mx-3 h-20 ')]}></View>
      </View> */}
    </View>
  );
}
