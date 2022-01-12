import {errorBox} from '../../../utils/snakBars';

export function isTeamSelected(
  selected_teams: Array<string>,
  team_key: string,
) {
  return selected_teams.includes(team_key);
}
