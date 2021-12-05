import React, {useRef, useState, createContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../utils/customHoooks';
import {useNavigation, useRoute} from '@react-navigation/native';
import {FullScreenLoading, BlockScreenByLoading} from '../../sharedComponents/';
import LinearGradient from 'react-native-linear-gradient';
import PagerView from 'react-native-pager-view';
import TopBarCreateTeam from './atoms/TopBarCreateTeam';
import MatchStatus from './atoms/MatchStatus';
import TeamInfo from './molecules/TeamInfo';
import SelectionIndicator from './atoms/SelectionIndicator';
import Tabs from './atoms/Tabs';
import Line from './atoms/Line';
import BottomAction from './molecules/BottomAction';
import Page from './molecules/Page';
import {Modalize} from 'react-native-modalize';

const log = console.log;

export default function CreateTeamScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const pageRef = useRef<PagerView>(null);
  const clearRef = useRef<any>(null);
  const isScreenReady = useIsScreenReady();

  const [loading, setLoading] = useState<boolean>(false);

  const [activeIndex, setActiveIndex] = useState(0);

  const onPageSelectedAction = (e: any) => {
    setActiveIndex(e.nativeEvent.position);
  };
  const onTabPressed = (index: number) => {
    pageRef.current?.setPage(index);
  };

  // Create Team Logic

  if (isScreenReady === false) {
    return <FullScreenLoading title="Loading..." />;
  }

  return (
    
      <View style={tailwind('bg-dark h-full')}>
        <TopBarCreateTeam />
        <LinearGradient colors={['#C5A858', '#B2933D']}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#C5A858', '#B2933D']}>
            <MatchStatus text={'MAX 7 PLAYERS FROM A TEAM'} />
            <Line />

            <TeamInfo
              teamname1={'IND'}
              teamname2={'PAK'}
              teamcount1={7}
              teamcount2={4}
              credits_left={2.5}
            />
          </LinearGradient>
          <Line />
          <SelectionIndicator clearRef={clearRef} count={8} />
        </LinearGradient>

        {/* Tabs */}
        <View>
          <Tabs activeIndex={activeIndex} onTabPressed={onTabPressed} />
        </View>

        <PagerView
          ref={pageRef}
          onPageSelected={onPageSelectedAction}
          style={{flex: 1}}
          initialPage={0}>
          <View>
            <Page title={'Select 1-2 Wicket Keepers'} />
          </View>
          <View>
            <Page title={'Select 4-3 Bats Man'} />
          </View>
          <View>
            <Page title={'Select 1-3 All Rounders'} />
          </View>
          <View>
            <Page title={'Select 5-3 Bowlers'} />
          </View>
        </PagerView>
        <View
          style={[
            tailwind('absolute bottom-0 w-full flex-row justify-center'),
          ]}>
          <BottomAction />
        </View>

        <Modalize
          ref={clearRef}
          useNativeDriver={true}
          modalTopOffset={200}
          adjustToContentHeight={true}
          disableScrollIfPossible={false}
          closeOnOverlayTap={true}>
          <View style={[tailwind('bg-dark-4 px-3 py-5')]}>
            <Text
              style={[
                tailwind('font-bold pb-4 text-light text-center font-16'),
              ]}>
              Clear Team ?
            </Text>
            <Text
              style={[
                tailwind(
                  'font-regular pb-2 text-light text-center mx-10 font-12',
                ),
              ]}>
              Are you sure you want to clear your player selections ?
            </Text>

            <LinearGradient
              start={{x: 0.8, y: 2.0}}
              end={{x: 0.3, y: 0.5}}
              locations={[0.6, 0.5]}
              style={[tailwind('flex-row  m-2 rounded')]}
              colors={['#00513B', '#006A4D']}>
              <TouchableOpacity style={[tailwind('flex-grow py-3')]}>
                <Text
                  style={[
                    tailwind(
                      'font-bold uppercase text-light flex-grow text-center font-12',
                    ),
                  ]}>
                  Yes Clear
                </Text>
              </TouchableOpacity>
            </LinearGradient>

            <LinearGradient
              start={{x: 0.8, y: 2.0}}
              end={{x: 0.3, y: 0.5}}
              locations={[0.6, 0.5]}
              style={[tailwind('flex-row  m-2 rounded')]}
              colors={['#1C2B46', '#172338']}>
              <TouchableOpacity style={[tailwind('flex-grow py-3')]}>
                <Text
                  style={[
                    tailwind(
                      'font-bold uppercase text-light text-center font-12',
                    ),
                  ]}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </Modalize>

        {loading && <BlockScreenByLoading />}
      </View>
    // </MyContext.Provider>
  );
}

// start={{x: 0.2, y: 1.1}}
// end={{x: 1, y: 0.1}}
// locations={[0.4, 0]}
// colors={['#C5A858', '#B2933D']}>
