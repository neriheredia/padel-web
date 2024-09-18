import api from "@/lib/api";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {cn} from "@/lib/utils";

export default async function PayersPage() {
  const players = await api.players.list();

  return (
    <Table className="border">
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
        {players.map(
          ({teamId, player1, player2, matchesLost, matchesPlayed, points, matchesWon}) => (
            <TableRow key={teamId}>
              <TableCell className="text-center">{teamId}</TableCell>
              <TableCell className="text-center">{player1}</TableCell>
              <TableCell className="text-center">{player2}</TableCell>
              <TableCell className="text-center">{matchesPlayed}</TableCell>
              <TableCell className="text-center">{matchesWon}</TableCell>
              <TableCell className="text-center">{matchesLost}</TableCell>
              <TableCell className="text-center">{points}</TableCell>
            </TableRow>
          ),
        )}
      </TableBody>
    </Table>
  );
}
