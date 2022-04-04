//

import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import clr from '../../../../constants/colors';

interface PropTypes {
  active: number;
  onTabPressed(index: number): any;
  dT: boolean;
}

export default function TabsMyMatch(props: PropTypes) {
  const dT = props.dT;
  return (
    <View style={[ss.root, dT ? clr.bgd2 : clr.bgw]}>
      {['Upcomming', 'Live', 'Completed'].map((item: string, index: number) => {
        return (
          <TouchableOpacity
            onPress={() => props.onTabPressed(index)}
            key={item}
            style={[ss.btn, props.active === index && ss.activeTab]}>
            {dT ? (
              <Text style={[ss.txt, props.active === index ? clr.tgl : clr.tw]}>
                {item}
              </Text>
            ) : (
              <Text style={[ss.txt, props.active === index ? clr.tr : clr.td1]}>
                {item}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // tabContainer: {
  //   borderColor: '#172338',
  //   borderStyle: 'solid',
  //   borderRadius: 1,
  //   borderBottomWidth: 2,
  // },
  activeTab: {
    borderColor: '#BCA04D',
    borderStyle: 'solid',
    borderRadius: 1,
    borderBottomWidth: 2,
  },
  btn: {
    flex: 4,
    paddingVertical: 12,
    borderColor: '#172338',
    borderStyle: 'solid',
    borderRadius: 1,
    // borderBottomWidth: 2,
  },
  txt: {
    fontFamily: 'Gadugi-Bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 13,
  },
});
