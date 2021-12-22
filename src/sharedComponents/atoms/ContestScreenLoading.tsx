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

export default function ContestScreenLoading(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark h-full')]}>
      <TopBar text={props.title} />
      <ContentLoader
        speed={1}
        backgroundColor="#172338"
        foregroundColor="#25385A">
        <Rect x="22" y="9" width="90" height="22" fill="#E91C1C" />
        <Rect x="135" y="9" width="90" height="22" fill="#C4C4C4" />
        <Rect x="256" y="9" width="90" height="22" fill="#C4C4C4" />
      </ContentLoader>
    </View>
  );
}
