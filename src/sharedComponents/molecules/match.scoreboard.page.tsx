import React, {useEffect, useRef, useState} from 'react';
import tailwind from '../../../tailwind';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import {TeamScrollBoardByInnings} from '../index';

const log = console.log;

interface PropTypes {
  index: number;
  activeIndex: number;
  innings: Array<any>;
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

export default function MatchScoreBoardPage(props: PropTypes) {
  const scrollRef = useRef<ScrollView>();
  const [openedInnings, setOpenedInnings] = useState<any>(0);

  useEffect(() => {
    if (props.innings) {
      setOpenedInnings(props.innings.length - 1);
    }
  }, [props.innings]);

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

  if (props.index !== props.activeIndex) {
    return <ActivityIndicator color="#0c1320" />;
  }
  return (
    <View>
      <ScrollView ref={scrollRef}>
        <View>
          <View style={[tailwind('h-3')]}></View>
          {props.innings.map((item: any, index: any) => {
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
