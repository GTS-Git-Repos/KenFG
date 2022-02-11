import React from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import tailwind from '../../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {useNavigation} from '@react-navigation/native';
import assets from '../../../constants/assets_manifest';
import {TopBar} from '../../../sharedComponents';
import UserName from './atoms/UserName';
import LevelSince from './atoms/LevelSince';
import LevelCard from './molecules/LevelCard';
import SubTitle from './atoms/SubTitle';
import CareerStats from './molecules/CareerStats';
import LockedReward from './molecules/LockedReward';
import PlayerSince from './atoms/PlayerSince';
import KeepPlaying from './atoms/KeepPlaying';
import Svg, {Line} from 'react-native-svg';

const log = console.log;

export default function UserGoalsScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Goals'} />
      <ScrollView fadingEdgeLength={100}>
        <View style={[tailwind('bg-secondary'), {height: 9}]}></View>
        <View style={[{bottom: 9}]}>
          <UserName name={'Naveen 1347'} level={'323'} />
          <LevelSince />

          <View style={[tailwind('')]}>
            <ImageBackground
              source={assets.ground_two}
              style={[tailwind('')]}
              resizeMode="stretch">
              <View
                style={[tailwind(''), {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
                <PlayerSince />
                <View
                  style={[tailwind('flex-row items-center pt-3 flex-wrap ')]}>
                  <LevelCard amount={'10,000'} isSuccess={false} level={21} />
                  {/* <Svg style={[tailwind('absolute box bottom-0')]}>
                      <Line
                        x1="0"
                        y1="0"
                        x2="80"
                        y2="0"
                        stroke="green"
                        strokeWidth="7"
                      />
                    </Svg> */}
                  <LevelCard amount={'70,000'} isSuccess={true} level={22} />
                  <LevelCard amount={'10,000'} isSuccess={false} level={23} />
                  <LevelCard amount={'8,000'} isSuccess={false} level={23} />
                  <KeepPlaying />
                </View>
                <SubTitle text={'Carrer Stats'} />
                <CareerStats />
                <SubTitle text={'More Exciting Rewards Await'} />
                <LockedReward />
                <LockedReward />
                <LockedReward />
              </View>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
