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
