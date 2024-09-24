import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {General} from "@/types";

function CustomGeneral({general, title}: {general: General[]; title: string}) {
  return (
    <div className="m-auto mb-4 max-w-5xl text-xl font-bold">
      <h1 className="m-auto mb-4 max-w-5xl text-xl font-bold">{title}</h1>
      <Table className="border">
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
    </div>
  );
}

export default CustomGeneral;
