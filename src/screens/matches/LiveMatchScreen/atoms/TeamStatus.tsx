import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  teamName: string;
  isBatting: boolean;
  isExpanded: boolean;
}

export default function TeamStatus(props: PropTypes) {
  return (
    <View
      style={[tailwind('flex-row py-3 bg-dark-3 border-b border-gray-800 items-center'), styles.root]}>
      <View style={[tailwind('flex-row items-center'), {flex: 6}]}>
        <Text style={[tailwind('font-bold text-light pl-4 pr-1 font-14')]}>
          {props.teamName}
        </Text>
        {props.isBatting && (
          <Text
            style={[
              tailwind(
                'font-regular rounded-full bg-dark-4 px-2 py-1 text-dark-1 mx-3 font-10',
              ),
            ]}>
            Batting
          </Text>
        )}
      </View>

      <View
        style={[tailwind('flex-row justify-between items-center'), {flex: 6}]}>
        <Text style={[tailwind('font-regular text-light font-12')]}>
          (12.5 Overs)
        </Text>
        <Text style={[tailwind('font-bold px-3 text-light font-14')]}>
          43/1
        </Text>
        {props.isExpanded ? (
          <Icon
            name="chevron-down"
            size={20}
            style={[tailwind('mr-2')]}
            color="#8797B1"
          />
        ) : (
          <Icon
            name="chevron-up"
            size={20}
            style={[tailwind('mr-2')]}
            color="#B2933D"
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#362F20',
  },
});
