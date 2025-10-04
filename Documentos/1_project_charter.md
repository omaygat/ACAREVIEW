# Project Charter - Revisor Automático de Escritura Académica

## 1. Acta de Constitución
**Nombre del proyecto:** Revisor Automático de Escritura Académica  
**Sponsor:** Jean Pierre Oscar Ramos Patricio.  
**Gerente de Proyecto:** Fredy Quispe Villajuan.  
**Fecha de documento:** 27/08/2025. 
| Nombre                        | Rol                       | Responsabilidades clave                                                                 |
|-------------------------------|---------------------------|----------------------------------------------------------------------------------------|
| Fredy Quispe Villajuan        | Gerente de Proyecto       | Lidera el proyecto, gestiona el cronograma, el presupuesto y los riesgos; es el punto de contacto principal con el sponsor; coordina a los líderes de equipo. |
| Jeanpiere Oscar Ramos Patricio| Sponsor / Patrocinador    | Aprueba cambios, presupuestos y decisiones clave; defiende el proyecto ante la dirección universitaria; provee los recursos necesarios. |
| Jeanpiere Oscar Ramos Patricio| Líder Técnico (UI/UX)     | Supervisa el diseño y desarrollo de la interfaz de usuario web, responsive y accesible. (*) |
| Vianeth Anais Mallma Villanueva | Líder Técnico (API & NLP)| Responsable del desarrollo del core de la plataforma, integración de modelos de IA (NLP) y APIs. (*) |
| George Russell Torres Geronimo | Líder de QA & Datos      | Gestiona el entrenamiento y prueba de los modelos de IA; supervisa la precisión del sistema y la integración de bases de datos académicas. (*) |
| Thalia Alvarez Velasquez      | Consultor de Contenido    | Asegura que las sugerencias de estilo y citación se alineen con los estándares académicos. (*) |


## 2. Visión
Para estudiantes universitarios y docentes que necesitan mejorar la calidad de sus escritos académicos y detectar posibles plagios de manera rápida y confiable, el Revisor Automático de Escritura Académica es una plataforma colaborativa basada en IA que analiza textos, sugiere mejoras gramaticales y de estilo, verifica citaciones y genera reportes de originalidad de manera automatizada. 

## 3. Objetivos (SMART)

| Objetivo original | Objetivo SMART |
|---|---|
| Desarrollar una aplicación web MERN que funcione como revisor automático de escritura académica. | **SMART:** Desarrollar y desplegar una aplicación web MERN funcional para revisión automática de escritura académica para el 31/01/2026, disponible en producción en Vercel/Render y con un conjunto mínimo de funcionalidades (carga de texto, detección ortográfica y sugerencias de estilo) comprobadas mediante 3 pruebas con usuarios y con métricas: 80% de precisión en detección ortográfica básica y tiempo de respuesta <3s por texto de 1 página. |
| Implementar un módulo de detección de errores ortográficos y gramaticales. | **SMART:** Implementar e integrar un módulo NLP (basado en reglas + modelos de corrección) que detecte y corrija al menos 5 tipos de errores (ortografía, concordancia, puntuación, estilo, redundancias) y alcance ≥75% de corrección automática en pruebas internas antes del Sprint 3. |
| Desarrollar un sistema de retroalimentación en tiempo real que sugiera mejoras de estilo y coherencia. | **SMART:** Entregar un editor web con retroalimentación inline en tiempo real (latencia <3s) y métricas de satisfacción mínima 4/5 en pruebas con 10 usuarios a fin de Sprint 4. |
| Construir un backend en Node.js con Express y conexión a MongoDB Atlas. | **SMART:** Implementar un backend Node.js + Express con endpoints REST para subir y revisar textos, autenticación básica y persistencia en MongoDB Atlas (Tier free o M2 según necesidad) antes de finalizar Sprint 2. |
| Diseñar un frontend en React que permita a los estudiantes cargar y visualizar sus textos revisados. | **SMART:** Entregar interfaz React responsive con carga de DOCX/PDF y visor de anotaciones para revisión antes de final de Sprint 2, y despliegue en Vercel Hobby (gratuito) para demo. |


## 4. Alcance del Proyecto
**Incluido (MVP / Iteración 0):**
- Interfaz web (React) para cargar texto (DOCX/PDF) y mostrar sugerencias. 
- Backend Node.js + Express y base de datos en MongoDB Atlas (configuración inicial). 
- Motor básico de NLP (reglas + modelos ligeros) para detectar 5 tipos de errores.
- Plan de pruebas internas y demo para revisión de sprint.

**Excluido (futuras iteraciones):**
- Detección de plagio a escala industrial (puede planificarse en EPIC02). 
- Integraciones complejas con LMS institucionales en la primera iteración.

## 5. Análisis de Valor del Negocio (resumen)
**Problema:** baja calidad en redacción académica que afecta desempeño estudiantil.   
**Beneficios esperados:** mejora en calidad de tesis/ensayos, ahorro de tiempo en correcciones, fortalecimiento de competencias académicas.  
**Indicadores de valor:** reducción del 30% en errores comunes en 3 meses de uso; satisfacción de usuario ≥4/5 en encuestas piloto.

## 6. Criterios de Aceptación del Proyecto
Basados en la rúbrica, los criterios para considerar la Iteración 0 como *aceptada*:
- README y documentación del repo con estructura de directorios definida.   
- Backend desplegado y accesible (endpoint de revisión funcional).  
- Frontend desplegado y permite cargar un documento y recibir sugerencias (mínimo 5 tipos de errores).   
- Pruebas internas documentadas (3 pruebas con casos de uso).  
- Registro de stakeholders, riesgos y plan de comunicación activos. 

---
