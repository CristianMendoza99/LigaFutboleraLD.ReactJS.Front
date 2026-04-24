# Liga Futbolera

Base para una prueba tecnica en React + TypeScript + Vite enfocada en una tabla de posiciones de futbol. El proyecto queda completamente mockeado desde la carpeta `mocks`.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Estructura sugerida

```text
src/
  components/
    StandingsTable.tsx
    StatusPanel.tsx
    TeamBadge.tsx
  interfaces/
    standing.ts
  lang/
    standings.ts
  pages/
    HomePage.tsx
  mocks/
    standingsMocks.ts
  stores/
  utils/
    buildStandingsTable.ts
  App.tsx
  App.css
  index.css
  main.tsx
```

## Flujo de datos

1. La pagina importa `tablaPosiciones` desde `src/mocks/standingsMocks.ts`.
2. `buildStandingsTable` ordena la informacion y calcula posicion y diferencia de gol.
3. `StandingsTable` renderiza la clasificacion final.

## Datos mock incluidos

La data base del ejercicio vive en `src/mocks/standingsMocks.ts` y usa este shape:

```ts
{
  id: number
  equipo: string
  escudo: string
  partidosJugados: number
  golesAFavor: number
  golesEnContra: number
  puntos: number
}
```
