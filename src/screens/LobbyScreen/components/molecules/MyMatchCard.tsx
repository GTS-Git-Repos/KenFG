import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MyMatchCardTopSection from '../atoms/MyMatchCardTopSection';
import TeamsMyMatchCard from '../atoms/TeamsMyMatchCard';
import SlideAddMyMatchCard from '../atoms/SlideAddMyMatchCard';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  text?: string;
}

export default function MyMatchCard(props: PropTypes) {
  const {width} = useWindowDimensions();
  return (
    <View style={[tailwind('bg-primary rounded border border-gray-800')]}>
      <View style={[tailwind('p-1')]}>
        <MyMatchCardTopSection />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[tailwind('mx-4 my-2')]}
          colors={['#162339', '#29344B', '#162339']}>
          <View style={[tailwind(''), {height: 2}]}></View>
        </LinearGradient>
        <TeamsMyMatchCard />
      </View>
      <SlideAddMyMatchCard />
    </View>
  );
}
