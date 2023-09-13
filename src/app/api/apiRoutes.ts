//TODO: add all routes

export const account = {
  byPuuid: (puuid: string) => `/riot/account/v1/accounts/by-puuid/${puuid}`,
  byRiotId: (gameName: string, tagLine: string) =>
    `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`,
  me: () => "/riot/account/v1/accounts/me",
  byGame: (game: string, puuid: string) =>
    `/riot/account/v1/active-shards/by-game/${game}/by-puuid/${puuid}`,
};

export const championMastery = {
  byPuuid: (encryptedPuuid: string) =>
    `/lol/champion-mastery/v4/champion-masteries/by-puuid/${encryptedPuuid}`,
  byPuuidAndChampion: (encryptedPuuid: string, championId: string) =>
    `/lol/champion-mastery/v4/champion-masteries/by-puuid/${encryptedPuuid}/by-champion/${championId}`,
};

export const champion = {
  rotation: () => "/lol/platform/v3/champion-rotations",
};

export const match = {
  listOfMatches: (puuid: string) =>
    `/lol/match/v5/matches/by-puuid/${puuid}/ids`,
  match: (matchId: string) => `/lol/match/v5/matches/${matchId}`,
  timeline: (matchId: string) => `/lol/match/v5/matches/${matchId}/timeline`,
};
