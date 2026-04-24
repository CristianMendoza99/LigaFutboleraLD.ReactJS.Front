import { useEffect, useState } from 'react'
import { StandingsTable } from '../components/StandingsTable'
import type { StandingEntry } from '../interfaces/standing'
import { tablaPosiciones } from '../mocks/standingsMocks'

export function HomePage() {
  const [tablaPosiciones, setTablaPosiciones] = useState<StandingEntry[]>([])
  const [equipoLocal, setEquipoLocal] = useState<{equipo: string, goles: number }>({equipo: "", goles: 0})
  const [equipoVisitante, setEquipoVisitante] = useState<{equipo: string, goles: number }>({equipo: "", goles: 0})

  const handleChangeEquipoLocal = (event: any) => {
    setEquipoLocal({ equipo: event.target.value, goles: equipoLocal.goles })
  }
  const handleChangeEquipoLocalGoles = (event: any) => {
    setEquipoLocal({ goles: Number(event.target.value), equipo: equipoLocal.equipo })
  }
  
  const handleChangeEquipoVisitante = (event: any) => {
    setEquipoVisitante({ equipo: event.target.value, goles: equipoVisitante.goles })
  }
  const handleChangeEquipoVisitanteGoles = (event: any) => {
    setEquipoVisitante({ goles: Number(event.target.value), equipo: equipoVisitante.equipo })
  }
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const hayEmpate = Number(equipoLocal.goles) === Number(equipoVisitante.goles)
    const equipoGanador: {equipo: string, goles: number } | string = equipoLocal.goles > equipoVisitante.goles
      ? equipoLocal
      : equipoVisitante

    console.log({equipoLocal, equipoVisitante});
    
    const nueveTablaResultados = tablaPosiciones.map(equipo => {
      if (equipo.equipo === equipoLocal.equipo || equipo.equipo === equipoVisitante.equipo) {
        console.log(equipo.golesAFavor, Number(equipoLocal.goles));
        
        return {
          ...equipo,
          golesAFavor: equipo.golesAFavor + Number(equipoLocal.goles),
          golesEnContra: equipo.golesEnContra + Number(equipoLocal.goles),
          puntos: hayEmpate 
            ? equipo.puntos + 1 
            : equipoGanador.equipo === equipo.equipo
              ? equipo.puntos + 3 
              : equipo.puntos
        }
      }

      return equipo
    })
    setTablaPosiciones(nueveTablaResultados);
    
  }

  useEffect(() => {
    const getTablaPosiciones = async () => {
      const response = await fetch('https://mocki.io/v1/4bc26da4-0325-4ba9-a488-9e5472f97cfa')
      const data = await response.json()
      const results: StandingEntry[] = data.results
      const tablaOrdenada = results.sort((a, b) => {
        if (b.puntos === a.puntos) {
          if (b.golesAFavor === a.golesAFavor) {
            return b.partidosJugados - a.partidosJugados
          }
          return b.golesAFavor - a.golesAFavor
        }
        return b.puntos - a.puntos
      })
      setTablaPosiciones(tablaOrdenada);
      setEquipoLocal({ equipo: tablaOrdenada[0].equipo, goles: 0 })
    }
    getTablaPosiciones()
  }, [])

  return (
    <section className="standings-page">
      <article className="table-card">
        <header className="table-card-header">
          <h2>Tabla de posiciones - Liga Futbolera LD </h2>
         
          <form onSubmit={handleSubmit}>
            <div>
              <label>Equipo Local</label>
              <select value={equipoLocal.equipo} onChange={handleChangeEquipoLocal}>
                {
                  tablaPosiciones.map(equipo => (
                    <option value={equipo.equipo}>{equipo.equipo}</option>
                  ))
                }
              </select>
            </div>
            <div>
              <label>Goles Equipo Local</label>
              <input type="number" value={equipoLocal.goles} onChange={handleChangeEquipoLocalGoles} />
            </div>
            <div>
              <label>Equipo Visitante</label>
              <select value={equipoVisitante.equipo} onChange={handleChangeEquipoVisitante}>
                {
                  tablaPosiciones.map(equipo => (
                    <option value={equipo.equipo}>{equipo.equipo}</option>
                  ))
                }
              </select>
            </div>
            <div>
              <label>Goles Equipo Visitante</label>
              <input type="number" value={equipoVisitante.goles} onChange={handleChangeEquipoVisitanteGoles} />
            </div>
            <button>Agregar resultado</button>
          </form>
        </header>

        <StandingsTable standings={tablaPosiciones} />
      </article>
    </section>
  )
}