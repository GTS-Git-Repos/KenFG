import React from 'react';
import tailwind from '../../../../tailwind';
import {View, ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import TabCondtion from '../atoms/TabCondtions';
import SortTabs from '../atoms/SortTabs';
import Player from '../molecules/Players';

interface PropTypes {
  id: string;
  title: string;
  data: [];
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
              id={item.key}
              teamname={item.nationality_short_code}
              image={''}
              name={item.name}
              info={`Sel by ${item.selected_by}`}
              anounced={true}
              points={item.points}
              credits={item.credits}
              isSelected={false}
              canBeSelected={true}
            />
          );
        })}

        <Player
          player_id={'1'}
          teamname={'IND'}
          image={''}
          name={'R Sharma'}
          info={'Sel by 97.45%'}
          anounced={true}
          points={3}
          credits={10.0}
          isSelected={false}
        />
        <Player
          player_id={'1'}
          teamname={'IND'}
          image={''}
          name={'R Sharma'}
          info={'Sel by 97.45%'}
          anounced={true}
          points={3}
          credits={10.0}
          isSelected={false}
        />
        <View style={[tailwind('h-40')]}></View>
      </ScrollView>
    </View>
  );
}
