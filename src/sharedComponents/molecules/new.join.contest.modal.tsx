// new join contest modal UI,

import React from 'react';
import tailwind from '../../../tailwind';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonComponent from '../atoms/ButtonComponent';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';

interface PropTypes {
  showModal: boolean;
  availableCash: number;
  entryAmount: number;
  usableBonus: number;
  closeModal(): void;
  joinContestWithTeam(any: any): any;
}

export default function NewJoinContestModal(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  if (!props.showModal) {
    return null;
  }

  return (
    <Modal
      isVisible={props.showModal}
      animationInTiming={150}
      animationOutTiming={150}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={0}
      scrollHorizontal={true}>
      <View style={[ss.root, dT ? clr.bgd1 : clr.bgw]}>
        <View style={[ss.frcb]}>
          <Text style={[ss.confirmtxt, dT ? clr.tw : clr.td1]}>
            Confirmation
          </Text>
          <TouchableOpacity onPress={props.closeModal}>
            <Icon name="close" size={25} color={dT ? 'white' : '#0D1320'} />
          </TouchableOpacity>
        </View>
        {/* Available cash */}
        <View style={[ss.fr]}>
          <Text style={[ss.txt, dT ? clr.tw : clr.td1]}>
            Amount Added (Unutilised) + winnings = {'\u20B9 '}
            {props.availableCash}
          </Text>
        </View>

        <View style={[ss.container, {paddingBottom: 0}]}>
          <Text style={[ss.boldtxt, dT ? clr.tw : clr.td1]}>Entry</Text>
          <Text style={[ss.boldtxt, dT ? clr.tw : clr.td1]}>
            {'\u20B9'} {props.entryAmount || 0}
          </Text>
        </View>

        <View style={[ss.container]}>
          <Text style={[ss.boldtxt, dT ? clr.tw : clr.td1]}>
            Usable Cash Bonus
          </Text>
          <Text style={[ss.boldtxt, dT ? clr.tw : clr.td1]}>
            - {'\u20B9'} 0
          </Text>
        </View>

        <View style={[ss.container]}>
          <Text style={[ss.boldtxt, dT ? clr.tgl : clr.tr]}>To Pay</Text>
          <Text style={[ss.boldtxt, dT ? clr.tgl : clr.tr]}>
            {'\u20B9'} {props.entryAmount | 0}
          </Text>
        </View>
        <TouchableOpacity
          onPress={props.joinContestWithTeam}
          style={[tailwind('mt-3')]}>
          <ButtonComponent text={'Join contest'} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const ss = StyleSheet.create({
  root: {
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
    fontFamily: 'Gadugi-Normal',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  txt: {
    fontFamily: 'Gadugi-Normal',
    fontSize: 10,
  },
  boldtxt: {
    fontFamily: 'Gadugi-Bold',
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
