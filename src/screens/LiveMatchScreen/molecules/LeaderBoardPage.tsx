import React from 'react';
import tailwind from '../../../../tailwind';
import {View, ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LastUpdatedAt from '../atoms/LastUpdatedAt';
import {HorizontalProfile} from '../../../sharedComponents';

interface PropTypes {
  text?: string;
}

export default function LeaderBoardPage(props: PropTypes) {
  return (
    <View>
      <ScrollView>
        <View style={[tailwind('')]}>
          <View style={[tailwind('h-3')]}></View>
          <LastUpdatedAt updatedAt={'1.3'} />
          <Tabs />
          <HorizontalProfile
            image={assets.player}
            name={'Naveen'}
            teamCode={'T6'}
            points={22}
            rank={88}
            up={false}
          />
          <HorizontalProfile
            image={assets.player}
            name={'The Fantasy'}
            teamCode={'T6'}
            points={22}
            rank={88}
            up={false}
          />
          <HorizontalProfile
            image={assets.player}
            name={'The Long name of the user'}
            teamCode={'T6'}
            points={22}
            rank={88}
            up={false}
          />
          <HorizontalProfile
            image={assets.player}
            name={'Naveen'}
            teamCode={'T6'}
            points={22}
            rank={88}
            up={false}
          />
          <HorizontalProfile
            image={assets.player}
            name={'Naveen'}
            teamCode={'T6'}
            points={22}
            rank={88}
            up={false}
          />
        </View>
        <View style={[tailwind('h-10')]}></View>
      </ScrollView>
    </View>
  );
}

const Tabs = () => {
  return (
    <View style={[tailwind('flex-row px-4 py-3 items-center bg-dark-4')]}>
      <View style={[{flex: 6}]}>
        <Text
          style={[
            tailwind('font-bold text-center text-left  text-dark-1 font-13'),
          ]}>
          All Teams
        </Text>
      </View>
      <View style={[{flex: 2}]}>
        <Text style={[tailwind('font-bold  text-dark-1 font-13')]}>Points</Text>
      </View>
      <View style={[{flex: 2}]}>
        <Text
          style={[
            tailwind('font-bold text-center text-center text-dark-1 font-13'),
          ]}>
          #Ranks
        </Text>
      </View>
    </View>
  );
};
