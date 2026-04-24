# Tema: Gestión de Tabla de Posiciones ⚽


## 🎯 Objetivo

Implementar mejoras para la liga futbolera LD.

Desarrollar las soluciones necesarias para que la tabla de la liga tenga sentido.

El enfoque está en:

- Consumo de APIs
- Manejo de estado
- Lógica de negocio
- Actualización dinámica de UI

---

# 🧩 Primera parte: Tabla de posiciones

## 📌 Requerimientos

### 🔌 Consumo de datos

- Reemplazar los datos mockeados por el consumo de la API: 

https://mocki.io/v1/4bc26da4-0325-4ba9-a488-9e5472f97cfa
- La tabla debe renderizarse con los datos obtenidos.

---

### 🔽 Ordenamiento

- Ordenar la tabla por **mayor puntaje (descendente)**.

---

### ➕ Agregar resultado

Implementar una acción para registrar un nuevo resultado:

El usuario debe poder :

- Seleccionar equipo local (select alimentado por el mismo servicio)
- Seleccionar equipo visitante (select alimentado por el mismo servicio)
- Ingresar goles de cada equipo (2 Campos numéricos)

---

### ⚙️ Lógica de negocio

Al registrar un resultado:

- Incrementar **partidos jugados** para ambos equipos
- Actualizar:
  - goles a favor
  - goles en contra
  - puntos

#### 🏆 Puntos

- Victoria → +3 puntos al ganador
- Empate → +1 punto a cada equipo
- Derrota → 0 puntos

---

### 🔄 Actualización dinámica

- La tabla debe actualizarse automáticamente con cada nuevo resultado
- Debe mantenerse ordenada por puntos

---

### 🎨 Estilos

- Mostrar:
  - **Goles a favor en color verde**
  - **Goles en contra en color rojo**

---

### 🚫 Restricción

- Un equipo **no puede jugar más de 10 partidos**
- Debe validarse antes de registrar el resultado

---

# 🧩 Segunda parte: Estadísticas

## 📌 Requerimiento

Crear un componente llamado `Statistics`.

---

## 📊 Debe mostrar

### ⚽ Equipo más goleador

- Equipo con más goles a favor  
- Mostrar:
  - Nombre del equipo  
  - Cantidad de goles  
- Estilo:
  - Color verde en cantidad de goles  

---

### 🥅 Equipo más goleado

- Equipo que recibió más goles (goles en contra)  
- Mostrar:
  - Nombre del equipo  
  - Cantidad de goles  
- Estilo:
  - Color rojo en cantidad de goles

---

# 🧪 Evaluación

Se evaluará:

- Consumo correcto de API  
- Manejo de estado en React  
- Aplicación de lógica de negocio  
- Actualización dinámica de la UI  
- Ordenamiento de datos  
- Validaciones  
- Claridad y estructura del código  

---

# ⭐ Bonus (opcional)

- Persistencia en localStorage  
- Validaciones adicionales en el formulario  
- Implementar escudos de equipos desde /components/escudos  

---

**¡Buena suerte! 🚀**
