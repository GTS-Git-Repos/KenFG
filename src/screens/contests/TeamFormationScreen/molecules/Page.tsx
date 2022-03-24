import React, {useEffect, useState} from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import TabCondtion from '../atoms/TabCondtions';
import SortTabs from '../atoms/SortTabs';
import Player from './Players';
import {currentPlayerStatus} from '../../../../store/store_utils';
import clr from '../../../../constants/colors';

interface PropTypes {
  filterSheet: any;
  id: string;
  title: string;
  data: any;
  blockListPlayers: Array<string>;
  rolesCountSelector: any;
  index: number;
  activeIndex: number;
  team_a_key: string;
  team_b_key: string;
  sortStatus: any;
  filterTeam: any;
  checkPlayerSelection(player_key: string, player_role: string): void;
  onPressPlayerProfile(player_key: string, player_role: string): any;
  onSortAction(sortBy: string): any;
  dT: boolean;
}

export default function Page(props: PropTypes) {
  const position = props.index - props.activeIndex;

  if (props.index != props.activeIndex) {
    return (
      <ActivityIndicator
        style={[tailwind('mt-10')]}
        size={'large'}
        color="#d1b45a"
      />
    );
  }

  if (!props.data) {
    return null;
  }

  if (props.data === []) {
    return <Text style={[tailwind('text-red-500')]}>No Players Found</Text>;
  }

  return (
    <View>
      <View style={[props.dT ? clr.bgd1 : clr.bgGray]}>
        <TabCondtion
          dT={props.dT}
          text={props.title}
          filterSheet={props.filterSheet}
          filterTeam={props.filterTeam}
        />

        <SortTabs
          dT={props.dT}
          sortStatus={props.sortStatus}
          onSortAction={props.onSortAction}
        />
      </View>
      <FlatList
        data={props.data}
        renderItem={({item}) => {
          return (
            <Player
              dT={props.dT}
              player_key={item.key}
              teamname={item.team_key}
              isTeam_a={props.team_a_key === item.team_key}
              role={item.seasonal_role}
              image={''}
              name={item.name}
              info={`sel by ${item.sel} %`}
              anounced={item.in_xi === 1}
              points={item.points}
              credits={item.credits}
              status={currentPlayerStatus(item.key, props.blockListPlayers)}
              checkPlayerSelection={props.checkPlayerSelection}
              onPressPlayerProfile={props.onPressPlayerProfile}
            />
          );
        }}
        keyExtractor={item => item.key}
        initialNumToRender={5}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 130}}
      />
    </View>
  );
}

const ss = StyleSheet.create({
  root: {},
});
