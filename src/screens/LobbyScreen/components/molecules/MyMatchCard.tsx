import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MyMatchCardTopSection from '../atoms/MyMatchCardTopSection';
import TeamsMyMatchCard from '../atoms/TeamsMyMatchCard';
import SlideAddMyMatchCard from '../atoms/SlideAddMyMatchCard';

interface PropTypes {
  text?: string;
}

export default function MyMatchCard(props: PropTypes) {
  const {width} = useWindowDimensions();
  return (
    <View style={[tailwind('bg-primary rounded border border-gray-800')]}>
      <View style={[tailwind('p-1')]}>
        <MyMatchCardTopSection />
        <TeamsMyMatchCard />
      </View>
      <SlideAddMyMatchCard />
    </View>
  );
}
