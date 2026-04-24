# Liga Futbolera

Bienvenido a la Liga Futbolera LD.

Este proyecto representa la tabla de posiciones de la liga interna de la compania, un espacio en el que multiples participantes compiten jornada a jornada para demostrar quien manda en la cancha. La idea es mostrar de forma clara y atractiva como va el torneo, que equipos suman mas puntos y como se mueve la clasificacion entre colaboradores.

La base esta construida en React + TypeScript + Vite y actualmente trabaja con informacion mockeada desde la carpeta `mocks`, ideal para una prueba tecnica o para evolucionarla despues segun las necesidades del negocio.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Estructura

```text
src/
  components/
    escudos/
    StandingsTable.tsx
    TeamBadge.tsx
  config/
  hooks/
  interfaces/
    standing.ts
  mocks/
    standingsMocks.ts
  pages/
    HomePage.tsx
  services/
  stores/
  utils/
  App.tsx
  App.css
  index.css
  main.tsx
```

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
