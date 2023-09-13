export type CONTINENT = "AMERICANS" | "ASIA" | "EUROPE" | "SEA";

export type REGION =
  | "BR1"
  | "EUN1"
  | "EUW1"
  | "JP1"
  | "KR"
  | "LA1"
  | "LA2"
  | "NA1"
  | "OC1"
  | "PH2"
  | "RU"
  | "SG2"
  | "TH2"
  | "TR1"
  | "TW2"
  | "VN2";

export const getRiotBaseUrl = (region: CONTINENT | REGION) =>
  `https://${region}.api.riotgames.com`;

export const myPuuid =
  "IlgdySMaKAwhd2TdLReGIX2db4xMZwgcVaZ5fWuWmxb1FXoNBYTDuObmaMgP6sjVxsJUg0lh9JC3Aw";
