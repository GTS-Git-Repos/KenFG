import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RadioButton} from '../../../../sharedComponents';

interface PropTypes {
  filterSheet: any;
  team_a_key: string;
  team_a_name: string;
  team_b_key: string;
  team_b_name: string;
  filters: string;
  setFilter(team_key: string): any;
}

export default function CreateTeamFilterSheetTitle(props: PropTypes) {
  const changeFilter = (team_key: any) => {
    props.setFilter(team_key);
    props.filterSheet?.current?.close();
  };

  return (
    <View style={[tailwind('bg-dark rounded-t-lg')]}>
      <View style={[styles.head_wrapper]}>
        <TouchableOpacity onPress={() => props.filterSheet?.current?.close()}>
          <Icon name="close" size={18} color="white" />
        </TouchableOpacity>

        <Text style={[tailwind('font-bold text-white font-13')]}>
          Filter by Teams
        </Text>
        <Text style={[tailwind('px-3')]}></Text>
      </View>
      <TouchableOpacity
        onPress={() => changeFilter(props.team_a_key)}
        style={[
          tailwind('p-3 mx-4 mb-4 flex-row items-center justify-between'),
          styles.team_a_border,
        ]}>
        <Text style={[tailwind('font-bold text-white font-15')]}>
          {props.team_a_name}
        </Text>
        <RadioButton selected={props.filters === props.team_a_key} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeFilter(props.team_b_key)}
        style={[
          tailwind('p-3 mx-4 mb-4 flex-row items-center justify-between'),
          styles.team_b_border,
        ]}>
        <Text style={[tailwind('font-bold text-white font-15')]}>
          {props.team_b_name}
        </Text>
        <RadioButton selected={props.filters === props.team_b_key} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeFilter(null)}
        style={[
          tailwind('p-3 mx-4 mb-4 flex-row items-center justify-between'),
          styles.team_both_border,
        ]}>
        <Text style={[tailwind('font-bold text-white font-15')]}>Both</Text>
        <RadioButton selected={props.filters === null} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  head_wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 16,
  },
  team_a_border: {
    borderColor: '#244785',
    borderWidth: 1,
    borderRadius: 5,
  },
  team_b_border: {
    borderColor: '#70211E',
    borderWidth: 1,
    borderRadius: 5,
  },
  team_both_border: {
    borderColor: '#BCA04D',
    borderWidth: 1,
    borderRadius: 5,
  },
});
