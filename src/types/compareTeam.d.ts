// move to match types definations

export interface CompareTeamType {
    commanPlayers: CommanPlayer[];
    commanPlayersScore: number;
    diffPlayerScore: number;
    diffPlayersOppTeam: DiffPlayersOppTeam[];
    diffPlayersSrcTeam: DiffPlayersSrcTeam[];
}

export interface CommanPlayer {
    calc_points: number;
    cap: boolean;
    credits: number;
    key: string;
    name: string;
    points: number;
    seasonal_role: string;
    team_key: string;
    uuid: string;
    vc: boolean;
}

export interface DiffPlayersOppTeam {
    calc_points: number;
    cap: boolean;
    credits: number;
    key: string;
    name: string;
    points: number;
    seasonal_role: string;
    team_key: string;
    uuid: string;
    vc: boolean;
}

export interface DiffPlayersSrcTeam {
    calc_points: number;
    cap: boolean;
    credits: number;
    key: string;
    name: string;
    points: number;
    seasonal_role: string;
    team_key: string;
    uuid: string;
    vc: boolean;
}
