import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';
import {RadioButton, TeamsCard, TopBar} from '../../sharedComponents';
import BottomSelectTeam from './molecules/bottomjoin.teamselect';
// import assets from 'assets';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function TeamSelectionScreen(props: any) {
  const navigation = useNavigation();

  function joinContestWithTeam() {
    console.log(1);
  }

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Select Team'} />
      <ScrollView contentContainerStyle={[tailwind('m-3')]}>
        {props.teams.map((item: any) => {
          return (
            <View
              key={item.team_key}
              style={[tailwind('flex-row items-center')]}>
              <View style={[tailwind(''), {flex: 9}]}>
                <TeamsCard
                  team_a={item.team_a}
                  team_b={item.team_b}
                  team_key={item.team_key}
                  canModify={false}
                  current={false}
                  keepers={item.keepers}
                  batsman={item.batsman}
                  all_rounder={item.all_rounder}
                  bowler={item.bowler}
                  cap={item.cap}
                  vc={item.vc}
                  navigateToPreview={() => {}}
                  mutateTeam={() => {}}
                />
              </View>
              <View style={[tailwind('flex-row justify-center'), {flex: 1}]}>
                <RadioButton selected={false} />
              </View>
            </View>
          );
        })}

        <View style={[tailwind('h-20')]}></View>
      </ScrollView>
      <BottomSelectTeam joinContestWithTeam={joinContestWithTeam} />
    </View>
  );
}
