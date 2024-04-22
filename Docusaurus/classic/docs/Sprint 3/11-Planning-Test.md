# Plan de pruebas

## Universidad de Sevilla - Escuela Técnica Superior de Ingeniería Informática

### Ingeniería del Software y Práctica Profesional – Curso 2023/2024

#### Grupo y nombre

G.11 - AparKing

#### Repositorio

[https://github.com/Aparking](https://github.com/Aparking)

#### Miembros del Equipo

- JOSE JAVIER ALCOBENDAS SANTOS [josalcsan1@alum.us.es](mailto:josalcsan1@alum.us.es)
- MARIO AROCA PÁEZ [mararopae@alum.us.es](mailto:mararopae@alum.us.es)
- ENRIQUE CABALLERO MUÑOZ [enrcabmun@alum.us.es](mailto:enrcabmun@alum.us.es)
- VIRGILIO OLIVA ALONSO [virolialo@alum.us.es](mailto:virolialo@alum.us.es)
- ALBERTO PEREA LEÓN [albperleo@alum.us.es](mailto:albperleo@alum.us.es)
- ALEJANDRO PÉREZ VÁZQUEZ [alepervaz@alum.us.es](mailto:alepervaz@alum.us.es)
- JUAN CARLOS RAMÍREZ LÓPEZ [juaramlop2@alum.us.es](mailto:juaramlop2@alum.us.es)
- LAURA ROLDÁN MERAT [laurolmer@alum.us.es](mailto:laurolmer@alum.us.es)
- PEDRO JESÚS RUIZ AGUILAR [pedruiagu1@alum.us.es](mailto:pedruiagu1@alum.us.es)
- ISMAEL RUIZ JURADO [ismruijur@alum.us.es](mailto:ismruijur@alum.us.es)
- CARMEN RUIZ PORCEL [carruipor@alum.us.es](mailto:carruipor@alum.us.es)
- IVÁN SÁNCHEZ SAN JOSÉ [ivasansan1@alum.us.es](mailto:ivasansan1@alum.us.es)
- SERGIO SANTIAGO SÁNCHEZ [sersansan2@alum.us.es](mailto:sersansan2@alum.us.es)
- MARÍA VICO MARTÍN [marvicmar@alum.us.es](mailto:marvicmar@alum.us.es)

### Índice del documento

1. Resumen ejecutivo
2. Tabla de revisión
3. Objetivos
   - 3.1 Generales
   - 3.2 Específicos
4. Alcance de las Pruebas
5. Estrategia de Pruebas
   - 5.1 Diseño de Casos de Prueba
   - 5.2 Herramientas y Recursos
   - 5.3 Ambiente de Pruebas
6. Gestión de Defectos
7. Reportes de Pruebas
8. Criterios de Aceptación
9. Riesgos y Contingencias

### 1. Resumen ejecutivo

Este Documento detalla el plan de pruebas para la aplicación web Aparking. Nuestro objetivo es asegurar que la aplicación sea fiable, segura, y fácil de usar, ofreciendo a los usuarios una herramienta eficaz para satisfacer sus necesidades de aparcamiento.

### 2. Objetivos

#### 2.1 Generales

- Garantizar que la aplicación cumpla con todos los requisitos funcionales y no funcionales.
- Identificar y corregir errores antes del lanzamiento.
- Asegurar una experiencia de usuario sin contratiempos.

#### 2.2 Específicos

- Verificar la precisión de la búsqueda y reserva de aparcamientos.
- Evaluar la seguridad de las transacciones y la protección de datos del usuario.
- Asegurar la compatibilidad con los principales navegadores y dispositivos.

### 3. Alcance de las Pruebas

El alcance de las pruebas incluirá:

- Pruebas Funcionales: Para asegurar que todas las características y funciones de la aplicación funcionen como se espera.
+++markdown
- **Pruebas de Usabilidad**: Para garantizar que la aplicación sea intuitiva y fácil de usar.

- **Pruebas de Rendimiento**: Para comprobar que la aplicación se desempeña adecuadamente bajo carga.

- **Pruebas de Seguridad**: Para asegurar que los datos del usuario estén protegidos y que la aplicación sea segura contra ataques.

- **Pruebas de Compatibilidad**: Para verificar que la aplicación funciona correctamente en diferentes navegadores y dispositivos.

### 4. Estrategia de Pruebas

#### 4.1 Diseño de Casos de Prueba

Cada caso de prueba se diseñará para validar un requisito específico, incluyendo:

- **Búsqueda de Aparcamiento**: Pruebas para validar que los usuarios pueden buscar aparcamiento basándose en ubicación, disponibilidad, y precio.

- **Reserva de Garajes Privados**: Pruebas para confirmar que los usuarios pueden reservar un garaje privado y recibir confirmación.

- **Pagos y Transacciones**: Pruebas para asegurar que el proceso de pago es seguro y funciona correctamente.

- **Registro y Gestión de Usuarios**: Pruebas para verificar que los procesos de registro, inicio de sesión y gestión de perfil funcionan sin problemas.

#### 4.2 Herramientas y Recursos

- **Selenium**: Para pruebas automatizadas en diferentes navegadores.

- **Postman**: Para pruebas de APIs.

- **JMeter**: Para pruebas de rendimiento y estrés.

#### 4.3 Ambiente de Pruebas

Al desarrollar una aplicación web como Aparking que utiliza Django para el backend y Angular para el frontend, nuestro ambiente de pruebas está diseñado para validar la funcionalidad en todos los niveles tecnológicos. Este enfoque nos permite garantizar que cada componente, ya sea una función del backend o un componente del frontend, funcione como se espera de manera aislada y en conjunto con otros componentes. El ambiente de pruebas que hemos establecido es un espejo preciso del entorno de producción, pero con las herramientas y procedimientos necesarios para realizar pruebas exhaustivas y controladas.

1. **Pruebas Unitarias (Unit Tests)**

   Para el backend en Django, utilizamos el framework de pruebas incorporado en Django, el cual está optimizado para realizar pruebas unitarias de los modelos, vistas y controladores de nuestra aplicación.

   - **Herramientas y Configuración**:
   
     Django Test Framework integrado con una base de datos de prueba (como SQLite para un inicio rápido y fácil configuración).

2. **Pruebas de Integración (Integration Tests)**

   En esta fase, nos aseguramos de que los diferentes módulos y servicios de nuestra aplicación interactúen correctamente entre sí. Para las integraciones entre Angular y Django, establecemos pruebas que validan las interacciones entre el frontend y el backend, como llamadas a la API REST y el manejo de respuestas.

   - **Herramientas y Configuración**:
   
     Postman o scripts personalizados para realizar pruebas de la API.
     
     Django REST Framework test cases para probar la API desde el lado del servidor.

3. **Pruebas de Sistema (End-to-End Tests)**

   Las pruebas end-to-end verifican el flujo completo de la aplicación, desde la interfaz de usuario de Angular hasta las operaciones del backend en Django. Estas pruebas simulan la interacción del usuario con la aplicación en su totalidad.

   - **Herramientas y Configuración**:
   
     Selenium para automatizar las interacciones del usuario en el navegador.

4. **Pruebas de Aceptación (Acceptance Tests)**

   Las pruebas de aceptación se centran en validar la aplicación contra los requisitos del usuario. Estas pruebas se llevan a cabo en un entorno que imita la configuración de producción lo más cerca posible, con datos que reflejan los datos reales que los usuarios generarían.

   - **Herramientas y Configuración**:
   
     Datos de prueba representativos en la base de datos cargados a través de un JSON y un CSV con datos de prueba para asegurar la relevancia de las pruebas.

5. **Pruebas Exploratorias (Exploratory Tests)**

   Durante las pruebas exploratorias, los testers interactúan con la aplicación, explorando funcionalidades y buscando defectos.

   - **Herramientas y Configuración**:
   
     Acceso a la versión de prueba de la aplicación con todas las funciones disponibles.
     
     Herramientas como el DevTools de Chrome para monitorizar la actividad de la red y depurar el código en ejecución.

### 5. Gestión de Defectos

La gestión de defectos es el proceso mediante el cual los defectos identificados durante las pruebas son reportados, rastreados, corregidos y verificados tras la corrección. Este proceso asegura que todos los problemas se solucionen de forma eficiente y efectiva.

- **Reporte de Defectos**: Cuando un tester encuentra un defecto, lo reporta documentándolo e incluyendo:
  - Descripción detallada del defecto.
  - Pasos para reproducir el error.
  - Severidad y prioridad del defecto.
  - Capturas de pantalla o videos cuando sea aplicable.

- **Asignación**: Los defectos son revisados y asignados a los desarrolladores correspondientes para su corrección.

- **Corrección y Verificación**: Una vez corregido, el defecto es asignado de nuevo al tester o a otro tester para verificar su corrección. Si el defecto no se reproduce, se marca como resuelto.

- **Seguimiento**: Todos los defectos, ya sean resueltos o pendientes, son rastreados hasta que el proyecto esté listo para el lanzamiento.

### 6. Reportes de Pruebas

Los reportes dan una visión de las actividades de pruebas, incluyendo el número de pruebas realizadas, el número de defectos encontrados y su importancia, y el estado general de la aplicación en términos de calidad.

- **Formato del Reporte**: El reporte de pruebas incluye una tabla de pruebas ejecutadas, descripción, resultado (pasó, falló, bloqueado), y defectos asociados (en el caso de que los haya).

- **Resumen Ejecutivo**: Una sección inicial que proporciona un resumen de la cobertura de pruebas, el número de defectos encontrados clasificados por severidad, y una evaluación general del estado de la aplicación.

- **Detalles de Defectos**: Una sección que lista todos los defectos encontrados, incluyendo su severidad, estado actual, y enlaces a los reportes de defectos específicos en GitHub.

### 7. Criterios de Aceptación

Los criterios de aceptación definen las condiciones específicas que la aplicación debe cumplir para ser considerada lista para el lanzamiento. Estos criterios se basan en los requisitos funcionales y no funcionales del proyecto.

- **Funcionalidad Completa**: Todas las características y funciones especificadas en los requisitos del proyecto deben estar implementadas y funcionando correctamente.

- **Sin Defectos Críticos**: No deben existir defectos calificados como 'Crítica' o 'Alta' sin resolver.

- **Rendimiento**: Los tiempos de respuesta de la aplicación deben cumplir con los umbrales definidos.

- **Usabilidad**: La aplicación debe pasar una evaluación de usabilidad, asegurando que los usuarios puedan navegar e interactuar sin confusiones ni dificultades.

### 8. Riesgos y Contingencias

Consiste en identificar los riesgos potenciales y tener planes de contingencia preparados es crucial para manejar cualquier problema que pueda surgir durante el proceso de pruebas.

- **Riesgo**: Retrasos en el desarrollo debido a fallos que afectan el cronograma del proyecto.
  - **Contingencia**: Ajustar el cronograma o aumentar los recursos de prueba para compensar el tiempo perdido.

- **Riesgo**: Descubrimiento de un número significativo de defectos de alta importancia cerca del lanzamiento.
  - **Contingencia**: Priorizar los defectos basándose en su impacto en la funcionalidad y la experiencia del usuario.

- **Riesgo**: Baja cobertura de pruebas debido a la limitación de recursos.
  - **Contingencia**: Utilizar técnicas de pruebas basadas en riesgos para enfocarse en las áreas más críticas de la aplicación, asegurando que los recursos de pruebas se utilicen de manera eficiente.
+++

