import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  active: number;
  onTabPressed(index: number): any;
}

export default function Tabs(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row bg-dark-3 items-center')]}>
      {['Upcomming', 'Live', 'Completed'].map((item: string, index: number) => {
        return (
          <TouchableOpacity
            onPress={() => props.onTabPressed(index)}
            key={item}
            style={[
              tailwind(`py-4`),
              props.active === index ? styles.activeTab : styles.tabContainer,
              {flex: 4},
            ]}>
            <Text
              style={[
                tailwind(`font-bold text-center uppercase font-13`),
                {
                  color: props.active === index ? '#FFFF' : '#8797B1',
                },
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#172338',
    borderStyle: 'solid',
    borderRadius: 1,
    borderBottomWidth: 2,
  },
  activeTab: {
    borderColor: '#BCA04D',
    borderStyle: 'solid',
    borderRadius: 1,
    borderBottomWidth: 2,
  },
});
