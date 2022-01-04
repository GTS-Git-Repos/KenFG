import {liveMatchStatsBluprint} from '../dataBlueprint/liveMatch.blueprint';
const log = console.log;

export const liveTestMatchFormat = (payload: any) => {
  try {
    const obj: any = {...liveMatchStatsBluprint};

    obj.key = payload.key;
    obj.name = payload.name;
    obj.short_name = payload.short_name;
    obj.team_a.key = payload.teams.a.key;
    obj.team_a.name = payload.teams.a.name;
    obj.team_b.key = payload.teams.b.key;
    obj.team_b.name = payload.teams.b.name;
    obj.team_a.players = payload.squad.a;
    obj.team_b.players = payload.squad.b;

    if (payload.play.live.batting_team === 'a') {
      if (payload.play.live.score) {
        obj.team_a.has_points = true;
        obj.team_a.is_batting = true;
        obj.team_a.runs = payload.play.live.score.runs;
        obj.team_a.wickets = payload.play.live.score.wickets;
        obj.team_a.overs = `${payload.play.live.score.overs[0]}.${payload.play.live.score.overs[1]}`;
      }

      if (payload.play.live.required_score) {
        obj.team_b.has_points = true;
        obj.team_b.is_batting = false;
        obj.team_b.runs = payload.play.live.required_score.runs;
        obj.team_b.wickets = payload.play.live.required_score.wickets;
        obj.team_b.overs = `${payload.play.required_score.score.overs[0]}.${payload.play.live.required_score.overs[1]}`;
      }
    } else {
      if (payload.play.live.score) {
        obj.team_b.has_points = true;
        obj.team_b.is_batting = true;
        obj.team_b.runs = payload.play.live.score.runs;
        obj.team_b.wickets = payload.play.live.score.wickets;
        obj.team_b.overs = `${payload.play.live.score.overs[0]}.${payload.play.live.score.overs[1]}`;
      }

      if (payload.play.live.required_score) {
        obj.team_a.has_points = true;
        obj.team_a.is_batting = false;

        obj.team_a.runs = payload.play.live.required_score.runs;
        obj.team_a.wickets = payload.play.live.required_score.wickets;
        obj.team_a.overs = `${payload.play.live.required_score.overs[0]}.${payload.play.live.required_score.overs[1]}`;
      }
    }

    obj.status = payload.status;
    obj.projection = payload.play.live.score.msg_trail_by;
    const activeBatter = payload['players'][payload.play.live.striker_key];

    if (activeBatter) {
      obj.batters[0].active = true;
      obj.batters[0].key = activeBatter.player.key;
      obj.batters[0].name = activeBatter.player.jersey_name;
      // Why I need to Put ['1'] ** need to discus later
      obj.batters[0].runs = activeBatter.score['1'].batting.score.runs;
      obj.batters[0].used_balls = activeBatter.score['1'].batting.score.balls;
    }
    const inactiveBatter =
      payload['players'][payload.play.live.non_striker_key];

    if (inactiveBatter) {
      obj.batters[1].key = inactiveBatter.player.key;
      obj.batters[1].name = inactiveBatter.player.jersey_name;
      obj.batters[1].runs = inactiveBatter.score['1'].batting.score.runs;
      obj.batters[1].used_balls = inactiveBatter.score['1'].batting.score.balls;
    }

    const bowler =
      payload.players[
        payload.play.related_balls[payload.play.live.last_ball_key].bowler
          .player_key
      ];

    if (bowler) {
      obj.bowler.key = bowler.player.key;
      obj.bowler.name = bowler.player.jersey_name;
      obj.bowler.taken_wicket = bowler.score['1'].bowling.score.wickets;
      obj.bowler.given_runs = bowler.score['1'].bowling.score.runs;
      obj.bowler.used_overs = `${bowler.score['1'].bowling.score.overs[0]}.${bowler.score['1'].bowling.score.overs[1]}`;
    }

    const over = payload.play.live.recent_overs[0].ball_keys;
    // log(
    //   'Recent ball info --->',
    //   Object.keys(
    //     payload.play.related_balls[
    //       payload.play.live.recent_overs[0].ball_keys[0]
    //     ],
    //   ),
    // );

    const overDetails = [];
    for (const key of over) {
      const ball = payload.play.related_balls[key];

      if (ball) {
        if (ball.bowler.is_wicket) {
          overDetails.push('w');
        } else {
          overDetails.push(ball.batsman.runs);
        }
      }
    }

    obj.overInfo = overDetails;

    return obj;
  } catch (err) {
    console.log(err);
    log('Failed in <liveMatchStatsFormat>');
    return liveMatchStatsBluprint;
  }
};
