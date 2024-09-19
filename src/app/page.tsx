import Link from "next/link";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="container mx-auto mt-8 px-4">
      <section className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold">Bienvenidos a la Liga Bialet Masset</h2>
        <p className="text-xl text-gray-400">La mejor liga de pádel de la región</p>
      </section>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="border-gray-800 bg-gray-900">
          <CardHeader>
            <CardTitle>Próximo Partido</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-lg">Equipo A vs Equipo B</p>
            <p className="text-sm text-gray-400">Sábado, 15 de Julio - 18:00</p>
          </CardContent>
        </Card>

        <Card className="border-gray-800 bg-gray-900">
          <CardHeader>
            <CardTitle>Líder Actual</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-lg">Reyna Emmanuel / Sánchez Gastón</p>
            <p className="text-sm text-gray-400">6 puntos</p>
          </CardContent>
        </Card>

        <Card className="border-gray-800 bg-gray-900">
          <CardHeader>
            <CardTitle>Estadísticas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-lg">11 Equipos</p>
            <p className="text-sm text-gray-400">22 Jugadores participantes</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <Link href="/general">
          <Button className="bg-white text-black hover:bg-gray-200" variant="outline">
            Ver Tabla Completa
          </Button>
        </Link>
      </div>
    </main>
  );
}
