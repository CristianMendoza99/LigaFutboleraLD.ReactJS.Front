import { StandingsTable } from '../components/StandingsTable'
import { tablaPosiciones } from '../mocks/standingsMocks'
import React, { useState, useEffect } from 'react';

// Interfaz que coincide con la respuesta del endpoint
interface Equipo {
  id: number;
  equipo: string;
  escudo: string;
  partidosJugados: number;
  golesAFavor: number;
  golesEnContra: number;
  puntos: number;
}

export function HomePage() {
  const [standings, setStandings] = useState<Equipo[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        setLoading(true)
        // Reemplaza por la URL real de tu API
        const response = await fetch('https://mocki.io/v1/0dfc72b4-3b7d-4147-bf91-81528d87b7d4')

        if (!response.ok) {
          throw new Error(`Error en la petición: ${response.status}`)
        }

    const data = await response.json()

        const listaEquipos: Equipo[] = Array.isArray(data) ? data : data.data || []

        // Funciones auxiliares para parsear números de forma segura
        const obtenerPuntos = (item: any): number => {
          const valor = item?.puntos ?? item?.Puntos ?? 0
          const numero = parseInt(valor, 10)
          return isNaN(numero) ? 0 : numero
        }

        const obtenerGolesAFavor = (item: any): number => {
          const valor = item?.golesAFavor ?? item?.GolesAFavor ?? 0
          const numero = parseInt(valor, 10)
          return isNaN(numero) ? 0 : numero
        }

        const obtenerPartidosJugados = (item: any): number => {
          const valor = item?.partidosJugados ?? item?.PartidosJugados ?? 0
          const numero = parseInt(valor, 10)
          return isNaN(numero) ? 0 : numero
        }

        // Ordenamiento con triple criterio
        const sortedData = [...listaEquipos].sort((a, b) => {
          const puntosA = obtenerPuntos(a)
          const puntosB = obtenerPuntos(b)

          // 1. Criterio primario: Puntos descendente (mayor a menor)
          if (puntosB !== puntosA) {
            return puntosB - puntosA
          }

          // 2. Criterio secundario: Goles a favor ascendente (menor a mayor)
          const gfA = obtenerGolesAFavor(a)
          const gfB = obtenerGolesAFavor(b)

          if (gfA !== gfB) {
            return gfA - gfB
          }

          // 3. Criterio terciario: Partidos jugados ascendente (menor a mayor)
          const pjA = obtenerPartidosJugados(a)
          const pjB = obtenerPartidosJugados(b)

          return pjA - pjB
        })

        setStandings(sortedData)
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al obtener las posiciones')
      } finally {
        setLoading(false)
      }
    }

    fetchStandings()
  }, [])

  return (
    <section className="standings-page">
      <article className="table-card">
        <header className="table-card-header">
          <h2>Tabla de posiciones - Liga Futbolera LD</h2>
        </header>

        {loading && <p className="loading-message">Cargando posiciones...</p>}
        {error && <p className="error-message">Error: {error}</p>}

        {!loading && !error && (
          <StandingsTable standings={standings} />
        )}
      </article>
    </section>
  )
}