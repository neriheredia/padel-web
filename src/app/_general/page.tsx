import CustomGeneral from "@/components/CustomGeneral";
import {URLS} from "@/constants/sheet";
import api from "@/lib/api";

export default async function CalendarPage() {
  const generalA = await api.general.list({
    url: URLS.general.urlA,
    type: "A",
  });

  const generalB = await api.general.list({
    url: URLS.general.urlB,
    type: "B",
  });

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <CustomGeneral general={generalA} title="Tabla General A" />
      <CustomGeneral general={generalB} title="Tabla General B" />
    </div>
  );
}
