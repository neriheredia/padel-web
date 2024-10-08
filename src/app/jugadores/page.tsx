import CustomTable from "@/components/CustomTable";
import {URLS} from "@/constants/sheet";
import api from "@/lib/api";
import {Players} from "@/types";

interface GroupedTeams {
  group: string;
  teams: Players[];
}

export default async function PayersPage() {
  const groupA: Players[] = await api.players.list(URLS.groups.urlA);

  const groupedTeams: GroupedTeams[] = groupA.reduce((acc: GroupedTeams[], team: Players) => {
    const group = acc.find((g) => g.group === team.group);

    if (group) {
      group.teams.push(team);
    } else {
      acc.push({group: team.group, teams: [team]});
    }

    return acc;
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6">
      {groupedTeams.map(({group, teams}) => (
        <CustomTable key={group} players={teams} title={`Grupo ${group}`} />
      ))}
    </div>
  );
}
