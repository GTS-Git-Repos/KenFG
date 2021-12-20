import store from '../store/';
const log = console.log;
import {rolesConstraints} from '../constants/appContants';

export function isAnyRoleReachedMaxSlots(): boolean {
  const {keeper, batsman, all_rounder, bowler} = occupaid_role_count();
  if (keeper >= 4) {
    return true;
  }

  if (batsman >= 6) {
    return true;
  }

  if (all_rounder >= 4) {
    return true;
  }

  if (bowler >= 4) {
    return true;
  } else {
    return false;
  }
}

export function findARoleNeedToFilled() {
  const {keeper, batsman, all_rounder, bowler} = occupaid_role_count();

  if (batsman < 3) {
    return 'Min 3 Batsman need to be selected';
  }
  if (bowler < 3) {
    return 'Minimum  3 Bowlers need to be selected';
  }
  if (all_rounder < 1) {
    return 'Min 1 All rounder need to be selected';
  } else {
    return 'Min 1 Keeper need to be selected';
  }
}

export function occupaid_role_count() {
  const teamState = store.getState().team;
  const keeper = teamState.players.filter(
    (item: any) => item.seasonal_role === 'keeper',
  ).length;
  const batsman = teamState.players.filter(
    (item: any) => item.seasonal_role === 'batsman',
  ).length;
  const all_rounder = teamState.players.filter(
    (item: any) => item.seasonal_role === 'all_rounder',
  ).length;
  const bowler = teamState.players.filter(
    (item: any) => item.seasonal_role === 'bowler',
  ).length;

  return {keeper, batsman, all_rounder, bowler};
}

export function isPlayerCanBeSelectable(allplayers: any, player: any) {
  // const maxRoles = {
  //   bowler: 4,
  //   batsman: 6,
  //   keeper: 4,
  //   all_rounder: 6,
  // };
  const maxRoles: any = {
    bowler: 4,
    batsman: 6,
    keeper: 4,
    all_rounder: 4,
  };

  const teamState = store.getState().team;

  //console.log('TeamState', teamState);
  try {
    // is user already selected allowed to add, because redux action remove that
    const isExist = teamState.players.find(
      (item: any) => item.key === player.key,
    );
    if (isExist) {
      return {
        result: true,
      };
    }
    // is max 11 all are selected
    if (teamState.players.length === 11) {
      throw '11 players only for a team';
    }

    // is user have enough credits
    if (teamState.credits_left < player.credits) {
      throw 'Not Enough Credits';
    }
    // is player team have a slot
    if (teamState.team_count[player['team_key']].length >= 7) {
      throw 'Maximum 7 members per team only';
    }
    // is player role have a slot
    const occupaid_role_slots = teamState.players.filter(
      (item: any) => item.seasonal_role === player.seasonal_role,
    );

    if (occupaid_role_slots.length >= maxRoles[player.seasonal_role]) {
      throw `${player.seasonal_role} can't higher than ${
        maxRoles[player.seasonal_role]
      }`;
    } else {
      return {
        result: true,
      };
    }
  } catch (err) {
    console.log(err);
    return {
      result: false,
      message: typeof err === 'string' ? err : 'unhandled error',
    };
  }
}
