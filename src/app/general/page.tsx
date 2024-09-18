import api from "@/lib/api";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

export default async function CalendarPage() {
  const general = await api.general.list();

  return (
    <Table className="m-auto max-w-4xl border">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-center">Posición</TableHead>
          <TableHead className="w-[100px] text-center">Equipo</TableHead>
          <TableHead className="w-[100px] text-center">Jugadores</TableHead>
          <TableHead className="w-[100px] text-center">Puntos</TableHead>
          <TableHead className="w-[100px] text-center">PJ</TableHead>
          <TableHead className="w-[100px] text-center">PG</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {general.map(({games, gamesWin, points, position, team, player1, player2}) => (
          <TableRow key={position}>
            <TableCell className="text-center">{position}</TableCell>
            <TableCell className="text-center">{team}</TableCell>
            <TableCell className="text-center">{`${player1} - ${player2}`}</TableCell>
            <TableCell className="text-center">{points}</TableCell>
            <TableCell className="text-center">{games}</TableCell>
            <TableCell className="text-center">{gamesWin}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
