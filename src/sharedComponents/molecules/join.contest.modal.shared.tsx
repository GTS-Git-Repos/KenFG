// it will be removed later

import React, {useEffect} from 'react';
import tailwind from '../../../tailwind';
import {View, TouchableOpacity, StyleSheet, Alert, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonComponent from '../atoms/ButtonComponent';

interface PropTypes {
  availableCash: number;
  entryAmount: number;
  usableBonus: number;
  setShowJoinModal(any: any): any;
  joinContestWithTeam(any: any): any;
}

export default function JoinContestModal(props: PropTypes) {
  useEffect(() => {
    Alert.alert('DEPRECATED', 'deprecated join contest modal hit');
  }, []);
  return (
    <View style={[ss.root]}>
      <View style={[ss.frcb]}>
        <Text style={[ss.confirmtxt]}>Confirmation</Text>
        <TouchableOpacity
          onPress={() => {
            props.setShowJoinModal(false);
          }}>
          <Icon name="close" size={25} color="white" />
        </TouchableOpacity>
      </View>
      {/* Available cash */}
      <View style={[ss.fr]}>
        <Text style={[ss.txt]}>
          Amount Added (Unutilised) + winnings = {'\u20B9 '}
          {props.availableCash}
        </Text>
      </View>

      <View style={[ss.container, {paddingBottom: 0}]}>
        <Text style={[ss.boldtxt]}>Entry</Text>
        <Text style={[ss.boldtxt]}>
          {'\u20B9'} {props.entryAmount || 0}
        </Text>
      </View>

      <View style={[ss.container]}>
        <Text style={[ss.boldtxt]}>Usable Cash Bonus</Text>
        <Text style={[ss.boldtxt]}>- {'\u20B9'} 0</Text>
      </View>

      <View style={[ss.container]}>
        <Text style={[ss.boldtxt, tailwind('text-secondary')]}>To Pay</Text>
        <Text style={[ss.boldtxt, tailwind('text-secondary')]}>
          {'\u20B9'} {props.entryAmount | 0}
        </Text>
      </View>
      <TouchableOpacity
        onPress={props.joinContestWithTeam}
        style={[tailwind('mt-3')]}>
        <ButtonComponent text={'Join contest'} />
      </TouchableOpacity>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    backgroundColor: '#172338',
    borderRadius: 4,
    padding: 16,
  },
  frcb: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fr: {
    flexDirection: 'row',
  },
  confirmtxt: {
    color: '#f5feff',
    fontFamily: 'gadugi-normal',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  txt: {
    color: 'rgba(209, 213, 219, 1)',
    fontFamily: 'gadugi-normal',
    fontSize: 10,
  },
  boldtxt: {
    color: '#f5feff',
    fontFamily: 'gadugi-bold',
    fontSize: 15,
  },
  container: {
    alignItems: 'center',
    // borderBottomColor: 'rgba(31, 41, 55, 1)',
    // borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
    paddingTop: 16,
  },
});
