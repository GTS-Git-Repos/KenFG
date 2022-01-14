import React, {useEffect, useRef, useState} from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  ScrollView,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
// import TeamStatus from '../atoms/TeamStatus';
import TeamStatusHeader from '../atoms/TeamStatusHeader';
import {liveMatchMetaRemote} from '../../../../remote/matchesRemote';
import {useQuery} from 'react-query';
import {TeamScrollBoardByInnings} from '../../../../sharedComponents';
const log = console.log;

interface PropTypes {
  index: number;
  activeIndex: number;
}
interface OverallTeamShape {
  has_points: boolean;
  team_key: string;
  is_batting: string;
  team_code: string;
  team_overs: number;
  team_runs: number;
  team_wickets: number;
  isExpanded: boolean;
}

export default function ScrollBoardPage(props: PropTypes) {
  const scrollRef = useRef<ScrollView>();
  const [openedInnings, setOpenedInnings] = useState<any>(0);

  const {data, isLoading, isSuccess} = useQuery(
    'matchMeta',
    liveMatchMetaRemote,
    {
      staleTime: 8000,
    },
  );

  useEffect(() => {
    if (data) {
      setOpenedInnings(data.innings.length - 1);
    }
  }, [data]);

  const openInningsTab = (index: number) => {
    scrollRef.current?.scrollTo({
      y: -1000,
      animated: true,
    });

    if (openedInnings !== index) {
      setOpenedInnings(index);
      scrollRef.current?.scrollTo({
        y: 0,
        animated: true,
      });
    } else {
      setOpenedInnings(null);
    }
  };

  if (isLoading) {
    return <ActivityIndicator color="0c1320" />;
  }
  if (isSuccess && !data) {
    return null;
  }

  if (props.index !== props.activeIndex) {
    return null;
  }
  return (
    <View>
      <ScrollView ref={scrollRef}>
        <View>
          <View style={[tailwind('h-3')]}></View>
          {data.innings.map((item: any, index: any) => {
            return (
              <TeamScrollBoardByInnings
                index={index}
                isExpanded={index === openedInnings}
                key={index}
                topSection={{
                  key: item.code,
                  code: item.code,
                  overs: item.overs,
                  runs: item.runs,
                  wickets: item.wickets,
                  isCompleted: item.is_completed,
                }}
                battersData={item.battersData}
                bowlersData={item.bowlersData}
                wicketsData={item.wicketsData}
                extra={item.extra}
                openInningsTab={openInningsTab}
              />
            );
          })}
        </View>
        <View style={[tailwind('h-10')]}></View>
      </ScrollView>
    </View>
  );
}
