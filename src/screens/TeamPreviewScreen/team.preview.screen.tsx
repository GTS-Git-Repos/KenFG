import React, {useEffect, useState} from 'react';
import {View, Text, Image, ImageBackground, ScrollView} from 'react-native';
import tailwind from '../../../tailwind';
import {useNavigation, useRoute, CommonActions} from '@react-navigation/native';
import assets from '../../constants/assets_manifest';
import {useQuery} from 'react-query';

import {log} from '../../utils/logs';
import MatchGroundTopBar from './atoms/MatchGroundTopar';
import MatchStats from './atoms/MatchStats';
import CategoryPlayers from './blocks/CategoryPlayers';
import {useSelector} from 'react-redux';
import {creditLeft, rolesCount} from '../../store/selectors';

export default function MathchGroundScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const [keepers, setKeepers] = useState([]);
  const [batsman, setBatsman] = useState([]);
  const [all_rounder, setAll_rounder] = useState([]);
  const [bowler, setBowlers] = useState([]);
  const [c_key, setC_key] = useState(null);
  const [vc_key, setVC_key] = useState(null);

  const TeamState: any = useSelector<any>(state => state.team.teams);
  const CaptainKeyState: any = useSelector<any>(state => state.team.cap_key);
  const ViceCaptainState: any = useSelector<any>(state => state.team.vc_key);

  const availableCredits = useSelector(creditLeft);
  const rolesCountSelector = useSelector(rolesCount);

  useEffect(() => {
    setKeepers(rolesCountSelector.keeper.players);
    setBatsman(rolesCountSelector.batsman.players);
    setAll_rounder(rolesCountSelector.all_rounder.players);
    setBowlers(rolesCountSelector.bowler.players);
  }, [rolesCountSelector]);

  return (
    <View style={tailwind('h-full bg-dark-4')}>
      <MatchGroundTopBar name={'Your Team'} />
      <MatchStats
        playersCount={
          rolesCountSelector[TeamState[0]] + rolesCountSelector[TeamState[1]]
        }
        teamname1={TeamState[0]}
        teamname2={TeamState[1]}
        teamcount1={rolesCountSelector[TeamState[0]]}
        teamcount2={rolesCountSelector[TeamState[1]]}
        creditsLeft={availableCredits}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground
          source={assets.ground}
          style={[tailwind('w-full'), {flexGrow: 1}]}
          resizeMode="cover">
          <CategoryPlayers
            title={'WICKET-KEEPERS'}
            players={keepers}
            CaptainKeyState={CaptainKeyState}
            ViceCaptainState={ViceCaptainState}
          />
          <CategoryPlayers
            title={'BATS MEN'}
            players={batsman}
            CaptainKeyState={CaptainKeyState}
            ViceCaptainState={ViceCaptainState}
          />
          <CategoryPlayers
            title={'ALL ROUNDERS'}
            players={all_rounder}
            CaptainKeyState={CaptainKeyState}
            ViceCaptainState={ViceCaptainState}
          />
          <CategoryPlayers
            title={'BOWLERS'}
            players={bowler}
            CaptainKeyState={CaptainKeyState}
            ViceCaptainState={ViceCaptainState}
          />
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

// *from* route props is mandatory
