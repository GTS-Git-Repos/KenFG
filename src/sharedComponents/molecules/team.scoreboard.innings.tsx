import React, {useEffect} from 'react';
import tailwind from '../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  topSection: HeaderSectionProps;
  battersData: BattersScroreShape[];
  bowlersData: BowlerScoreShape[];
  extra: ExtrasShape;
  wicketsData: WicketsShape;
  isExpanded: boolean;
  index: number;
  openInningsTab(index: number): any;
}
interface HeaderSectionProps {
  key: string;
  code: string;
  overs: string;
  runs: string;
  wickets: string;
  index: number;
  isExpanded?: boolean;
  openInningsTab(index: number): any;
  isCompleted: boolean;
}
interface BattersScroreShape {
  name: string;
  runs: string;
  balls: string;
  fours: string;
  six: string;
  sr: string;
  msg: string;
  inningsStatus: boolean;
  isBatting: string;
}

interface WicketsShape {
  name: string;
  number: string;
  overs: string;
  runs: string;
}

interface BowlerScoreShape {
  name: string;
  overs: string;
  runs: string;
  maider: string;
  balls: string;
  wickets: string;
  economy: string;
  isBowling: string;
}
interface ExtrasShape {
  extra: string;
  bye: string;
  leg_bye: string;
  wide: string;
  no_ball: string;
  penalty: string;
}

export default function TeamScoreBoardInnings(props: PropTypes) {
  useEffect(() => {
    // console.log(props.topSection);
  }, []);

  return (
    <View style={[tailwind('')]}>
      <InningsHeaderSection
        key={props.topSection.key}
        code={props.topSection.code}
        overs={props.topSection.overs}
        runs={props.topSection.runs}
        wickets={props.topSection.wickets}
        isExpanded={props.isExpanded}
        index={props.index}
        openInningsTab={props.openInningsTab}
        isCompleted={props.topSection.isCompleted}
      />
      {props.isExpanded && (
        <View>
          <View>
            <RoleHeader
              title="Batter"
              headers={['R', 'B', '4s', '6s', 'S/R']}
            />
            {props.battersData.map((item: any, index: number) => {
              return (
                <BattersScrore
                  key={index}
                  name={item.name}
                  runs={item.runs}
                  balls={item.balls}
                  fours={item.fours}
                  six={item.six}
                  sr={item.sr}
                  isBatting={item.isBatting}
                  inningsStatus={props.topSection.isCompleted}
                  msg={item.msg}
                />
              );
            })}

            <Extras
              extra={props.extra.extra}
              bye={props.extra.bye}
              leg_bye={props.extra.leg_bye}
              wide={props.extra.wide}
              no_ball={props.extra.no_ball}
              penalty={props.extra.penalty}
            />
            {/* <YetToBat /> */}
            <TotalScore
              overs={props.topSection.overs}
              runs={props.topSection.runs}
              wickets={props.topSection.wickets}
            />
          </View>

          {props.bowlersData.length > 1 && (
            <View>
              <RoleHeader
                title="Bowler"
                headers={['O', 'M', 'R', 'W', 'Eco']}
              />
              {props.bowlersData.map(
                (item: BowlerScoreShape, index: number) => {
                  return (
                    <BowlerScore
                      key={index}
                      name={item.name}
                      overs={item.overs}
                      runs={item.runs}
                      maider={item.maider}
                      balls={item.balls}
                      wickets={item.wickets}
                      economy={item.economy}
                      isBowling={item.isBowling}
                    />
                  );
                },
              )}
            </View>
          )}

          <View style={[tailwind('pb-5')]}>
            <RoleHeader title="Fall of Wickets" headers={['Score', 'Over']} />

            {props.wicketsData.map((item: WicketsShape, index: number) => {
              return (
                <WicketsScore
                  key={index}
                  name={item.name}
                  number={item.number}
                  overs={item.overs}
                  runs={item.runs}
                />
              );
            })}
          </View>
        </View>
      )}
    </View>
  );
}

const InningsHeaderSection = (props: HeaderSectionProps) => {
  return (
    <TouchableOpacity
      onPress={() => props.openInningsTab(props.index)}
      style={[ss.inningsheader]}>
      <View style={[tailwind('flex-row items-center pl-4 pr-1'), {flex: 6}]}>
        <Text style={[tailwind('font-bold text-white uppercase font-14')]}>
          {props.code}
        </Text>
        {!props.isCompleted && <IsBatttingTag />}
      </View>

      <View
        style={[tailwind('flex-row justify-between items-center'), {flex: 6}]}>
        <Text style={[tailwind('font-regular text-light font-12'), {flex: 4}]}>
          {`${props.overs} Overs`}
        </Text>
        <Text
          style={[tailwind('font-bold px-3 text-white font-14'), {flex: 4}]}>
          {props.runs}/{props.wickets}
        </Text>

        {props.isExpanded ? (
          <Icon
            name="chevron-up"
            size={20}
            style={[tailwind('mr-2')]}
            color="#8797B1"
          />
        ) : (
          <Icon
            name="chevron-down"
            size={20}
            style={[tailwind('mr-2')]}
            color="#B2933D"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const RoleHeader = (props: any) => {
  return (
    <View style={[ss.roleHeader]}>
      <View style={[tailwind(''), {flex: 6}]}>
        <Text style={[tailwind('font-bold px-2 text-dark-1 font-15')]}>
          {props.title}
        </Text>
      </View>
      <View style={[tailwind('flex-row'), {flex: 6}]}>
        {props.headers.map((item: any) => {
          return (
            <View
              key={item}
              style={[
                tailwind('flex-col items-center justify-center'),
                {flex: 10 / 5},
              ]}>
              <Text
                style={[tailwind('font-bold text-center text-dark-1 font-12')]}>
                {item}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const BattersScrore = (props: BattersScroreShape) => {
  return (
    <View
      style={[
        tailwind('flex-row py-2 bg-dark-3 px-2 border-b border-gray-800'),
      ]}>
      <View style={[tailwind(''), {flex: 6}]}>
        <View style={[tailwind('px-2')]}>
          <Text
            numberOfLines={1}
            style={[tailwind('font-bold text-light font-14')]}>
            {props.name}
          </Text>
          {props.isBatting && props.inningsStatus === false ? (
            <IsActive text="Batting" />
          ) : (
            <WicketText msg={props.msg} />
          )}
        </View>
      </View>
      <View style={[tailwind('flex-row'), {flex: 6}]}>
        <View style={ss.scoreTextView}>
          <Text style={ss.scoreBold}>{props.runs}</Text>
        </View>
        <View style={ss.scoreTextView}>
          <Text style={ss.scoreText}>{props.balls}</Text>
        </View>
        <View style={ss.scoreTextView}>
          <Text style={ss.scoreText}>{props.fours}</Text>
        </View>
        <View style={ss.scoreTextView}>
          <Text style={ss.scoreText}>{props.six}</Text>
        </View>
        <View style={ss.scoreTextView}>
          <Text style={ss.scoreText}>{props.sr}</Text>
        </View>
      </View>
    </View>
  );
};

const BowlerScore = (props: BowlerScoreShape) => {
  return (
    <View
      style={[
        tailwind('flex-row py-2 bg-dark-3 px-2 border-b border-gray-800'),
      ]}>
      <View style={[tailwind(''), {flex: 6}]}>
        <View style={[tailwind('px-2')]}>
          <Text
            numberOfLines={1}
            style={[tailwind('font-bold text-light font-14')]}>
            {props.name}
          </Text>
          {props.isBowling && <IsActive text="Bowling" />}
        </View>
      </View>
      <View style={[tailwind('flex-row'), {flex: 6}]}>
        <View style={ss.scoreTextView}>
          <Text style={ss.scoreBold}>{props.overs}</Text>
        </View>
        <View style={ss.scoreTextView}>
          <Text style={ss.scoreBold}>{props.maider}</Text>
        </View>
        <View style={ss.scoreTextView}>
          <Text style={ss.scoreBold}>{props.runs}</Text>
        </View>
        <View style={ss.scoreTextView}>
          <Text style={ss.scoreBold}>{props.wickets}</Text>
        </View>
        <View style={ss.scoreTextView}>
          <Text style={ss.scoreBold}>{props.economy}</Text>
        </View>
      </View>
    </View>
  );
};

const WicketsScore = (props: WicketsShape) => {
  return (
    <View
      style={[
        tailwind('flex-row py-2 bg-dark-3 px-2 border-b border-gray-800'),
      ]}>
      <View style={[tailwind(''), {flex: 6}]}>
        <View style={[tailwind('px-2')]}>
          <Text
            numberOfLines={1}
            style={[tailwind('font-bold text-light font-14')]}>
            {props.name}
          </Text>
        </View>
      </View>
      <View style={[tailwind('flex-row'), {flex: 6}]}>
        <View style={ss.scoreTextView}>
          <Text style={ss.scoreBold}>
            {props.runs}/{props.number}
          </Text>
        </View>
        <View style={ss.scoreTextView}>
          <Text style={ss.scoreText}>{props.overs}</Text>
        </View>
      </View>
    </View>
  );
};

const Extras = (props: ExtrasShape) => {
  return (
    <View style={[ss.extrasRoot]}>
      <View style={[tailwind(''), {flex: 6}]}>
        <View style={[tailwind('px-2')]}>
          <Text style={[tailwind('font-bold text-light font-14')]}>Extras</Text>
          <Text style={[tailwind('font-regular py-2 text-dark-1 font-12')]}>
            {`nb ${props.no_ball ?? 0}, wd ${props.wide ?? 0}, b0 ${
              props.bye ?? 0
            },lb ${props.leg_bye}, pen ${props.penalty ?? 0}`}
          </Text>
        </View>
      </View>
      <View style={[tailwind(''), {flex: 6}]}>
        <View style={[tailwind('flex-col px-4 justify-center')]}>
          <Text style={[tailwind(`font-bold font-14 text-white`)]}>
            {props.extra}
          </Text>
        </View>
      </View>
    </View>
  );
};

const TotalScore = (props: any) => {
  return (
    <View style={[ss.extrasRoot]}>
      <View style={[tailwind(''), {flex: 6}]}>
        <View style={[tailwind('px-2')]}>
          <Text style={[tailwind('font-bold text-light font-14')]}>Total</Text>
          <Text style={[tailwind('font-regular py-2 text-dark-1 font-12')]}>
            {`${props.wickets} Wickets ${props.overs} overs`}
          </Text>
        </View>
      </View>
      <View style={[tailwind(''), {flex: 6}]}>
        <Text style={[tailwind('font-bold text-white text-center font-13')]}>
          {props.runs}
        </Text>
      </View>
    </View>
  );
};

const YetToBat = () => {
  // can't implement, need a data that in live
  return (
    <View style={[tailwind('pt-2 border-b px-4 border-gray-800 bg-dark-3')]}>
      <Text style={[tailwind('font-bold text-white font-15')]}>Yet to bat</Text>
      <View style={[tailwind('flex-row items-center flex-wrap')]}>
        <Text style={[tailwind('font-regular py-2 text-dark-1 font-12')]}>
          Player1,Player1,Player1,Player1, Player1,Player1,Player1,Player1,
          Player1,Player1,Player1,Player1,
        </Text>
      </View>
    </View>
  );
};

const IsBatttingTag = () => {
  return (
    <View style={[tailwind('rounded-full bg-dark-4 px-1 py-0.5 mx-2')]}>
      <Text style={[tailwind('font-regular text-dark-1 font-10')]}>
        Batting
      </Text>
    </View>
  );
};

const IsActive = (props: any) => {
  return (
    <Text
      style={[
        tailwind('font-regular pt-2 text-secondary font-12'),
        {color: '#816D2E'},
      ]}>
      {props.text}
    </Text>
  );
};

const WicketText = (props: any) => {
  return (
    <Text style={[tailwind('font-regular text-dark-1 font-11 mt-1')]}>
      {props.msg}
    </Text>
  );
};

const ss = StyleSheet.create({
  inningsheader: {
    alignItems: 'center',
    borderColor: 'rgba(31, 41, 55, 1)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingVertical: 12,
    backgroundColor: '#362F20',
  },
  roleHeader: {
    backgroundColor: '#0D1320',
    borderBottomWidth: 1,
    borderColor: 'rgba(31, 41, 55, 1)',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  scoreTextView: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 10 / 5,
  },
  scoreText: {
    color: '#8797B1',
    fontFamily: 'gadugi-normal',
    fontSize: 12,
    textAlign: 'center',
  },
  scoreBold: {
    color: '#FFFFFF',
    fontFamily: 'gadugi-bold',
    fontSize: 12,
    textAlign: 'center',
  },
  extrasRoot: {
    alignItems: 'center',
    backgroundColor: '#172338',
    borderColor: 'rgba(31, 41, 55, 1)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingTop: 8,
  },
});
