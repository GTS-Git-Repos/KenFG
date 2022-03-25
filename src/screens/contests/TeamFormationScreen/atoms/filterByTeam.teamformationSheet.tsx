import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RadioButton} from '../../../../sharedComponents';
import clr from '../../../../constants/colors';

interface PropTypes {
  filterSheet: any;
  team_a_key: string;
  team_a_name: string;
  team_b_key: string;
  team_b_name: string;
  filterTeam: string;
  dT: boolean;
  onTeamFilterAction(input: any): any;
}

export default function CreateTeamFilterSheetTitle(props: PropTypes) {
  const dT = props.dT;
  return (
    <View style={[styles.root, dT ? clr.bgd1 : clr.bgw]}>
      <View style={[styles.head_wrapper]}>
        <TouchableOpacity onPress={() => props.filterSheet?.current?.close()}>
          <Icon name="close" size={18} color={dT ? 'white' : 'black'} />
        </TouchableOpacity>

        <Text style={[styles.title, dT ? clr.tw : clr.td1]}>
          Filter by Teams
        </Text>
        <Text style={[tailwind('px-3')]}></Text>
      </View>

      {/* Team a */}
      <TouchableOpacity
        onPress={() => props.onTeamFilterAction(props.team_a_key)}
        style={[styles.optionWrapper, dT ? clr.bgd1 : clr.bgw]}>
        <View>
          <Text style={[styles.teamKey, dT ? clr.tw : clr.td1]}>
            {props.team_a_key}
          </Text>
          <Text style={[styles.optionText, dT ? clr.td2 : clr.td1]}>
            {props.team_a_name}
          </Text>
        </View>
        {props.filterTeam === props.team_a_key ? (
          <Icon
            name="radio-button-on-outline"
            size={18}
            color={dT ? 'white' : 'red'}
          />
        ) : (
          <Icon
            name="radio-button-off-outline"
            size={18}
            color={dT ? 'white' : 'black'}
          />
        )}
        {/* <RadioButton selected={props.filterTeam === props.team_a_key} /> */}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.onTeamFilterAction(props.team_b_key)}
        style={[styles.optionWrapper, dT ? clr.bgd1 : clr.bgw]}>
        <View>
          <Text style={[styles.teamKey, dT ? clr.tw : clr.td1]}>
            {props.team_b_key}
          </Text>
          <Text style={[styles.optionText, dT ? clr.td2 : clr.td1]}>
            {props.team_b_name}
          </Text>
        </View>
        {props.filterTeam === props.team_b_key ? (
          <Icon
            name="radio-button-on-outline"
            size={18}
            color={dT ? 'white' : 'red'}
          />
        ) : (
          <Icon
            name="radio-button-off-outline"
            size={18}
            color={dT ? 'white' : 'black'}
          />
        )}

        {/* <RadioButton selected={props.filterTeam === props.team_b_key} /> */}
      </TouchableOpacity>
      {/* Both */}
      <TouchableOpacity
        onPress={() => props.onTeamFilterAction(null)}
        style={[styles.optionWrapper, dT ? clr.bgd1 : clr.bgw]}>
        <View>
          <Text style={[styles.teamKey, dT ? clr.tw : clr.td1]}>Both</Text>
          <Text style={[styles.optionText, dT ? clr.td2 : clr.td1]}>
            {props.team_a_name} & {props.team_b_name}
          </Text>
        </View>
        {props.filterTeam === null ? (
          <Icon
            name="radio-button-on-outline"
            size={18}
            color={dT ? 'white' : 'red'}
          />
        ) : (
          <Icon
            name="radio-button-off-outline"
            size={18}
            color={dT ? 'white' : 'black'}
          />
        )}
        {/* <RadioButton selected={props.filterTeam === null} /> */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
  },
  title: {
    fontFamily: 'gadugi-bold',
    fontSize: 13,
  },

  head_wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 16,
  },
  border: {
    borderRadius: 5,
  },
  team_a_border: {
    borderColor: '#244785',
    borderWidth: 1,
  },
  team_b_border: {
    borderColor: '#70211E',
    borderWidth: 1,
    borderRadius: 5,
  },
  team_both_border: {
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
    elevation: 6,
  },
  optionText: {
    color: '#8797B1',
    fontFamily: 'gadugi-normal',
    fontSize: 13,
    paddingTop: 4,
  },
  teamKey: {
    textTransform: 'uppercase',
    fontSize: 13,
    fontFamily: 'gadugi-bold',
  },
});
