import React, {useEffect} from 'react';
import tailwind from '../../../../tailwind';
import {View, ScrollView, Text, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import TeamStatus from '../atoms/TeamStatus';
import TeamStatusHeader from '../atoms/TeamStatusHeader';
import {liveMatchMetaRemote} from '../../../remote/matchesRemote';
import {useQuery} from 'react-query';
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
  const matchMeta = useQuery('matchMeta', liveMatchMetaRemote);

  useEffect(() => {
    // log('matchMeta srlbd', matchMeta.data);
  }, []);

  if (matchMeta.isLoading) {
    return <ActivityIndicator color="0c1320" />;
  }
  if (matchMeta.isSuccess && !matchMeta.data) {
    return null;
  }

  if (props.index !== props.activeIndex) {
    return null;
  }
  return (
    <View>
      <ScrollView>
        <View>
          <View style={[tailwind('h-3')]}></View>
          <TeamOverAllScoreBoard
            has_points={matchMeta.data.team_a.has_points}
            team_key={matchMeta.data.team_a.key}
            team_code={matchMeta.data.team_a.key}
            is_batting={matchMeta.data.team_a.is_batting}
            team_overs={matchMeta.data.team_a.overs}
            team_runs={matchMeta.data.team_a.runs}
            team_wickets={matchMeta.data.team_a.team_wickets}
            isExpanded={false}
          />
          <TeamOverAllScoreBoard
            has_points={matchMeta.data.team_b.has_points}
            team_key={matchMeta.data.team_b.key}
            team_code={matchMeta.data.team_b.key}
            is_batting={matchMeta.data.team_b.is_batting}
            team_overs={matchMeta.data.team_b.overs}
            team_runs={matchMeta.data.team_b.runs}
            team_wickets={matchMeta.data.team_b.wickets}
            isExpanded={true}
          />

          {/* <TeamStatus teamName="ENG" isBatting={false} isExpanded={false} />
          <TeamStatus teamName="AUS" isBatting={true} isExpanded={true} /> */}
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

const TeamOverAllScoreBoard = (props: OverallTeamShape) => {
  return (
    <View
      style={[
        tailwind(
          'flex-row py-3 bg-dark-3 border-b border-gray-800 items-center',
        ),
        {
          backgroundColor: '#362F20',
        },
      ]}>
      <View style={[tailwind('flex-row items-center'), {flex: 6}]}>
        <Text
          style={[
            tailwind('font-bold text-white uppercase pl-4 pr-1 font-14'),
          ]}>
          {props.team_code}
        </Text>
        {props.is_batting && (
          <Text
            style={[
              tailwind(
                'font-regular rounded-full bg-dark-4 px-2 py-1 text-dark-1 mx-3 font-10',
              ),
            ]}>
            Batting
          </Text>
        )}
      </View>

      <View
        style={[tailwind('flex-row justify-between items-center'), {flex: 6}]}>
        {props.has_points ? (
          <Text
            style={[tailwind('font-regular text-light font-12'), {flex: 4}]}>
            {`${props.team_overs} Overs`}
          </Text>
        ) : (
          <Text
            style={[tailwind('font-regular text-white font-12'), {flex: 4}]}>
            N/A
          </Text>
        )}
        {props.has_points ? (
          <Text
            style={[tailwind('font-bold px-3 text-light font-14'), {flex: 4}]}>
            {props.team_runs}/{props.team_wickets}
          </Text>
        ) : (
          <Text
            style={[
              tailwind('font-regular px-3 text-white font-12'),
              {flex: 4},
            ]}>
            N/A
          </Text>
        )}

        {props.isExpanded ? (
          <Icon
            name="chevron-down"
            size={20}
            style={[tailwind('mr-2')]}
            color="#8797B1"
          />
        ) : (
          <Icon
            name="chevron-up"
            size={20}
            style={[tailwind('mr-2')]}
            color="#B2933D"
          />
        )}
      </View>
    </View>
  );
};

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
