import type { StandingEntry } from '../interfaces/standing'
import { TeamBadge } from './TeamBadge'

interface StandingsTableProps {
  standings: StandingEntry[]
}

export function StandingsTable({ standings }: StandingsTableProps) {
  return (
    <div className="table-scroll">
      <table className="standings-table">
        <thead>
          <tr>
            <th scope="col">Pos</th>
            <th scope="col">Equipo</th>
            <th scope="col">PJ</th>
            <th scope="col">GF</th>
            <th scope="col">GC</th>
            <th scope="col">Pts</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((team, index) => (
            <tr key={team.id}>
              <td className="numeric-cell">
                <span className="position-pill">{index + 1}</span>
              </td>
              <td>
                <div className="team-cell">
                  <TeamBadge name={team.equipo} shieldUrl={team.escudo} />
                  <div>
                    <span className="team-name">{team.equipo}</span>
                    <span className="team-meta">{team.partidosJugados} partidos jugados</span>
                  </div>
                </div>
              </td>
              <td className="numeric-cell">{team.partidosJugados}</td>
              <td className="numeric-cell">{team.golesAFavor}</td>
              <td className="numeric-cell">{team.golesEnContra}</td>
              <td className="points-cell">{team.puntos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}