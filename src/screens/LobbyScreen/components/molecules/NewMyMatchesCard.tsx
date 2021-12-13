import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TopSection from '../../components/atoms/MyMatches/TopSection';
import Teams from '../../components/atoms/MyMatches/Teams';
import SlideAddMyMatchCard from '../atoms/SlideAddMyMatchCard';
import {useNavigation} from '@react-navigation/core';
interface PropTypes {
  text?: string;
}

export default function NewMyMatchesCard(props: PropTypes) {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('LiveMatchScreen');
      }}
      style={[tailwind('rounded bg-dark-3')]}>
      <TopSection />
      <Teams />
      <SlideAddMyMatchCard />
    </TouchableOpacity>
  );
}
