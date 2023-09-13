import { REGION } from "../baseRiotApi";

export type GameMode = "CLASSIC";
export type GameType = "MATCHED_GAME";

export type TeamPosition = "TOP" | "JUNGLE" | "MID" | "ADC" | "SUP";

export interface Bans {
  championId: number;
  pickTurn: number;
}

export interface Objectives {
  baron: {
    first: boolean;
    kills: number;
  };
  champion: {
    first: boolean;
    kills: number;
  };
  dragon: {
    first: boolean;
    kills: number;
  };
  inhibitor: {
    first: boolean;
    kills: number;
  };
  riftHerald: {
    first: boolean;
    kills: number;
  };
  tower: {
    first: boolean;
    kills: number;
  };
}

export interface Teams {
  bans: Bans[];
  objectives: Objectives;
  teamId: string;
  win: boolean;
}

export interface MatchResponse {
  metadata: {
    dataVersion: string;
    matchId: string;
    participants: string[];
  };
  info: {
    gameCreation: number;
    gameDuration: number;
    gameEndTimestamp: Date;
    gameId: number;
    gameMode: GameMode;
    gameName: string;
    gameStartTimestamp: Date;
    gameType: GameType;
    gameVersion: string;
    mapId: number;
    participants: Participants[];
    platformId: REGION;
    queueId: string;
    teams: Teams[];
    tournamentCode: string;
  };
}

export interface Participants {
  allInPings: number;
  assistMePings: number;
  assists: number;
  baitPings: number;
  baronKills: number;
  basicPings: number;
  bountyLevel: number;
  challenges: {
    "12AssistStreakCount": number;
    abilityUses: 176;
    acesBefore15Minutes: number;
    alliedJungleMonsterKills: number;
    baronTakedowns: number;
    blastConeOppositeOpponentCount: number;
    bountyGold: number;
    buffsStolen: number;
    completeSupportQuestInTime: number;
    controlWardTimeCoverageInRiverOrEnemyHalf: 0.8284421780709038;
    controlWardsPlaced: 2;
    damagePerMinute: 218.0682595887914;
    damageTakenOnTeamPercentage: 0.1541490187763367;
    dancedWithRiftHerald: number;
    deathsByEnemyChamps: 7;
    dodgeSkillShotsSmallWindow: 8;
    doubleAces: number;
    dragonTakedowns: number;
    earlyLaningPhaseGoldExpAdvantage: number;
    effectiveHealAndShielding: number;
    elderDragonKillsWithOpposingSoul: number;
    elderDragonMultikills: number;
    enemyChampionImmobilizations: 7;
    enemyJungleMonsterKills: number;
    epicMonsterKillsNearEnemyJungler: number;
    epicMonsterKillsWithin30SecondsOfSpawn: number;
    epicMonsterSteals: number;
    epicMonsterStolenWithoutSmite: number;
    firstTurretKilled: number;
    flawlessAces: number;
    fullTeamTakedown: 2;
    gameLength: 1405.9555833;
    getTakedownsInAllLanesEarlyJungleAsLaner: number;
    goldPerMinute: 295.88659353427033;
    hadOpenNexus: number;
    immobilizeAndKillWithAlly: 2;
    initialBuffCount: number;
    initialCrabCount: number;
    jungleCsBefore10Minutes: number;
    junglerTakedownsNearDamagedEpicMonster: number;
    kTurretsDestroyedBeforePlatesFall: number;
    kda: 0.8571428571428571;
    killAfterHiddenWithAlly: number;
    killParticipation: 0.4;
    killedChampTookFullTeamDamageSurvived: number;
    killingSprees: number;
    killsNearEnemyTurret: number;
    killsOnOtherLanesEarlyJungleAsLaner: number;
    killsOnRecentlyHealedByAramPack: number;
    killsUnderOwnTurret: 1;
    killsWithHelpFromEpicMonster: number;
    knockEnemyIntoTeamAndKill: number;
    landSkillShotsEarlyGame: 2;
    laneMinionsFirst10Minutes: 47;
    laningPhaseGoldExpAdvantage: number;
    legendaryCount: number;
    lostAnInhibitor: number;
    maxCsAdvantageOnLaneOpponent: 11;
    maxKillDeficit: number;
    maxLevelLeadLaneOpponent: 1;
    mejaisFullStackInTime: number;
    moreEnemyJungleThanOpponent: number;
    multiKillOneSpell: number;
    multiTurretRiftHeraldCount: number;
    multikills: number;
    multikillsAfterAggressiveFlash: number;
    outerTurretExecutesBefore10Minutes: number;
    outnumberedKills: number;
    outnumberedNexusKill: number;
    perfectDragonSoulsTaken: number;
    perfectGame: number;
    pickKillWithAlly: 4;
    playedChampSelectPosition: 1;
    poroExplosions: number;
    quickCleanse: number;
    quickFirstTurret: number;
    quickSoloKills: number;
    riftHeraldTakedowns: number;
    saveAllyFromDeath: number;
    scuttleCrabKills: 1;
    skillshotsDodged: 44;
    skillshotsHit: 10;
    snowballsHit: number;
    soloBaronKills: number;
    soloKills: number;
    stealthWardsPlaced: 3;
    survivedSingleDigitHpCount: number;
    survivedThreeImmobilizesInFight: number;
    takedownOnFirstTurret: number;
    takedowns: 6;
    takedownsAfterGainingLevelAdvantage: number;
    takedownsBeforeJungleMinionSpawn: number;
    takedownsFirstXMinutes: number;
    takedownsInAlcove: number;
    takedownsInEnemyFountain: number;
    teamBaronKills: number;
    teamDamagePercentage: 0.10271254613500441;
    teamElderDragonKills: number;
    teamRiftHeraldKills: 1;
    tookLargeDamageSurvived: number;
    turretPlatesTaken: number;
    turretTakedowns: number;
    turretsTakenWithRiftHerald: number;
    twentyMinionsIn3SecondsCount: 5;
    twoWardsOneSweeperCount: number;
    unseenRecalls: number;
    visionScoreAdvantageLaneOpponent: 4.618597030639648;
    visionScorePerMinute: 0.8423169749976056;
    wardTakedowns: number;
    wardTakedownsBefore20M: number;
    wardsGuarded: number;
  };
  champExperience: number;
  champLevel: number;
  championId: number;
  championName: string;
  championTransform: number;
  commandPings: number;
  consumablesPurchased: number;
  damageDealtToBuildings: number;
  damageDealtToObjectives: number;
  damageDealtToTurrets: number;
  damageSelfMitigated: number;
  dangerPings: number;
  deaths: number;
  detectorWardsPlaced: number;
  doubleKills: number;
  dragonKills: number;
  eligibleForProgression: true;
  enemyMissingPings: number;
  enemyVisionPings: number;
  firstBloodAssist: false;
  firstBloodKill: false;
  firstTowerAssist: false;
  firstTowerKill: false;
  gameEndedInEarlySurrender: false;
  gameEndedInSurrender: false;
  getBackPings: number;
  goldEarned: number;
  goldSpent: number;
  holdPings: number;
  individualPosition: TeamPosition;
  inhibitorKills: number;
  inhibitorTakedowns: number;
  inhibitorsLost: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  itemsPurchased: number;
  killingSprees: number;
  kills: number;
  lane: TeamPosition;
  largestCriticalStrike: number;
  largestKillingSpree: number;
  largestMultiKill: number;
  longestTimeSpentLiving: number;
  magicDamageDealt: number;
  magicDamageDealtToChampions: number;
  magicDamageTaken: number;
  needVisionPings: number;
  neutralMinionsKilled: number;
  nexusKills: number;
  nexusLost: number;
  nexusTakedowns: number;
  objectivesStolen: number;
  objectivesStolenAssists: number;
  onMyWayPings: number;
  participantId: number;
  pentaKills: number;
  perks: {
    statPerks: {
      defense: 5002;
      flex: 5008;
      offense: 5005;
    };
    styles: [
      {
        description: "primaryStyle";
        selections: [
          {
            perk: 8010;
            var1: 55;
            var2: number;
            var3: number;
          },
          {
            perk: 9111;
            var1: 436;
            var2: 120;
            var3: number;
          },
          {
            perk: 9104;
            var1: 21;
            var2: number;
            var3: number;
          },
          {
            perk: 8299;
            var1: 263;
            var2: number;
            var3: number;
          }
        ];
        style: 8000;
      },
      {
        description: "subStyle";
        selections: [
          {
            perk: 8473;
            var1: 805;
            var2: number;
            var3: number;
          },
          {
            perk: 8242;
            var1: 53;
            var2: number;
            var3: number;
          }
        ];
        style: 8400;
      }
    ];
  };
  physicalDamageDealt: number;
  physicalDamageDealtToChampions: number;
  physicalDamageTaken: number;
  placement: number;
  playerAugment1: number;
  playerAugment2: number;
  playerAugment3: number;
  playerAugment4: number;
  playerSubteamId: number;
  profileIcon: number;
  pushPings: number;
  puuid: string;
  quadraKills: number;
  riotIdName: string;
  riotIdTagline: string;
  role: string;
  sightWardsBoughtInGame: number;
  spell1Casts: number;
  spell2Casts: number;
  spell3Casts: number;
  spell4Casts: number;
  subteamPlacement: number;
  summoner1Casts: number;
  summoner1Id: number;
  summoner2Casts: number;
  summoner2Id: number;
  summonerId: string;
  summonerLevel: number;
  summonerName: string;
  teamEarlySurrendered: false;
  teamId: number;
  teamPosition: TeamPosition;
  timeCCingOthers: number;
  timePlayed: number;
  totalAllyJungleMinionsKilled: number;
  totalDamageDealt: number;
  totalDamageDealtToChampions: number;
  totalDamageShieldedOnTeammates: number;
  totalDamageTaken: number;
  totalEnemyJungleMinionsKilled: number;
  totalHeal: number;
  totalHealsOnTeammates: number;
  totalMinionsKilled: number;
  totalTimeCCDealt: number;
  totalTimeSpentDead: number;
  totalUnitsHealed: number;
  tripleKills: number;
  trueDamageDealt: number;
  trueDamageDealtToChampions: number;
  trueDamageTaken: number;
  turretKills: number;
  turretTakedowns: number;
  turretsLost: number;
  unrealKills: number;
  visionClearedPings: number;
  visionScore: number;
  visionWardsBoughtInGame: number;
  wardsKilled: number;
  wardsPlaced: number;
  win: boolean;
}
