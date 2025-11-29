# README – Prueba Técnica (React + FastAPI)

Este proyecto implementa una solución Full Stack utilizando FastAPI (Python) para el backend y React con Vite para el frontend.  
Incluye una sección de transacciones, un dashboard financiero y la integración de un reporte externo de Business Intelligence (Looker Studio).

## Tecnologías que fueron utilizadas

### Backend
- Python 3.13.7  
- FastAPI  
- Uvicorn  
- Pydantic  
- CORS Middleware  

### Frontend
- React (Vite)  
- Functional Components  
- Hooks: `useState`, `useEffect`  
- Bootstrap (via CDN)  
- Estilos pastel 

### BI
- Looker Studio (reporte embebido)

## 📂 Estructura del Proyecto

Prueba/
│
├── backend/
│   ├── main.py
│   ├── venv/
│   └── ...
│
└── frontend/
    ├── index.html
    ├── src/
    │   ├── App.jsx
    │   ├── Transactions.jsx
    │   ├── Dashboard.jsx
    │   └── ...


# Paso #1. Backend – FastAPI

## Instalar dependencias

Desde la carpeta del backend/: (cd backend)

### Crear entorno virtual:
En la terminal: 
py -m venv venv

### Activar entorno (Windows PowerShell):

venv\Scripts\Activate.ps1

### Instalar FastAPI y Uvicorn:

py -m pip install fastapi uvicorn

## Ejecutamos el servidor

py -m uvicorn main:app --reload --port 8000

Backend se levanta y queda disponible en:

-> http://localhost:8000  
-> Swagger: http://localhost:8000/docs  

# Endpoints Disponibles

### POST /transactions  
Agrega una transacción.

### GET /transactions  
Lista transacciones.

### GET /transactions/summary  
Retorna resumen financiero.

### GET /transactions/summary_by_category
Totales por categoría.

# 2. Frontend – React (Vite)

## Instalar dependencias para node

npm install


## Ejecutar servidor de desarrollo

npm run dev

Frontend ya queda disponible en:

-> http://localhost:5173  

# 🧩 3. Funcionalidades

## Sección de Transacciones
- Formulario para crear transacciones  
- Tabla de transacciones  
- Cargando... mientras llegan datos  
- Usa POST y GET del backend  

## Sección Dashboard
- Usa GET /transactions/summary  
- Muestra ingreso, egreso, neto  
- Muestra “Cargando…”  
- Incluye Looker Studio con iframe  

# 4. URLs principales

| Servicio | URL |

Backend           http://localhost:8000 
Swagger Docs      http://localhost:8000/docs 
Frontend          http://localhost:5173 

# 5. CORS

Configuración incluida:

```python
allow_origins=["*"],
allow_methods=["*"],
allow_headers=["*"],
```

# 6. Build (opcional)

npm run build

Genera carpeta `/dist`.

# 7. Requisitos cumplidos

| Requisito       |   Estado  |

FastAPI                 ✔ 
Pydantic                ✔ 
Datos en memoria        ✔ 
CRUD                    ✔ 
Summary                 ✔ 
Summary por categoría   ✔ 
React con Hooks         ✔ 
Pestañas                ✔ 
Formulario + Tabla      ✔ 
“Cargando...”           ✔
Looker Studio           ✔ 
Bootstrap CDN           ✔ 


# 8. Conclusión

Este proyecto cumple todos los puntos especificados en la prueba técnica que se me dio:

- Backend funcional  
- Frontend moderno  
- Reporte BI embebido  
- Código simple y claro  

Listo para evaluación.  