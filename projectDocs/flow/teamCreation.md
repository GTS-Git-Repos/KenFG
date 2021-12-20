# Visual constraints

need to show visual constraints (blur the player profile) indicating that item can't be selectable as a meaning

### Scenarios

1. In the 4 roles, keeper, batter, all_rounder, bowler, if any one of the role selected by maximum allowed slots, then all other roles only selected by minimum slots, it need to be enforced by vissually

2. if that one team reaches 7 players block all other players from team from selecting

3. if user did not have enough credits to select that player block that player from selecting

4. if maximum 11 players have been selected block all other players from selecting

## Solution:

### Solution One

in redux there is a state we want to maintain named as _blocklist_ at in initial that state will be an empty array []

when we want to block a particular role being selected push that role, ex(**keeper**) on the blocklist

if one team reaches maxiumum 7 players push that team_code (ex, 'aus') on that blocklist

is any one of the role reaches a maxium all others roles are should to selected by minimum, for that append **min_only** in block list

if 11 players are all selected push that 'all' inside blocklist

`js ['keeper','aus','min_only',all] `
