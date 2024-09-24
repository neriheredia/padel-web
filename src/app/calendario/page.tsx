import api from "@/lib/api";
import CustomCalendar from "@/components/CustomCalendar";
import {URLS} from "@/constants/sheet";

export default async function CalendarioPage() {
  const calendarGroupA = await api.calendar.list(URLS.calendar.urlA);
  const calendarGroupB = await api.calendar.list(URLS.calendar.urlB);

  return (
    <div className="grid grid-cols-1 gap-6">
      <CustomCalendar calendar={calendarGroupA} title="Calendario Grupo A" />
      <CustomCalendar calendar={calendarGroupB} title="Calendario Grupo B" />
    </div>
  );
}
