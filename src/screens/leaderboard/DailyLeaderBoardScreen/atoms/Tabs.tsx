import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
import clr from '../../../../constants/colors';

interface PropTypes {
  selectedTab: number;
  onTabPressed: any;
  dT: boolean;
}

export default function Tabs(props: PropTypes) {
  const dT = props.dT;
  return (
    <View style={[ss.root, dT ? clr.bgd2 : clr.bgw]}>
      {['Upcomming', 'Live', 'Completed'].map((item: string, index: number) => {
        return (
          <TouchableOpacity
            onPress={() => props.onTabPressed(index)}
            key={item}
            style={[
              ss.btn,
              props.selectedTab === index && ss.activeTab,
              props.selectedTab === index && !props.dT ? ss.lActiveTab : {},
            ]}>
            {dT ? (
              <Text
                style={[
                  ss.txt,
                  props.selectedTab === index ? clr.tgl : clr.tw,
                ]}>
                {item}
              </Text>
            ) : (
              <Text
                style={[
                  ss.txt,
                  props.selectedTab === index ? clr.tr : clr.td1,
                ]}>
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
  lActiveTab: {
    borderColor: '#9C181E',
    borderStyle: 'solid',
    borderRadius: 1,
    borderBottomWidth: 2,
  },
  btn: {
    flex: 4,
    paddingVertical: 12,
    borderColor: 'rgba(31, 41, 55,0.2)',
    borderStyle: 'solid',
    borderRadius: 1,
    borderBottomWidth: 2,
  },
  txt: {
    fontFamily: 'gadugi-bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 13,
  },
});
