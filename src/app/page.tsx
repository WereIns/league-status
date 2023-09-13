"use client";

import { useEffect, useState } from "react";
import { myPuuid } from "./api/baseRiotApi";
import { getMatch, getMatchList } from "./api/match";
import { MatchResponse } from "./api/types/matchTypes";
import Tile from "./components/Tile";

export default function Home() {
  const [match, setMatch] = useState<MatchResponse[]>([]);

  console.log(match);

  useEffect(() => {
    getMatchList("EUROPE", myPuuid).then(({ data }) =>
      getMatch("EUROPE", data?.[0]).then(({ data }) => setMatch([data]))
    );
  }, []);

  const [firstMatch] = match;

  if (!firstMatch)
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    );

  return (
    <main className="grid grid-cols-5">
      {firstMatch.info.participants.map((item) => (
        <Tile key={item.puuid} {...item} />
      ))}
    </main>
  );
}
