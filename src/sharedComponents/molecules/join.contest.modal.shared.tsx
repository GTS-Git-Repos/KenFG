import React from 'react';
import tailwind from '../../../tailwind';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {BottomLine, ButtonComponent} from '../';

interface PropTypes {
  entryAmount: any;
  setShowJoinModal(any: any): any;
  joinContestWithTeam(any: any): any;
}

export default function JoinContestModal(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark-3 p-4 rounded')]}>
      <View style={[tailwind('flex-row items-center justify-between')]}>
        <Text style={[tailwind('font-regular uppercase text-light font-15')]}>
          Confirmation
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.setShowJoinModal(false);
          }}>
          <Icon name="close" size={25} color="white" />
        </TouchableOpacity>
      </View>

      <View style={[tailwind('flex-row items-center pt-4 justify-between')]}>
        <Text style={[tailwind('font-bold text-light font-15')]}>Entry</Text>
        <Text style={[tailwind('font-bold text-light font-15')]}>
          {'\u20B9'} {props.entryAmount}
        </Text>
      </View>

      <View
        style={[tailwind('flex-row items-center pt-4 pb-3 justify-between')]}>
        <Text style={[tailwind('font-bold text-light font-15')]}>
          Usable Cash Bonus
        </Text>
        <Text style={[tailwind('font-bold text-light font-15')]}>
          - {'\u20B9'} 0
        </Text>
      </View>
      <BottomLine />

      <View
        style={[tailwind('flex-row items-center pt-4 pb-3 justify-between')]}>
        <Text style={[tailwind('font-bold text-secondary font-15')]}>
          To Pay
        </Text>
        <Text style={[tailwind('font-bold text-secondary font-15')]}>
          {'\u20B9'} {props.entryAmount}
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
