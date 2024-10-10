import CustomTable from "@/components/CustomTable";
import {URLS} from "@/constants/sheet";
import api from "@/lib/api";

export default async function PayersPage() {
  const groupedTeams = await api.players.list(URLS.groups.urlA);

  return (
    <div className="grid grid-cols-1 gap-6">
      {groupedTeams.map(({group, teams}) => (
        <CustomTable key={group} players={teams} title={`Grupo ${group}`} />
      ))}
    </div>
  );
}
