# Backlogs & Cronogramas

## Backlog General

| ID  | User Story / Funcionalidad                                                   | Prioridad | Entregable esperado                    |
|-----|------------------------------------------------------------------------------|-----------|----------------------------------------|
| B1  | Como estudiante, quiero que el sistema detecte errores ortográficos          | Alta      | Módulo de corrección                   |
| B2  | Como docente, quiero que el sistema sugiera mejoras de estilo académico      | Alta      | Módulo de sugerencias de estilo        |
| B3  | Como investigador, quiero verificar el formato de cita (APA, MLA, IEEE)      | Media     | Módulo de validación de referencias    |
| B4  | Como institución, quiero que el sistema detecte posibles plagios             | Alta      | Integración con detector de similitud  |
| B5  | Como usuario, quiero que el sistema sea fácil de usar e intuitivo            | Alta      | Interfaz gráfica amigable              |
| B6  | Como desarrollador, quiero contar con retroalimentación de pruebas de piloto | Media     | Reportes de pruebas con usuarios       |
| B7  | Como tutor, quiero conocer informes de avance del proyecto                   | Media     | Reportes técnicos y académicos         |
| B8  | Como institución, quiero que la herramienta sea adaptable a distintos idiomas| Baja      | Módulo multilingüe inicial             |


## Épicas y Historias (resumen)
- **EPIC01 - Carga y revisión básica**
  - HU01: Subir documento DOCX/PDF. (Criterio: aceptar DOCX/PDF)
  - HU02.1: Sugerencias errores gramaticales. (Detecta 5 tipos)
  - HU02.2: Sugerencias estilo y cohesión. (Reestructurar párrafos)

- **EPIC02 - Detección de plagio (futuro)**
  - HU03: Ver reporte de plagio.
  - HU04: Consultar fuentes similares.

- **EPIC03 - Seguimiento**
  - HU05: Acceder a historial.
  - HU06: Recomendaciones personalizadas.

- **EPIC04 - Gestión académica**
  - HU07: Crear assignments.
  - HU08: Ver reportes agregados.

## Planificación de Sprints (propuesta ajustada)
Basado en su planificación original (5 sprints con inicio/fin). Ajusto a fechas realistas partiendo hoy (03-Oct-2025) y considerando 12 semanas (iteración propuesta):

| Sprint | Inicio | Fin | Duración días | Objetivos principales |
|---:|---:|---:|---:|---|
| Sprint 1 | 03-Oct-2025 | 16-Oct-2025 | 14 | Infraestructura, repo, acta de constitución, endpoints básicos, subir archivos |
| Sprint 2 | 17-Oct-2025 | 30-Oct-2025 | 14 | Módulo de corrección ortográfica y backend persistente |
| Sprint 3 | 31-Oct-2025 | 13-Nov-2025 | 14 | Editor con feedback en tiempo real, pruebas internas |
| Sprint 4 | 14-Nov-2025 | 27-Nov-2025 | 14 | Integración, UI refinada, despliegue en staging |
| Sprint 5 | 28-Nov-2025 | 11-Dec-2025 | 14 | Demo final, pruebas con usuarios, documentación y entrega |

