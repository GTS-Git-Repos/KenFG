import React from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';
import assets from '../../constants/assets_manifest';
import {TopBar} from '../../sharedComponents';
import UserName from './atoms/UserName';
import LevelSince from './atoms/LevelSince';
import LevelCard from './molecules/LevelCard';

const log = console.log;

export default function UserGoalsScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Goals'} />
      <ScrollView>
        <View style={[tailwind('bg-secondary'), {height: 4}]}></View>
        <View style={[{bottom: 10}]}>
          <UserName name={'Naveen 1347'} level={'323'} />
          <LevelSince />
          <View style={[tailwind('')]}>
            <ImageBackground
              source={assets.ground_two}
              style={[tailwind('w-full')]}
              resizeMode="stretch">
              <View
                style={[
                  tailwind(
                    'flex-row items-center justify-between pt-7 flex-wrap ',
                  ),
                ]}>
                <LevelCard />
                <LevelCard />
                <LevelCard />
                <LevelCard />
                <LevelCard />
                <LevelCard />
              </View>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
