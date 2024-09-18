import api from "@/lib/api";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {cn} from "@/lib/utils";

export default async function HomePage() {
  const matches = await api.match.list();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Equipo</TableHead>
          <TableHead>Juagador 1</TableHead>
          <TableHead>Juagador 2</TableHead>
          <TableHead>Partidos Jugados</TableHead>
          <TableHead>Partidos Ganados</TableHead>
          <TableHead>Partidos Perdidos</TableHead>
          <TableHead className="text-right">Puntos</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {matches.map(
          ({teamId, player1, player2, matchesLost, matchesPlayed, points, matchesWon}) => (
            <TableRow key={teamId}>
              <TableCell>{teamId}</TableCell>
              <TableCell>{player1}</TableCell>
              <TableCell>{player2}</TableCell>
              <TableCell className={cn("text-center font-bold text-yellow-500")}>
                {matchesPlayed}
              </TableCell>
              <TableCell className={cn("text-center font-bold text-green-500")}>
                {matchesWon}
              </TableCell>
              <TableCell className={cn("text-center font-bold text-red-500")}>
                {matchesLost}
              </TableCell>
              <TableCell className={cn("text-center font-bold text-blue-500")}>{points}</TableCell>
            </TableRow>
          ),
        )}
      </TableBody>
    </Table>
  );
}
