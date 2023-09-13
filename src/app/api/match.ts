import { match } from "./apiRoutes";
import { CONTINENT, getRiotBaseUrl } from "./baseRiotApi";

import axios, { AxiosPromise } from "axios";
import { MatchResponse } from "./types/matchTypes";

type MatchListResponse = string[];

export const getMatchList = (
  continent: CONTINENT,
  puuid: string
): AxiosPromise<MatchListResponse> =>
  axios.get(
    `${getRiotBaseUrl(continent)}${match.listOfMatches(puuid)}?api_key=${
      process.env.RIOT_API_KEY
    }`
  );

export const getMatch = (
  continent: CONTINENT,
  matchId: string
): AxiosPromise<MatchResponse> =>
  axios.get(
    `${getRiotBaseUrl(continent)}${match.match(matchId)}?api_key=${
      process.env.RIOT_API_KEY
    }`
  );
