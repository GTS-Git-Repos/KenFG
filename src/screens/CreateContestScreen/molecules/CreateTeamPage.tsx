import React, {useRef, useState} from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import Switch from './Switch';
import CreateContestInput from './CreateContestInput';
import CreateContestBanner from '../atoms/CreateContestBanner';
import AcceptTermsSheet from '../atoms/AcceptTermsSheet';
import {Modalize} from 'react-native-modalize';
import JoinContestListPage from './JoinContestListPage';

interface PropTypes {
  activeIndex: number;
}

export default function CreateTeamPage(props: PropTypes) {
  const termsSheet = useRef(null);

  const [canCreateContest, setCanCreateContest] = useState(false);
  const [showWinngList, setShowWinngList] = useState(true);
  const [selectedSwitchTab, setSelectedSwitchTab] = useState(1);

  const proceedToCreateContest = () => {
    termsSheet?.current?.open();
  };
  const enableCreateContest = () => {
    termsSheet?.current?.close();
    setCanCreateContest(true);
  };
  const switchTab = (tab: number) => {
    setSelectedSwitchTab(tab);
  };
  return (
    <ScrollView>
      {canCreateContest ? (
        selectedSwitchTab === 1 ? (
          <>
            <Switch
              selectedSwitchTab={selectedSwitchTab}
              switchTab={switchTab}
            />
            <CreateContestInput />
          </>
        ) : (
          <>
            <Switch
              selectedSwitchTab={selectedSwitchTab}
              switchTab={switchTab}
            />
            <JoinContestListPage />
          </>
        )
      ) : (
        <CreateContestBanner proceedToCreateContest={proceedToCreateContest} />
      )}

      <Modalize
        ref={termsSheet}
        useNativeDriver={true}
        modalTopOffset={100}
        adjustToContentHeight={true}>
        <AcceptTermsSheet
          enableCreateContest={enableCreateContest}
          termsSheet={termsSheet}
        />
      </Modalize>
    </ScrollView>
  );
}
