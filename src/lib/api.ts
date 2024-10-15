import {Players} from "@/types";

function cleanString(input: string) {
  return input.replace(/\r/g, "");
}

interface GroupedTeams {
  group: string;
  teams: Players[];
}

const api = {
  players: {
    list: async (url: string): Promise<GroupedTeams[]> => {
      return fetch(url, {
        next: {tags: ["matches"]},
      })
        .then((res) => res.text())
        .then((text) => {
          const players: Players[] = text
            .split("\n")
            .slice(1)
            .map((row) => {
              const [
                teamId,
                player1,
                player2,
                matchesPlayed,
                matchesWon,
                matchesLost,
                pointsInFavor,
                pointsAgainst,
                points,
                group,
              ] = row.split("\t");

              return {
                teamId: parseInt(teamId),
                player1,
                player2,
                matchesPlayed: parseInt(matchesPlayed),
                matchesWon: parseInt(matchesWon),
                matchesLost: parseInt(matchesLost),
                points: parseInt(points),
                pointsInFavor: parseInt(pointsInFavor),
                pointsAgainst: parseInt(pointsAgainst),
                group: cleanString(group),
              };
            });

          const groupedTeams: GroupedTeams[] = players.reduce(
            (acc: GroupedTeams[], team: Players) => {
              const group = acc.find((g) => g.group === team.group);

              if (group) {
                group.teams.push(team);
              } else {
                acc.push({group: team.group, teams: [team]});
              }

              return acc;
            },
            [],
          );

          groupedTeams.forEach((group) => {
            group.teams.sort((a, b) => {
              if (b.points === a.points) {
                if (b.pointsInFavor === a.pointsInFavor) {
                  return a.pointsAgainst - b.pointsAgainst;
                }

                return b.pointsInFavor - a.pointsInFavor;
              }

              return b.points - a.points;
            });
          });

          return groupedTeams;
        });
    },
  },
};

export default api;
