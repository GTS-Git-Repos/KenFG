import React, {useEffect, useState} from 'react';
import tailwind from '../../../../../tailwind';
import {View, FlatList, ActivityIndicator} from 'react-native';
import TabCondtion from '../atoms/TabCondtions';
import SortTabs from '../atoms/SortTabs';
import Player from './Players';
import {currentPlayerStatus} from '../../../../store/store_utils';

interface PropTypes {
  sortByLowCredits: boolean;
  filterSheet: any;
  filters: any;
  id: string;
  title: string;
  data: [];
  blockListPlayers: Array<string>;
  rolesCountSelector: any;
  index: number;
  activeIndex: number;
  team_a_key: string;
  team_b_key: string;
  setSortByLowCredits(bool: boolean): any;
  checkPlayerSelection(player_key: string, player_role: string): void;
  onPressPlayerProfile(player_key: string,player_role:string): any;

}

export default function Page(props: PropTypes) {
  const [playersMeta, setPlayersMeta]: any = useState(props.data);
  const position = props.index - props.activeIndex;

  useEffect(() => {
    if (props.filters === props.team_a_key) {
      const team_a_players = props.data.filter(
        (item: any) => item.team_key === props.team_a_key,
      );
      setPlayersMeta(team_a_players);
    } else if (props.filters === props.team_b_key) {
      const team_b_players = props.data.filter(
        (item: any) => item.team_key === props.team_b_key,
      );
      setPlayersMeta(team_b_players);
    } else {
      setPlayersMeta(props.data);
    }
  }, [props.filters]);

  useEffect(() => {
    if (props.sortByLowCredits) {
      const res = playersMeta.sort((a: any, b: any) => {
        return b.points - a.points;
      });
      setPlayersMeta(res);
    } else {
      const res = playersMeta.sort((a: any, b: any) => {
        return a.points - b.points;
      });
      setPlayersMeta(res);
    }
  }, [props.sortByLowCredits]);

  if (position < -1 || position > 1) {
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

  return (
    <View>
      <View style={[tailwind('bg-dark')]}>
        <TabCondtion
          text={props.title}
          filterSheet={props.filterSheet}
          filters={props.filters}
        />

        <SortTabs
          sortByLowCredits={props.sortByLowCredits}
          setSortByLowCredits={props.setSortByLowCredits}
        />
      </View>
      <FlatList
        data={playersMeta}
        renderItem={({item}) => {
          return (
            <Player
              player_key={item.key}
              teamname={item.team_key}
              isTeam_a={props.team_a_key === item.team_key}
              role={item.seasonal_role}
              image={''}
              name={item.name}
              info={`Sel by ${item.selected_by}`}
              anounced={true}
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
