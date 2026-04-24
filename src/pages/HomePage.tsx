import { StandingsTable } from '../components/StandingsTable'
import { tablaPosiciones } from '../mocks/standingsMocks'

export function HomePage() {
  return (
    <section className="standings-page">
      <article className="table-card">
        <header className="table-card-header">
          <h2>Tabla de posiciones - Liga Futbolera LD </h2>
         
        </header>

        <StandingsTable standings={tablaPosiciones} />
      </article>
    </section>
  )
}