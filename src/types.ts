export interface Players {
  teamId: number;
  player1: string;
  player2: string;
  matchesPlayed: number;
  matchesWon: number;
  matchesLost: number;
  pointsInFavor: number;
  pointsAgainst: number;
  points: number;
  group: string;
}

export interface Calendar {
  date: string;
  team1: number;
  team2: number;
  setsWon1: number;
  setsWon2: number;
  results: string;
  winner: number;
  points1: number;
  points2: number;
}

export interface General {
  position: number;
  team: number;
  points: number;
  games: number;
  gamesWin: number;
  player1: string;
  player2: string;
}

export interface Home {
  groupA: {
    personOne: string;
    personTwo: string;
  };
  groupB: {
    personOne: string;
    personTwo: string;
  };
}
