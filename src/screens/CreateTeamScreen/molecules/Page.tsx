import React from 'react';
import tailwind from '../../../../tailwind';
import {View, ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import TabCondtion from '../atoms/TabCondtions';
import SortTabs from '../atoms/SortTabs';
import Player from '../molecules/Players';
import {isPlayerSelected} from '../../../store/store_utils';

interface PropTypes {
  id: string;
  title: string;
  data: [];
  checkPlayerSelection(player_key: string,player_role:string): void;
}

export default function Page(props: PropTypes) {
  if (!props.data) {
    return null;
  }

  return (
    <View>
      <View style={[tailwind('bg-dark')]}>
        <TabCondtion text={props.title} />
        <SortTabs />
      </View>
      <ScrollView style={[tailwind('')]}>
        {props.data.map((item: any) => {
          return (
            <Player
              key={item.key}
              player_key={item.key}
              teamname={item.team_key}
              role={item.seasonal_role}
              image={''}
              name={item.name}
              info={`Sel by ${item.selected_by}`}
              anounced={true}
              points={item.points}
              credits={item.credits}
              isSelected={isPlayerSelected(item.key)}
              canBeSelected={true}
              checkPlayerSelection={props.checkPlayerSelection}
            />
          );
        })}

        <View style={[tailwind('h-40')]}></View>
      </ScrollView>
    </View>
  );
}
