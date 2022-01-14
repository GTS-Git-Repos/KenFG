import {errorBox} from '../../../../utils/snakBars';

//  NOT USED ANYWHERE

export function isTeamSelected(
  selected_teams: Array<string>,
  team_key: string,
) {
  return selected_teams.includes(team_key);
}
