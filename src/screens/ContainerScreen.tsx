import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import tailwind from '../../tailwind';
import {useNavigation} from '@react-navigation/native';
import {TopBar} from '../sharedComponents';

export default function ContainerScreen() {
  const navigation = useNavigation();

  const SCREENS = [
    'Home',
    'ContestListScreen',
    'LoginScreen',
    'SignupScreen',
    'ContentInfoScreen',
    'CreateTeamScreen',
    'MatchGroundScreen',
    'TeamReviewScreen',
    'AccountProfileScreen',
    'TeamsListScreen',
    'LiveMatchScreen',
    'CompareTeamsScreen',
  ];

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBar text="All Screens" />
      <ScrollView>
        {SCREENS.map(item => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate(item)}
              style={[
                tailwind('m-3 p-3 border-l-4 border-red-500 bg-secondary'),
              ]}
              key={item}>
              <Text style={[tailwind('font-regular font-15')]}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
