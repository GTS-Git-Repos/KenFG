// API normalization and obj contruction related to user will be here
import {format, formatDistanceToNow} from 'date-fns';
import {UserStatsType} from '../types/user';
import {covertInputTimeStringToDate} from '../utils/comman';

export function normalizeNotificationAPI(payload: Array<any>) {
  try {
    if (payload.length == 0) {
      return [];
    }
    const notifications = [];
    for (const item of payload) {
      const date = covertInputTimeStringToDate(item.when);
      notifications.push({
        key: item.key,
        content: item.content,
        read: item.read === '1',
        time: formatDistanceToNow(date),
      });
    }
    return notifications;
  } catch (err) {
    console.log(err);
    throw new Error('normalizeNotificationAPI failed');
  }
}

export function normalizeUserStatsAPI(
  payload: Array<any>,
): UserStatsType | boolean {
  try {
    const u_c = payload[1].user_career;
    const r_m: Array<any> = payload[0].recent_matches;
    const since = covertInputTimeStringToDate(
      u_c.user_created_at[0].created_at,
    );
    const career: any = {
      winRate: u_c.win_rate,
      total_won: 0,
      total_matches: u_c.total_match,
      total_series: u_c.total_series,
      total_contests: u_c.total_contest,
      since: format(since, 'MMM,yyy'),
    };
    const matches = r_m.map((item: any) => {
      return {
        match_key: item.match_key,
        teams: item.teams,
        match_result: item.result || '',
        total_team: item.total_team,
        ken_team_points: 0,
        won: false,
      };
    });
    return {
      career,
      matches,
    };
  } catch (err) {
    console.log(err);
    throw new Error('normalizeUserStatsAPI failed');
  }
}
