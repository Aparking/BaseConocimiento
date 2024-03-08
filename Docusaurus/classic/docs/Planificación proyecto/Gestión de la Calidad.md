---
sidebar_position: 4
---

## Resumen ejecutivo

El documento desarrolla el Plan de Gestión de la Calidad y el Control de este, estableciendo los objetivos de Calidad para el proyecto que se presenta y cómo se conseguirá esto. Para ello, se establece un plan con los procesos a seguir, seguido de los procedimientos de control para el mismo y la asignación de responsabilidades.

## Introducción

El documento tiene como objetivo establecer las directrices y los procesos necesarios para garantizar que los entregables y productos del equipo de trabajo cumplan con unos estándares de calidad.

Por ello, en primer lugar, se identificarán los objetivos de calidad del proyecto, para posteriormente, realizar una planificación de la gestión de calidad que incluirá procesos y métricas de medición de cómo esta calidad se cumple en distintos aspectos de los entregables y productos resultantes, cerrando con la asignación de responsabilidades de calidad en el equipo de trabajo.

El compromiso con la calidad es un pilar fundamental para los miembros del equipo, y su documentación, reflejará nuestra dedicación para asegurar que todo producto o entregable resultante del trabajo realizado sea confiable, consistente y satisfactorio para la asignatura.

## Objetivos de calidad

Para que el producto y los entregables sean considerados de calidad para el proyecto, la organización ha planteado los siguientes objetivos a alcanzar:

- **Fiabilidad:** se garantizará que el software funcione correctamente para distintos escenarios de la aplicación, tanto para casos positivos como negativos.
- **Usabilidad:** se asegurará que el software sea fácil de usar y comprender para mejorar la experiencia de usuario, de cara a que la interacción sea intuitiva y eficiente.
- **Cumplimiento normativo:** deberá existir un compromiso para que el software cumpla con requisitos legales, regulaciones y estándares de la industria aplicables.
- **Satisfacción del cliente:** el software deberá satisfacer las expectativas y necesidades de los clientes.
- **Mantenibilidad:** se facilitará la modificación, actualización y corrección de software de manera eficiente y con bajo riesgo de crear nuevos errores.

### Planificación de gestión de la calidad

Para asegurar que los objetivos de calidad se alcanzan satisfactoriamente, se seguirán los siguientes procesos y métricas de calidad:

- **Elaboración de un conjunto de pruebas:** mediante este proceso, nos estamos comprometiendo a dar fiabilidad a nuestra aplicación, elaborando pruebas de funcionalidad tanto para casos positivos como negativos. Una funcionalidad que está cubierta con un buen conjunto de pruebas se considerará fiable.
- **Estructura de la interfaz de la aplicación:** consistirá en el análisis de cómo se podría estructurar la aplicación, pensado para que sea fácil de utilizar para todos los usuarios y centrándose en el caso de uso de personas que manejen la aplicación mientras que manejan un vehículo. Esto incluye procesos como: tematización de la aplicación, elaboración de mockups, etc.
- **Documentación y constancia del cambio:** se elaborarán documentos de la aplicación tales como manuales de usuario, además de dejar constancia del cambio, ya sea por documentos o por una buena estrategia de comunicación por el repositorio de código de la aplicación, con el objetivo de que mejorar la mantenibilidad de la aplicación.
- **Encuestas a usuarios pilotos:** durante el desarrollo de la aplicación, se permitirá probar a los usuarios piloto la aplicación, de cara a que podamos ver cómo resulta su experiencia como usuario en la aplicación y recibir feedback del mismo para posteriormente analizar si satisface sus necesidades o necesita mejoras.
- **Revisión normativa:** la aplicación debe estar al tanto de las normativas y regulaciones que puedan suponer modificaciones. Para el cumplimiento de esto, se propone que se esté al día en regulaciones de tráfico o privacidad de datos primordialmente, para adaptar la aplicación a posibles cambios relacionados con la normativa.

Además de planificar los procesos para la gestión de la calidad del proyecto, es importante recalcar por medio de qué herramientas para ello, además de cuál es la medición que nos da la cobertura de que tiene calidad. Por ello, expondremos estos conceptos:

- **SonarQube:** se trata de una plataforma de código abierto que proporciona análisis estático del código para detectar problemas de calidad, que incluyen además métricas para medir la cohesión y el acoplamiento. A través de esta herramienta, podremos generar informes sobre el código y proporcionar puntuaciones al mismo. Interpretamos la puntuación que genera SonarQube de la siguiente forma:

  - **Muy bajo:** aquella puntuación que está comprendida entre 0 y 19. Esto indica que el código es muy deficiente y que requiere de atención inmediata para solucionarlo.
  - **Bajo:** se trata de aquella puntuación comprendida entre un 20 y un 39. Indica que la calidad del código es insatisfactoria, y que requiere de cambios para alcanzar una calidad estándar.
  - **Moderado:** va del 40 al 69, indicando que la calidad del código es aceptable, aunque sigue existiendo bastante margen de mejora en este.
  - **Alto:** se considera puntuación alta a aquella comprendida entre 70 y 85. Una puntuación alta en SonarQube, nos indica que la calidad del código es buena y que el código cumple con muchos estándares de calidad. Esto da indicios de que se está consiguiendo un software estable y mantenible.
  - **Muy alto:** se considera puntuación muy alta a la comprendida entre 86 y 100. Indica una calidad de código excelente, con altos estándares de calidad, lo que asegura un software robusto, seguro y fácil de mantener.

  Una vez dada las interpretaciones a las puntuaciones de la herramienta a usar, el equipo de trabajo ha considerado que para que la aplicación sea de calidad, deberá alcanzar una nota Notable o Sobresaliente (entre 70-100), de tal forma que se aspire a conseguir la mejorar calidad posible en el proyecto, pero que tampoco cumpla los estándares mínimos para dar seguridad de que es un proyecto robusto.

- **Set de pruebas:** para el procedimiento de pruebas en la aplicación, se desarrollará por tarea un conjunto de pruebas, planificando previo a su elaboración un guion que ayudará para tener en cuenta todos los escenarios posibles para la funcionalidad a probar. Esto es:

  - **Escenarios positivos:** esto es, realizar pruebas de qué se espera que se realice en la aplicación para un uso correcto. Ejemplo: proporcionar los datos de entrada correctos para un inicio de sesión y que este se realice correctamente.
  - **Escenarios negativos:** esto es, realizar pruebas de qué se espera que se realice en la aplicación para un uso incorrecto de la misma. Ejemplo: probar que se cumplen las restricciones de un formulario.

  La medición de la calidad para este proceso será el porcentaje de cobertura de las pruebas en la aplicación. Entre más pruebas se realicen que cubran más código de la funcionalidad a probar, más calidad tendrá el código en este aspecto. Se considerará una cobertura de calidad aquella que recubra al menos el 70% del código del cuál se elabora el conjunto de pruebas.

- **Documentación:** de cara a medir la calidad de los documentos que se generen a lo largo de la aplicación, se tendrá en cuenta lo siguiente:
  - **Formato homogeneizado:** esto es, que siga la estructura impuesta para la elaboración de documentación dentro del equipo de proyecto. Un documento que está homogeneizado da imagen de organización, y no de trabajo por separado.
  - **Cobertura de plagio:** se tratará de evitar el plagio dentro de la documentación del proyecto. Para ello, se usará la herramienta Plagscan, una herramienta de detección de plagio útil para estos casos. Para que el documento esté fuera de plagios y se considere original, deberá tener menos del 20% de plagio detectado en el mismo.
  - **Cobertura de faltas ortográficas:** dentro de la elaboración de documentos, se evitará a toda costa entregar documentos con faltas ortográficas. Para solventar este problema, se usará la herramienta ProWritingAid, una herramienta de edición que analiza el texto en busca de problemas de gramática, estilo y coherencia.

## Control de la Calidad

De cara a que se cumpla la planificación de la calidad anterior, se ha tomado la decisión de elaborar un control de la calidad. Por ello, a continuación, se definen los controles de calidad propuestos por el equipo de trabajo:

- **Gestión del repositorio:** se tratará de asignar un responsable encargado de controlar el repositorio de la aplicación, revisando partes como:
  - **Gestión de la Configuración:** se comprobará que el equipo de trabajo comprometido con el Plan de Gestión de la Configuración se lleva a cabo de forma adecuada. El responsable velará por los estándares de código, versionados, gestión de tareas en el GitHub Project, etc.
  - **Constancia del cambio:** se hará un seguimiento diario sobre el equipo de trabajo en su actividad en el repositorio para comprobar que, en todo momento, quedan reflejados cambios dentro del mismo. Se centra en comprobar la gestión de tareas, descripción de cambios en commits y pull request, etc.
- **Gestión de la Base del Conocimiento:** se tratará de asignar un responsable que se encargue de revisar la base del conocimiento del equipo de trabajo. El encargado comprobará que existe estructura organizada dentro de esta y revisar los documentos para comprobar que su contenido es el que se pide, además de comprobar su homogeneidad con el resto de los documentos y trabajo realizado. Todo esto, estará ligado a los estándares impuestos por la asignatura (véase en el documento ISPP2324-DeliverableFailureConditions v1.1.pdf).

## Asignación de responsabilidades

De cara a hacer un control de la calidad, el equipo de trabajo ha tomado la decisión de asignar responsables de estos mediante los roles ilustrados en la tabla:

| Rol                               | Asignado a | Descripción                                                                                                                                                              |
| --------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Coordinador repositorio           |            | Velará por el cumplimiento del plan de gestión de la calidad, centrándose en el repositorio, comprobando todo lo definido en el Control de Calidad.                      |
| Coordinador base del conocimiento |            | Velará por el cumplimiento del Plan de Gestión de la Calidad, centrándose en la base del conocimiento del equipo, comprobando todo lo definido en el Control de Calidad. |
| Suplente                          |            | Apoyará a los coordinadores del Control de Calidad en caso necesario, respaldándoles en función de las necesidades que tengan estos.                                     |
| Suplente                          |            | Apoyará a los coordinadores del Control de Calidad en caso necesario, respaldándoles en función de las necesidades que tengan estos.                                     |
