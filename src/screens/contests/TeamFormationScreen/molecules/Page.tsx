import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, ScrollView, Text} from 'react-native';
import TabCondtion from '../atoms/TabCondtions';
import SortTabs from '../atoms/SortTabs';
import Player from './Players';
import {currentPlayerStatus} from '../../../../store/store_utils';
import {BottomLine} from '../../../../sharedComponents';

interface PropTypes {
  filterSheet: any;
  id: string;
  title: string;
  data: [];
  checkPlayerSelection(player_key: string, player_role: string): void;
  rolesCountSelector: any;
  index: number;
  activeIndex: number;
  team_a: string;
}

export default function Page(props: PropTypes) {
  if (props.index !== props.activeIndex) {
    return null;
  }

  if (!props.data) {
    return null;
  }

  return (
    <View>
      <View style={[tailwind('bg-dark')]}>
        <TabCondtion text={props.title} filterSheet={props.filterSheet} />
        <BottomLine />
        <SortTabs />
      </View>
      <ScrollView style={[tailwind('')]}>
        {props.data.map((item: any) => {
          return (
            <Player
              key={item.key}
              player_key={item.key}
              teamname={item.team_key}
              isTeam_a={props.team_a === item.team_key}
              role={item.seasonal_role}
              image={''}
              name={item.name}
              info={`Sel by ${item.selected_by}`}
              anounced={true}
              points={item.points}
              credits={item.credits}
              status={currentPlayerStatus(
                item.key,
                item.seasonal_role,
                item.team_key,
              )}
              checkPlayerSelection={props.checkPlayerSelection}
            />
          );
        })}

        <View style={[tailwind('h-40')]}></View>
      </ScrollView>
    </View>
  );
}
