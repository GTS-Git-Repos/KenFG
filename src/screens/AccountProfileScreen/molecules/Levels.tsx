import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function LevelCard(props: PropTypes) {
  return (
    <View style={[tailwind('rounded bg-primary p-3 '), styles.shadow]}>
      <View style={[tailwind('flex-row ')]}>
        <View style={[tailwind(''), {flex: 1}]}></View>

        <View style={[tailwind('flex-col'), {flex: 9}]}>
          <Text style={[tailwind('font-bold text-secondary')]}>Level 4</Text>
          <View style={[tailwind('py-2')]}>
            <Text style={[tailwind('text-light font-13')]}>
              To reach Level 5, play:
            </Text>

            <View
              style={[tailwind('flex-row py-1 justify-between items-center')]}>
              <View style={[tailwind('flex-row items-center')]}>
                {/* <Icon name="compass-outline" size={20} color="white" /> */}
                <View>
                  <Text
                    style={[tailwind('font-bold text-secondary px-1 font-17')]}>
                    {'\u20B9'} 5
                  </Text>
                  <Text style={[tailwind('font-regular text-light font-15')]}>
                    Entry Amount
                  </Text>
                </View>
              </View>

              <Text style={[tailwind('font-bold text-white font-15')]}>&</Text>

              <View
                style={[
                  tailwind('flex-row py-1 justify-between items-center'),
                ]}>
                <View style={[tailwind('flex-row items-center')]}>
                  {/* <Icon name="compass-outline" size={20} color="white" /> */}
                  <View>
                    <Text
                      style={[
                        tailwind('font-bold text-secondary px-1 font-17'),
                      ]}>
                      {'\u20B9'} 5
                    </Text>
                    <Text style={[tailwind('font-regular text-light font-15')]}>
                      Cash Contest
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Next Level */}
          <Text style={[tailwind('font-bold text-secondary font-15')]}>
            Level 5
          </Text>

          <Text
            style={[
              tailwind(
                'font-bold text-primary bg-secondary p-2 rounded my-2 font-15',
              ),
            ]}>
            Level 10: {'\u20B9'}10 Cash Bonus Available
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 4,
  },
});
