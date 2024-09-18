import {Match} from "@/types";

const api = {
  match: {
    list: async (): Promise<Match[]> => {
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
};

export default api;
