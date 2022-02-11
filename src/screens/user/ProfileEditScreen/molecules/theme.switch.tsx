import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  darkModeState: any;
  onColorThemePress(): void;
}

export default function ThemeSwitch(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center justify-between py-3')]}>
      <Text style={[tailwind('font-regular text-dark-1 font-12')]}>
        Color Theme
      </Text>
      <View style={[tailwind('flex-row items-center')]}>
        <TouchableOpacity
          onPress={props.onColorThemePress}
          style={[tailwind('flex-row items-center')]}>
          <View
            style={[
              tailwind(
                `rounded-l-xl py-1 ${
                  props.darkModeState ? 'bg-secondary' : 'bg-dark-4'
                }`,
              ),
              {width: 80},
            ]}>
            <Text
              style={[
                tailwind('font-bold text-center text-white font-13'),
                props.darkModeState && styles.selectedText,
              ]}>
              DARK
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.onColorThemePress}
          style={[
            tailwind(
              `rounded-r-xl  py-1 ${
                !props.darkModeState ? 'bg-secondary' : 'bg-dark-4'
              }`,
            ),
            {width: 80},
          ]}>
          <Text
            style={[
              tailwind('font-bold text-center text-white uppercase font-13'),
              !props.darkModeState && styles.selectedText,
            ]}>
            Light
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  selectedText: {
    color: '#172338',
    textTransform: 'uppercase',
  },
});
