import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import tailwind from '../../../../tailwind';
import {useNavigation} from '@react-navigation/native';
import {TopBar} from '../../../sharedComponents';

const log = console.log;

export default function AboutUsScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'About Us'} />
      <ScrollView>
        <View style={[tailwind('pl-4 py-3')]}>
          <Text style={[tailwind('font-bold text-white py-1'), {fontSize: 25}]}>
            Our Story
          </Text>
          <Text style={[tailwind('font-regular text-white font-15 my-2')]}>
            We are a bunch of passionate sports’ lovers, gully cricket
            enthusiasts, who always wanted to be like our beloved stars. But
            then you know, “Life Happened” and the dream of our cricketing
            careers were put on the backburner when parents’ dream of becoming
            Engineers took over. But sports, as it flows in our blood streams,
            especially Cricket, we still try to get a glimpse amidst coding,
            travel, finding chew toys for newly born.
          </Text>
          <Text style={[tailwind('font-regular text-white font-15 my-2')]}>
            We are the ones who are expert commentators of the game and always
            cussing when a batsman gets out playing a rash shot, when a bowler
            ends up bowling a full toss instead of Yorker, when a fielder
            misfields, when a team selection is not up to par.{' '}
          </Text>

          <Text style={[tailwind('font-regular text-white font-15 my-2')]}>
            That gave the birth to an idea of connecting with like-minded folks
            around the world, who are expert selectors, to let them form their
            own teams, test the skills of selecting players and battle it outin
            the real world, rather than just playing book cricket with kids. We
            understand it is now difficult to follow the fitness regime with our
            beer bellies, so we bring the game to you. Be the owner, select your
            best XI, apply your skills, and earn while enjoying the game.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
