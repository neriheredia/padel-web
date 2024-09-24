import {URLS} from "@/constants/sheet";
import {Calendar, General, Players} from "@/types";

const api = {
  players: {
    list: async (url: string): Promise<Players[]> => {
      return fetch(url, {
        next: {tags: ["matches"]},
      })
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
    list: async (url: string): Promise<Calendar[]> => {
      return fetch(url, {
        next: {tags: ["matches"]},
      })
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
                team1: team1 === "-" ? 0 : parseInt(team1),
                team2: team2 === "-" ? 0 : parseInt(team2),
                setsWon1: parseInt(setsWon1),
                setsWon2: parseInt(setsWon2),
                results: String(results),
                winner: parseInt(winner),
                points1: parseInt(points1),
                points2: parseInt(points2),
              };
            });
        });
    },
  },
  general: {
    list: async ({url, type}: {url: string; type: string}): Promise<General[]> => {
      const group = type === "A" ? URLS.groups.urlA : URLS.groups.urlB;
      const playersList = await api.players.list(group);

      return fetch(url, {
        next: {tags: ["matches"]},
      })
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
  home: {
    groupsLiders: async () => {
      const generalA = await api.general.list({
        url: URLS.general.urlA,
        type: "A",
      });

      const generalB = await api.general.list({
        url: URLS.general.urlB,
        type: "B",
      });

      return {
        groupA: {
          team: generalA[0].team,
          points: generalA[0].points,
          players: `${generalA[0].player1} - ${generalA[0].player2}`,
        },
        groupB: {
          team: generalB[0].team,
          points: generalB[0].points,
          players: `${generalB[0].player1} - ${generalB[0].player2}`,
        },
      };
    },
  },
};

export default api;
