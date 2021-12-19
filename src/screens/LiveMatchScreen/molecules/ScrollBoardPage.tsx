import React from 'react';
import tailwind from '../../../../tailwind';
import {View, ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import TeamStatus from '../atoms/TeamStatus';
import TeamStatusHeader from '../atoms/TeamStatusHeader';

interface PropTypes {
  index: number;
  activeIndex: number;
}

export default function ScrollBoardPage(props: PropTypes) {
  if (props.index !== props.activeIndex) {
    return null;
  }
  return (
    <View>
      <ScrollView>
        <View>
          <View style={[tailwind('h-3')]}></View>
          <TeamStatus />
          <TeamStatusHeader />
          <PlayerStatus name="V.Kohli" />
          <PlayerStatus name="Ms.Dhoni" />
          <View style={[tailwind('flex-row pt-2 px-2')]}>
            <View style={[tailwind(''), {flex: 6}]}>
              <View style={[tailwind('px-2')]}>
                <Text style={[tailwind('font-bold text-light font-14')]}>
                  Extras
                </Text>
                <Text
                  style={[tailwind('font-regular py-2 text-dark-1 font-12')]}>
                  (nb 1, wd 1, b0, lb, pen 0)
                </Text>
              </View>
            </View>
            <View style={[tailwind(''), {flex: 6}]}>
              <View
                style={[tailwind('flex-col px-2 justify-center'), {flex: 6}]}>
                <Text style={[tailwind(`font-regular font-14 text-white`)]}>
                  {2}
                </Text>
              </View>
            </View>
          </View>

          <View style={[tailwind('flex-row pt-2 px-2')]}>
            <View style={[tailwind(''), {flex: 6}]}>
              <View style={[tailwind('px-2')]}>
                <Text style={[tailwind('font-bold text-light font-14')]}>
                  Total
                </Text>
                <Text
                  style={[tailwind('font-regular py-2 text-dark-1 font-12')]}>
                  (1 Wickets 12.3 overs)
                </Text>
              </View>
            </View>
            <View style={[tailwind(''), {flex: 6}]}>
              <View
                style={[tailwind('flex-col px-2 justify-center'), {flex: 6}]}>
                <Text style={[tailwind(`font-regular font-14 text-white`)]}>
                  43
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[tailwind('h-10')]}></View>
      </ScrollView>
    </View>
  );
}

const PlayerStatus = (props: any) => {
  return (
    <View style={[tailwind('flex-row pt-2 px-2')]}>
      <View style={[tailwind(''), {flex: 6}]}>
        <View style={[tailwind('px-2')]}>
          <Text style={[tailwind('font-bold text-light font-14')]}>
            {props.name}
          </Text>
          <Text
            style={[
              tailwind('font-regular py-2 text-secondary font-12'),
              {color: '#816D2E'},
            ]}>
            Batting
          </Text>
        </View>
      </View>
      <View style={[tailwind('flex-row'), {flex: 6}]}>
        {['8', '6', '1', '0', '12.42'].map((item, index) => {
          return (
            <View
              key={item}
              style={[
                tailwind('flex-col items-center justify-center'),
                {flex: 10 / 5},
              ]}>
              <Text
                style={[
                  tailwind(
                    `font-regular text-center text-dark-1 font-12 ${
                      index === 0 ? 'font-14 text-white' : ''
                    }`,
                  ),
                ]}>
                {item}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
