import CustomTable from "@/components/CustomTable";
import {URLS} from "@/constants/sheet";
import api from "@/lib/api";

export default async function PayersPage() {
  const groupA = await api.players.list(URLS.groups.urlA);
  const groupB = await api.players.list(URLS.groups.urlB);

  return (
    <div className="grid grid-cols-1 gap-6">
      <CustomTable players={groupA} title="Grupo A" />
      <CustomTable players={groupB} title="Grupo B" />
    </div>
  );
}
