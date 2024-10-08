import {Table, TableHead, TableHeader, TableRow} from "@/components/ui/table";

const stages = [
  {
    title: "Cuartos de Final",
    matches: [
      ["Equipo A", "Equipo B"],
      ["Equipo C", "Equipo D"],
      ["Equipo E", "Equipo F"],
      ["Equipo G", "Equipo H"],
    ],
  },
  {
    title: "Semifinales",
    matches: [
      ["Ganador 1", "Ganador 2"],
      ["Ganador 3", "Ganador 4"],
    ],
  },
  {title: "Final", matches: [["Ganador Semifinal 1", "Ganador Semifinal 2"]]},
];

export default async function HomePage() {
  return (
    <main className="container mx-auto mt-8 px-4">
      <section className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold">Bienvenidos a la Liga Bialet Masset</h2>
        <p className="text-xl text-gray-400">La mejor liga de pádel de la región</p>
      </section>

      {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="border-gray-800 bg-gray-900">
          <CardHeader>
            <CardTitle>Líder Actual</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-lg">
              Grupo A - Equipo: {data.groupA.team} - {`pts(${data.groupA.points})`}
            </p>
            <p className="text-sm text-gray-400">{data.groupA.players}</p>
          </CardContent>
        </Card>

        <Card className="border-gray-800 bg-gray-900">
          <CardHeader>
            <CardTitle>Líder Actual</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-lg">
              Grupo B - Equipo: {data.groupB.team} - {`pts(${data.groupB.points})`}
            </p>
            <p className="text-sm text-gray-400">{data.groupB.players}</p>
          </CardContent>
        </Card>
      </div> */}

      {/* <div className="mt-12 text-center">
        <Link href="/general">
          <Button className="bg-white text-black hover:bg-gray-200" variant="outline">
            Ver Tabla Completa
          </Button>
        </Link>
      </div> */}
      <div className="grid grid-cols-1 gap-8">
        {stages.map((stage, stageIdx) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={stageIdx}>
            <h2 className="mb-4 text-lg font-bold">{stage.title}</h2>
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Equipo 1</TableHead>
                  <TableHead>Equipo 2</TableHead>
                  <TableHead className="text-center">Resultado</TableHead>
                </TableRow>
              </TableHeader>
              {/* <TableBody>
                {stage.matches.map(([team1, team2], matchIdx) => (
                  <TableRow key={matchIdx}>
                    <TableCell>{team1}</TableCell>
                    <TableCell>{team2}</TableCell>
                    <TableCell className="text-center">
                      <input className="w-16 border text-center" placeholder="0 - 0" type="text" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody> */}
            </Table>
          </div>
        ))}
      </div>
    </main>
  );
}
