import React, {useRef, useState} from 'react';
import {View, Text, ScrollView, Modal, useWindowDimensions} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';
// import assets from 'assets';
import {ButtonComponent, TopBar} from '../../sharedComponents/';
import CreateContestTopBar from './atoms/CreateContestTopBar';
import TeamsSection from './atoms/TeamsSection';
import CreateContestTabs from './molecules/CreateContestTabs';
import Switch from './molecules/Switch';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import CreateContestInput from './molecules/CreateContestInput';
import CreateContestBanner from './atoms/CreateContestBanner';
import {Modalize} from 'react-native-modalize';
import AcceptTermsSheet from './atoms/AcceptTermsSheet';
import PagerView from 'react-native-pager-view';
import CreateTeamPage from './molecules/CreateTeamPage';
import ShareContestPage from './molecules/ShareContestPage';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function CreateContestScreen() {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();
  const pageRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onPageSelectedAction = (e: any) => {
    setActiveIndex(e.nativeEvent.position);
  };
  const onTabPressed = (index: number) => {
    pageRef.current?.setPage(index);
  };

  return (
    <View style={tailwind('h-full bg-dark')}>
      <CreateContestTopBar />
      <TeamsSection />

      <CreateContestTabs
        activeIndex={activeIndex}
        onTabPressed={onTabPressed}
      />
      <PagerView
        ref={pageRef}
        onPageScroll={e => console.log(e.nativeEvent)}
        onPageSelected={onPageSelectedAction}
        style={{flex: 1}}
        initialPage={0}>
        <View style={[{width: width}]}>
          <CreateTeamPage activeIndex={activeIndex} />
        </View>
        <View style={[{width: width}]}>
          <ShareContestPage activeIndex={activeIndex} />
        </View>
      </PagerView>
    </View>
  );
}
