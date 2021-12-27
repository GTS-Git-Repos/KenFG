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
          <TeamStatus teamName="ENG" isBatting={false} isExpanded={false} />
          <TeamStatus teamName="AUS" isBatting={true} isExpanded={true} />
          <TeamStatusHeader />
          <PlayerStatus name="V.Kohli" />
          <PlayerStatus name="Ms.Dhoni" />
          <Extras />
          <Total />
          <YetToBat />
        </View>
        <View style={[tailwind('h-10')]}></View>
      </ScrollView>
    </View>
  );
}

const PlayerStatus = (props: any) => {
  return (
    <View
      style={[
        tailwind('flex-row pt-2 bg-dark-3 px-2 border-b border-gray-800'),
      ]}>
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
                    `text-center ${
                      index === 0
                        ? 'font-14 text-white font-bold'
                        : 'font-regular text-dark-1 font-12  '
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
const Total = (props: any) => {
  return (
    <View
      style={[
        tailwind(
          'flex-row  items-center pt-2 px-2 border-b border-gray-800 bg-dark-3',
        ),
      ]}>
      <View style={[tailwind(''), {flex: 6}]}>
        <View style={[tailwind('px-2')]}>
          <Text style={[tailwind('font-bold text-light font-14')]}>Total</Text>
          <Text style={[tailwind('font-regular py-2 text-dark-1 font-12')]}>
            (1 Wickets 12.3 overs)
          </Text>
        </View>
      </View>
      <View style={[tailwind(''), {flex: 6}]}>
        <View style={[tailwind('flex-col  px-4 justify-center'), {flex: 6}]}>
          <Text style={[tailwind(`font-bold font-14 text-white`)]}>43</Text>
        </View>
      </View>
    </View>
  );
};
const Extras = (props: any) => {
  return (
    <View
      style={[
        tailwind(
          'flex-row items-center pt-2 px-2 bg-dark-3 border-b border-gray-800',
        ),
      ]}>
      <View style={[tailwind(''), {flex: 6}]}>
        <View style={[tailwind('px-2')]}>
          <Text style={[tailwind('font-bold text-light font-14')]}>Extras</Text>
          <Text style={[tailwind('font-regular py-2 text-dark-1 font-12')]}>
            (nb 1, wd 1, b0, lb, pen 0)
          </Text>
        </View>
      </View>
      <View style={[tailwind(''), {flex: 6}]}>
        <View style={[tailwind('flex-col px-4 justify-center')]}>
          <Text style={[tailwind(`font-bold font-14 text-white`)]}>{2}</Text>
        </View>
      </View>
    </View>
  );
};
const YetToBat = () => {
  return (
    <View
      style={[
        tailwind(
          'flex-row  items-center pt-2 px-2 border-b border-gray-800 bg-dark-3',
        ),
      ]}>
      <View style={[tailwind(''), {flex: 6}]}>
        <View style={[tailwind('px-2')]}>
          <Text style={[tailwind('font-bold text-light font-14')]}>
            Yet to bat
          </Text>
          <Text style={[tailwind('font-regular py-2 text-dark-1 font-12')]}>
            Mitcher,Starc
          </Text>
        </View>
      </View>
      <View style={[tailwind(''), {flex: 6}]}></View>
    </View>
  );
};
