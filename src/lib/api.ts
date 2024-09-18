import {Calendar, General, Players} from "@/types";

const api = {
  players: {
    list: async (): Promise<Players[]> => {
      return fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQacrJb-AieSJ1VpQOWJb9vFnwHOAAf0qN-Yp8pDhH4x37nTWuM3YlWru9shfpR0ZprzbZjwrsxwJee/pub?gid=0&single=true&output=tsv",
        {
          next: {tags: ["matches"]},
        },
      )
        .then((res) => res.text())
        .then((text) => {
          return text
            .split("\n")
            .slice(1)
            .map((row) => {
              const [teamId, player1, player2, matchesPlayed, matchesWon, matchesLost, points] =
                row.split("\t");

              return {
                teamId: parseInt(teamId),
                player1,
                player2,
                matchesPlayed: parseInt(matchesPlayed),
                matchesWon: parseInt(matchesWon),
                matchesLost: parseInt(matchesLost),
                points: parseInt(points),
              };
            });
        });
    },
  },

  calendar: {
    list: async (): Promise<Calendar[]> => {
      return fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQacrJb-AieSJ1VpQOWJb9vFnwHOAAf0qN-Yp8pDhH4x37nTWuM3YlWru9shfpR0ZprzbZjwrsxwJee/pub?gid=19406315&single=true&output=tsv",
        {
          next: {tags: ["matches"]},
        },
      )
        .then((res) => res.text())
        .then((text) => {
          return text
            .split("\n")
            .slice(1)
            .map((row) => {
              const [date, team1, team2, setsWon1, setsWon2, results, winner, points1, points2] =
                row.split("\t");

              return {
                date,
                team1: parseInt(team1),
                team2: parseInt(team2),
                setsWon1: parseInt(setsWon1),
                setsWon2: parseInt(setsWon2),
                results,
                winner: parseInt(winner),
                points1: parseInt(points1),
                points2: parseInt(points2),
              };
            });
        });
    },
  },
  general: {
    list: async (): Promise<General[]> => {
      const playersList = await api.players.list();

      return fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQacrJb-AieSJ1VpQOWJb9vFnwHOAAf0qN-Yp8pDhH4x37nTWuM3YlWru9shfpR0ZprzbZjwrsxwJee/pub?gid=277141680&single=true&output=tsv",
        {
          next: {tags: ["matches"]},
        },
      )
        .then((res) => res.text())
        .then((text) => {
          return text
            .split("\n")
            .slice(1)
            .map((row) => {
              const [position, team, points, games, gamesWin] = row.split("\t");

              const teamPlayers = playersList.find((p) => Number(p.teamId) === Number(team));

              return {
                position: parseInt(position),
                team: parseInt(team),
                points: parseInt(points),
                games: parseInt(games),
                gamesWin: parseInt(gamesWin),
                player1: teamPlayers?.player1 || "",
                player2: teamPlayers?.player2 || "",
              };
            });
        });
    },
  },
};

export default api;
