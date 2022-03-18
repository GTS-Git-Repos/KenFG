// the reselect selectors for match

import {createSelector} from 'reselect';

const MatchMetaState = (state: any) => state.match.matchMeta;
const LoadingState = (state: any) => state.match.loading;

export const matchMetaSelector = createSelector(
  MatchMetaState,
  (matchMeta: any): null | undefined => {
    return matchMeta;
  },
);

export const matchLoadingSelector = createSelector(
  LoadingState,
  (loading): boolean => {
    return loading;
  },
);
