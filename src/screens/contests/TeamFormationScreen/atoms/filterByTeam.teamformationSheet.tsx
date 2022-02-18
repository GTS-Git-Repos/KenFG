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
  filterTeam: string;
  onTeamFilterAction(input: any): any;
}

export default function CreateTeamFilterSheetTitle(props: PropTypes) {
  // console.log(tailwind('font-bold text-white font-15'));

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

      {/* Team a */}
      <TouchableOpacity
        onPress={() => props.onTeamFilterAction(props.team_a_key)}
        style={[styles.optionWrapper]}>
        <View>
          <Text style={tailwind('uppercase text-white font-13 font-bold')}>
            {props.team_a_key}
          </Text>
          <Text style={styles.optionText}>{props.team_a_name}</Text>
        </View>

        <RadioButton selected={props.filterTeam === props.team_a_key} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.onTeamFilterAction(props.team_b_key)}
        style={[styles.optionWrapper]}>
        <View>
          <Text style={tailwind('uppercase text-white font-13 font-bold')}>
            {props.team_b_key}
          </Text>
          <Text style={styles.optionText}>{props.team_b_name}</Text>
        </View>
        <RadioButton selected={props.filterTeam === props.team_b_key} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.onTeamFilterAction(null)}
        style={[styles.optionWrapper, styles.team_both_border]}>
        <Text style={tailwind('text-white font-13 py-1 font-bold')}>Both</Text>
        <RadioButton selected={props.filterTeam === null} />
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
  optionWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 5,
    padding: 8,
    backgroundColor: '#172338',
  },
  optionText: {
    color: '#8797B1',
    fontFamily: 'gadugi-normal',
    fontSize: 10,
    paddingTop: 4,
  },
});
