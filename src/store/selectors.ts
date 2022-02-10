import {createSelector} from 'reselect';
import {SelectedMatchType} from '../types/match';
import {rolesConstraints} from '../constants/appContants';
import {sumOfMustNeedToFillSlots} from './store_utils';
import {UserMetaType} from 'src/types/user';

const UserState = (state: any) => state.user.user_info;
const CashFreeState = (state: any) => state.app.cashFreeAppId;
const isFullMatchState = (state: any) => state.app.isFullMatch;

const allPlayersState = (state: any) => state.team.all_players;
const playersState = (state: any) => state.team.players;
const TeamsState = (state: any) => state.team.teams;
const TeamCountState = (state: any) => state.team.team_count;

const SelectedMatchState = (state: any) => state.app.selected_match;
const JoinContestState = (state: any) => state.app.joinContestRequest;

export const userInfo = createSelector<any, any, UserMetaType>(
  UserState,
  userInfo => {
    return userInfo;
  },
);

export const userWalletAmount = createSelector(UserState, userInfo => {
  try {
    return parseInt(userInfo.un_utilized);
  } catch (err) {
    return 0;
  }
});

// fix that spelling
export const isFulMatchSelector = createSelector(
  isFullMatchState,
  isFullMatch => {
    return isFullMatch;
  },
);

export const appConstantsSelector = createSelector(CashFreeState, cashFree => {
  return {
    cashFreeAppId: cashFree,
  };
});

export const creditLeft = createSelector(playersState, players => {
  try {
    const usedCredits = players.reduce(
      (prev: number, cur: any) => prev + cur.credits,
      0,
    );
    return 100 - usedCredits;
  } catch (err) {
    console.log(err);
    return 0;
  }
});

export const selectedMatch = createSelector(
  SelectedMatchState,
  JoinContestState,
  (match, contest): SelectedMatchType => {
    return {
      match_key: match.match_key,
      name: match.name,
      team_a: match.team_a,
      team_b: match.team_b,
      team_a_name: match.team_a_name,
      team_b_name: match.team_b_name,
      titleString: `${match.team_a} VS ${match.team_b}`.toUpperCase(),
      start_at: match.start_at,
      joinContest: contest,
    };
  },
);

export const blockList = createSelector(
  allPlayersState,
  playersState,
  TeamsState,
  TeamCountState,
  (all_players, players, teams, teams_count) => {
    try {
      let blockListPlayers: any = [];
      const blockListSet = new Set([]);
      const keeper = players.filter(
        (item: any) => item.seasonal_role === 'keeper',
      );
      const batsman = players.filter(
        (item: any) => item.seasonal_role === 'batsman',
      );
      const all_rounder = players.filter(
        (item: any) => item.seasonal_role === 'all_rounder',
      );
      const bowler = players.filter(
        (item: any) => item.seasonal_role === 'bowler',
      );
      const team_a = players.filter((item: any) => item.team_key === teams[0]);
      const team_b = players.filter((item: any) => item.team_key === teams[1]);

      // // is 11 players selected
      // if(players.length === 11){
      //   // put all players in block list
      //   const allPlayers = all_players.
      // }

      // roles check
      if (rolesConstraints.keeper.max <= keeper.length) {
        const keeperKeys = all_players[0].keeper.map((item: any) => item.key);
        blockListPlayers.push(...keeperKeys);
      }
      if (rolesConstraints.batsman.max <= batsman.length) {
        const batsmanKeys = all_players[0].batsman.map((item: any) => item.key);
        blockListPlayers.push(...batsmanKeys);
      }
      if (rolesConstraints.all_rounder.max <= all_rounder.length) {
        const allRounderKeys = all_players[0].all_rounder.map(
          (item: any) => item.key,
        );
        blockListPlayers.push(...allRounderKeys);
      }
      if (rolesConstraints.bowler.max <= bowler.length) {
        const bowlerKeys = all_players[0].bowler.map((item: any) => item.key);
        blockListPlayers.push(...bowlerKeys);
      }

      // Open roles and must need roles check
      const openSlots = 11 - players.length;
      const must_need = sumOfMustNeedToFillSlots(teams_count);
      if (openSlots <= must_need) {
        // from now on we only want to allow minimum role need to be filled
        if (teams_count.keeper.must_need <= 0) {
          const keys = all_players[0].keeper.map((item: any) => item.key);
          blockListPlayers.push(...keys);
        }

        if (teams_count.batsman.must_need <= 0) {
          const keys = all_players[0].batsman.map((item: any) => item.key);
          blockListPlayers.push(...keys);
        }
        if (teams_count.all_rounder.must_need <= 0) {
          const keys = all_players[0].all_rounder.map((item: any) => item.key);
          blockListPlayers.push(...keys);
        }
        if (teams_count.bowler.must_need <= 0) {
          const keys = all_players[0].bowler.map((item: any) => item.key);
          blockListPlayers.push(...keys);
        }
      }

      // is team count reached check
      if (team_a.length >= 7) {
        const team_a_keepers = all_players[0].keeper
          .filter((item: any) => item.team_key === teams[0])
          .map((item: any) => item.key);

        const team_a_batsman = all_players[0].batsman
          .filter((item: any) => item.team_key === teams[0])
          .map((item: any) => item.key);

        const team_a_all_rounder = all_players[0].all_rounder
          .filter((item: any) => item.team_key === teams[0])
          .map((item: any) => item.key);

        const team_a_bowlers = all_players[0].bowler
          .filter((item: any) => item.team_key === teams[0])
          .map((item: any) => item.key);
        blockListPlayers.push(...team_a_keepers);
        blockListPlayers.push(...team_a_batsman);
        blockListPlayers.push(...team_a_all_rounder);
        blockListPlayers.push(...team_a_bowlers);
      }

      if (team_b.length >= 7) {
        const team_b_keepers = all_players[0].keeper
          .filter((item: any) => item.team_key === teams[1])
          .map((item: any) => item.key);

        const team_b_batsman = all_players[0].batsman
          .filter((item: any) => item.team_key === teams[1])
          .map((item: any) => item.key);

        const team_b_all_rounder = all_players[0].all_rounder
          .filter((item: any) => item.team_key === teams[1])
          .map((item: any) => item.key);

        const team_b_bowlers = all_players[0].bowler
          .filter((item: any) => item.team_key === teams[1])
          .map((item: any) => item.key);
        blockListPlayers.push(...team_b_keepers);
        blockListPlayers.push(...team_b_batsman);
        blockListPlayers.push(...team_b_all_rounder);
        blockListPlayers.push(...team_b_bowlers);
      }

      return blockListPlayers;
    } catch (err) {
      console.log('blockList --->', err);
      return [];
    }
  },
);

export const allSelecdtedPlayers = createSelector(playersState, players => {
  return players;
});

export const rolesCount = createSelector(
  playersState,
  TeamsState,
  (players, teams) => {
    // console.log('teams', teams);

    const keeper = players.filter(
      (item: any) => item.seasonal_role === 'keeper',
    );
    const batsman = players.filter(
      (item: any) => item.seasonal_role === 'batsman',
    );
    const all_rounder = players.filter(
      (item: any) => item.seasonal_role === 'all_rounder',
    );
    const bowler = players.filter(
      (item: any) => item.seasonal_role === 'bowler',
    );
    const team_a = players.filter((item: any) => item.team_key === teams[0]);
    const team_b = players.filter((item: any) => item.team_key === teams[1]);

    return {
      keeper: {
        occupaid: keeper.length,
        players: keeper,
        min: rolesConstraints['keeper'].min,
        max: rolesConstraints['keeper'].max,
        open_slots: rolesConstraints['keeper'].max - keeper.length,
        must_need: rolesConstraints['keeper'].min - keeper.length,
      },
      batsman: {
        occupaid: batsman.length,
        players: batsman,

        min: rolesConstraints['batsman'].min,
        max: rolesConstraints['batsman'].max,
        open_slots: rolesConstraints['batsman'].max - batsman.length,
        must_need: rolesConstraints['batsman'].min - batsman.length,
      },
      all_rounder: {
        occupaid: all_rounder.length,
        players: all_rounder,

        min: rolesConstraints['all_rounder'].min,
        max: rolesConstraints['all_rounder'].max,
        open_slots: rolesConstraints['all_rounder'].max - all_rounder.length,
        must_need: rolesConstraints['all_rounder'].min - all_rounder.length,
      },
      bowler: {
        occupaid: bowler.length,
        players: bowler,
        min: rolesConstraints['bowler'].min,
        max: rolesConstraints['bowler'].max,
        open_slots: rolesConstraints['bowler'].max - bowler.length,
        must_need: rolesConstraints['bowler'].min - bowler.length,
      },

      [teams[0]]: team_a.length,
      [teams[1]]: team_b.length,
    };
  },
);

export const playersByRole = createSelector(playersState, players => {
  const keeper = players.filter((item: any) => item.seasonal_role === 'keeper');
  const batsman = players.filter(
    (item: any) => item.seasonal_role === 'batsman',
  );
  const all_rounder = players.filter(
    (item: any) => item.seasonal_role === 'all_rounder',
  );
  const bowler = players.filter((item: any) => item.seasonal_role === 'bowler');

  return {
    keeper,
    batsman,
    all_rounder,
    bowler,
  };
});
