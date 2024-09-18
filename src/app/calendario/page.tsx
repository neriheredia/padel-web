import api from "@/lib/api";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

export default async function CalendarioPage() {
  const calendar = await api.calendar.list();

  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Fecha</TableHead>
          <TableHead className="text-center">Equipo 1</TableHead>
          <TableHead className="text-center">Equipo 2</TableHead>
          <TableHead className="text-center">Sets Equipo 1</TableHead>
          <TableHead className="text-center">Sets Equipo 2</TableHead>
          <TableHead className="text-center">Resultado</TableHead>
          <TableHead className="text-center">Ganador</TableHead>
          <TableHead className="text-center">Puntos Equipo 1</TableHead>
          <TableHead className="text-center">Puntos Equipo 2</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {calendar.map(
          ({date, points1, points2, results, setsWon1, setsWon2, team1, team2, winner}) => (
            <TableRow key={date}>
              <TableCell className="text-center">{date}</TableCell>
              <TableCell className="text-center">{team1}</TableCell>
              <TableCell className="text-center">{team2}</TableCell>
              <TableCell className="text-center">{setsWon1}</TableCell>
              <TableCell className="text-center">{setsWon2}</TableCell>
              <TableCell className="text-center">{results}</TableCell>
              <TableCell className="text-center">{winner}</TableCell>
              <TableCell className="text-center">{points1}</TableCell>
              <TableCell className="text-center">{points2}</TableCell>
            </TableRow>
          ),
        )}
      </TableBody>
    </Table>
  );
}
