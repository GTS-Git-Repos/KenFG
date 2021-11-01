import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  useWindowDimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
// import assets from 'assets';
// import {TopBar} from 'components';
import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
const log = console.log;

import TopBarContest from '../../sharedComponents/atoms/TopbarContest';
import Tabs from './components/molecules/TabsContest';
import FilterTab from './components/molecules/Filtertab';
import ContestSubTitle from './components/atoms/ContestSubTitle';
import {ContestCard} from '../../sharedComponents';

export default function ContestScreen() {
  const navigation = useNavigation();
  const scrollRef = useRef();
  const {width} = useWindowDimensions();

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBarContest title={'AUS vs SA'} subtitle={'18h 11m left'} />
      <View style={[tailwind('bg-primary')]}>
        <Tabs />
        <FilterTab />
      </View>
      <ScrollView>
        <ContestSubTitle
          title={'Your Favorite Contests'}
          subText={'Ready for One more match'}
        />
        <View style={[tailwind('mx-2')]}>
          <View style={[tailwind('my-2 border border-gray-800 rounded')]}>
            <ContestCard
              name={'Prize Pool'}
              title="10 Crores"
              left_spot={10}
              total_spot={100}
              first_reward={'1 Crore'}
              gaurantee={true}
              practice={false}
              demo_entry_amount={56}
              entry_amount={20}
            />
          </View>

          <ContestSubTitle
            title={'Big Winnings Lower Entry'}
            subText={'Ready for One more match'}
          />
          <View style={[tailwind('my-2 border border-gray-800 rounded')]}>
            <ContestCard
              name={'Prize Pool'}
              title="3 Crores"
              left_spot={432}
              total_spot={1000}
              first_reward={'1 Crore'}
              gaurantee={true}
              practice={false}
              demo_entry_amount={17}
              entry_amount={10}
            />
          </View>
          <View style={[tailwind('my-2 border border-gray-800 rounded')]}>
            <ContestCard
              name={'Prize Pool'}
              title="10 Croes"
              left_spot={10}
              total_spot={100}
              first_reward={'1 Crore'}
              gaurantee={true}
              practice={false}
              demo_entry_amount={17}
              entry_amount={10}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
