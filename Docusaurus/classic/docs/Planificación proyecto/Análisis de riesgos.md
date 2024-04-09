---
sidebar_position: 2
---

## Resumen ejecutivo

La intención de este documento es la de evaluar e identificar los riesgos potenciales que pueden aparecer durante la ejecución del proyecto para luego, poder gestionarlos y aplicar planes de contingencia para solventarlos.

## Clasificación de riesgos

El primer paso que se ha tomado para analizar los riesgos que puedan amenazar al proyecto es el de establecer un criterio de clasificación y nombrado de los mismos. Esta idea la implantó el equipo para facilitar la comunicación de las amenazas que surjan y que su planificación y solución sea más efectiva.
De esta manera, se obtienen los siguientes tipos de riesgos:

- **Gestión.** Relacionados con deficiencias en la planificación, estimación de costes o tiempo, liderazgo ineficiente, productividad de los miembros, conflictos, problemas de comunicación.
- **Técnico.** Desconocimiento de alguna tecnología, funcionalidad abarca más de lo que se había estimado, tareas que son más exigentes de lo planificado, fallas de hardware, problemas de rendimiento del software.
- **Operativo.** Modificación del alcance o requisitos, falta de recursos, fallo al aplicar alguna herramienta de gestión de proyecto.
- **Calidad.** Relacionados con la crítica recibida tanto por los usuarios pilotos como por el profesorado de la asignatura y oportunidades de mejora.
- **Externo.** Relacionados con los clientes, competidores y factores externos.

En esta sección se listarán todos los posibles riesgos que el equipo ha considerado. Para su recopilación, se ha hecho uso de una lluvia de ideas grupal, en la que se han aplicado técnicas como la obtención mediante la experiencia que se tiene de otros proyectos similares o consultas a terceros o por Internet.

## Identificación y análisis de riesgos

Una vez identificadas las amenazas que pueden aparecer, se han analizado, para concretar las características y consecuencias que trae cada riesgo. Para ello, el riesgo viene acompañado de un identificador (ID) y de una categoría a la cual ha sido asignado, así como tendrá una probabilidad de ocurrir y causará un impacto en el alcance, coste o tiempo. Estas estimaciones se realizarán en porcentaje, expresados del 1 al 10, para el caso de la probabilidad y en escala de 1 a 5 para los distintos impactos. El impacto total será la media ponderada del impacto en alcance, tiempo y costes. El análisis e identificación de riesgos se resume en la siguiente tabla:

|        |                 |                                                                         |                  |             | Impacto    |            |
| ------ | --------------- | ----------------------------------------------------------------------- | ---------------- | ----------- | ---------- | ---------- |
| **ID** | **Categoría**   | **Riesgo**                                                              | **Probabilidad** | **Alcance** | **Tiempo** | **Costes** |
| 1      | Gestión/Técnico | Retraso en alguna tarea o Sprint                                        | 75%              | 1           | 5          | 4          |
| 2      | Gestión         | Planificación deficiente del proyecto                                   | 25%              | 2           | 4          | 3          |
| 3      | Operativo       | Tecnología inadecuada al contexto de la aplicación                      | 40%              | 1           | 3          | 3          |
| 4      | Gestión         | Repartición desequilibrada de tareas                                    | 75%              | 1           | 2          | 2          |
| 5      | Operativo       | Falta de recursos durante la ejecución                                  | 40%              | 1           | 3          | 3          |
| 6      | Externo         | Aparición de nueva competencia promesa                                  | 30%              | 3           | 1          | 1          |
| 7      | Operativo       | Abandono de miembro del equipo                                          | 30%              | 1           | 3          | 2          |
| 8      | Operativo       | Incumplimiento del acuerdo de compromiso por parte de algún miembro     | 35%              | 1           | 3          | 2          |
| 9      | Calidad         | Calidad insuficiente del producto                                       | 60%              | 4           | 4          | 3          |
| 10     | Calidad         | Peticiones de cambio por parte del cliente o usuarios pilotos           | 85%              | 4           | 4          | 3          |
| 11     | Operativo       | Incapacidad de algún miembro del equipo                                 | 25%              | 1           | 5          | 3          |
| 12     | Gestión         | Objetivos y expectativas poco realistas                                 | 70%              | 4           | 5          | 4          |
| 13     | Operativo       | Conflicto en el grupo o equipo                                          | 35%              | 1           | 3          | 1          |
| 14     | Externo         | La competencia agrega mejoras a su producto                             | 40%              | 3           | 1          | 1          |
| 15     | Gestión         | Superar el plazo de entrega                                             | 20%              | 5           | 5          | 4          |
| 16     | Gestión         | Superar los costes planificados                                         | 70%              | 2           | 1          | 5          |
| 17     | Operativo       | Usuarios pilotos no son capaces de encontrar fallos que sí existan      | 35%              | 1           | 4          | 2          |
| 18     | Operativo       | Dependencias de terceros según herramientas usadas                      | 75%              | 1           | 2          | 4          |
| 19     | Calidad         | Vulnerabilidades de seguridad dentro del producto                       | 40%              | 1           | 2          | 4          |
| 20     | Gestión         | Problemas de coordinación entre subgrupos o miembros                    | 60%              | 3           | 3          | 3          |
| 21     | Gestión         | Pérdida de datos o avances del producto                                 | 50%              | 1           | 3          | 2          |
| 22     | Externo         | Cambio o incumplimiento de normativas y regulaciones que afecten a la aplicación (GDPR) | 20%            | 1          | 3          | 2          |
| 23     | Externo         | Herramientas gratuitas dejan de serlo                                   | 20%              | 2           | 1          | 5          |
| 24     | Técnico         | Alta innovación tecnológica                                             | 85%              | 1           | 4          | 2          |
| 25     | Técnico         | Arquitectura del sistema mal planificada                                | 35%              | 2           | 4          | 3          |
| 26     | Técnico         | Producto queda grande al equipo de trabajo                              | 50%              | 5           | 5          | 5          |
| 27     | Gestión         | Ausencia de documentación o baja calidad de esta                        | 55%              | 3           | 3          | 2          |
| 28     | Calidad         | Insatisfacción de los usuarios pilotos sobre la aplicación              | 30%              | 4           | 4          | 4          |
| 29     | Externo         | Catástrofe natural, pandemia o epidemia                                 | 10%              | 2           | 5          | 4          |
| 30     | Técnico         | Presencia de errores y bugs en una funcionalidad                        | 65%              | 1           | 4          | 3          |
| 31     | Externo/Gestión | Usuarios pilotos no participan en el proyecto                           | 60%              | 2           | 3          | 1          |
| 32     | Externo/Gestión | Usuarios pilotos no ofrecen feedback de la aplicación a tiempo          | 65%              | 2           | 3          | 1          |
| 33     | Gestión/Técnico | Dependencias entre tareas que frenan el avance                          | 70%              | 2           | 4          | 3          |

## Priorización de riesgos

Tras la fase de análisis, se priorizan los riesgos para que, a la hora de intentar minimizar las consecuencias de este, resulte más fácil saber a cuáles apuntar por su grado de importancia. Este cálculo se efectúa bajo el factor riesgo, cuya operación se puede resumir con la siguiente fórmula: Factor_riesgo = probabilidad_riesgo/100 x impacto_en_proyecto. Este factor se mide con valor del 0,1 al 5. Con este factor riesgo, se pasa a priorizar y etiquetar la importancia del riesgo. Los valores que puede tomar son: 5 (Urgente), 4 (Muy Alta), 3 (Alta), 2 (Media) y 1 (Baja).

| ID  | Riesgo                                                                  | Factor Riesgo | Prioridad |
| --- | ----------------------------------------------------------------------- | ------------- | --------- |
| 1   | Retraso en alguna tarea o Sprint                                        | 2,33          | 5         |
| 2   | Planificación deficiente del proyecto                                   | 0,75          | 3         |
| 3   | Tecnología inadecuada al contexto de la aplicación                      | 0,93          | 4         |
| 4   | Repartición desequilibrada de tareas                                    | 1,25          | 3         |
| 5   | Falta de recursos durante la ejecución                                  | 0,93          | 3         |
| 6   | Aparición de nueva competencia promesa                                  | 0,50          | 2         |
| 7   | Abandono de miembro del equipo                                          | 0,75          | 2         |
| 8   | Incumplimiento del acuerdo de compromiso por parte de algún miembro     | 0,70          | 3         |
| 9   | Calidad insuficiente del producto                                       | 2,20          | 4         |
| 10  | Peticiones de cambio por parte del cliente o usuarios pilotos           | 3,12          | 5         |
| 11  | Incapacidad de algún miembro del equipo                                 | 0,75          | 2         |
| 12  | Objetivos y expectativas poco realistas                                 | 3,03          | 5         |
| 13  | Conflicto en el grupo o equipo                                          | 0,58          | 3         |
| 14  | La competencia agrega mejoras a su producto                             | 0,67          | 2         |
| 15  | Superar el plazo de entrega                                             | 0,93          | 5         |
| 16  | Superar los costes planificados                                         | 1,87          | 5         |
| 17  | Usuarios pilotos no son capaces de encontrar fallos que sí existan      | 0,82          | 3         |
| 18  | Dependencias de terceros según herramientas usadas                      | 1,75          | 3         |
| 19  | Vulnerabilidades de seguridad dentro del producto                       | 1,20          | 3         |
| 20  | Problemas de coordinación entre subgrupos o integrantes                 | 1,20          | 3         |
| 21  | Pérdida de datos o avances del producto                                 | 1,00          | 5         |
| 22  | Cambio o incumplimiento de normativas y regulaciones que afecten a la aplicación (GDPR) | 0,75      | 2         |
| 23  | Herramientas gratuitas dejan de serlo                                   | 0,53          | 4         |
| 24  | Alta innovación tecnológica                                             | 1,98          | 5         |
| 25  | Arquitectura del sistema mal planificada                                | 1,05          | 4         |
| 26  | Producto le queda grande al equipo de trabajo                           | 2,50          | 5         |
| 27  | Ausencia de documentación o baja calidad de esta                        | 1,47          | 3         |
| 28  | Insatisfacción de los usuarios sobre la aplicación                      | 1,20          | 5         |
| 29  | Catástrofe natural, pandemia o epidemia                                 | 0,37          | 2         |
| 30  | Presencia de errores y bugs en una funcionalidad                        | 1,73          | 4         |
| 31  | Usuarios pilotos no participan en el proyecto                           | 1,20          | 3         |
| 32  | Usuarios pilotos no ofrecen feedback de la aplicación a tiempo          | 1,30          | 3         |
| 33  | Dependencias entre tareas que frenan el avance                          | 1,79          | 4         |

## Mitigación de riesgos

En esta sección se estudian los riesgos y posibles planes de contingencia para minimizar el impacto que pueden provocar en el proyecto. Estos mecanismos se aplicarán en el momento en el que se detecte que se ha activado un riesgo. A continuación, se muestra una lista con los mismos:
| ID | Riesgo | Factor Riesgo | Prioridad |Plan de contingencia |
|--|--|--|--|--|
| 1 | Retraso en alguna tarea o Sprint | 2,33 | 5 |Realizar un mejor reparto de las tareas para el siguiente sprint. Carga de trabajo equitativa en el siguiente sprint. Asignar las tareas más exigentes a más de una persona. Las actividades que no se han realizado, pasarlas al siguiente sprint y ejecutarlas las primeras. Asignar a una segunda persona a realizar la tarea. Ayuda por parte de miembros del equipo que tengan más conocimientos del problema en caso de estar atascado.
| 2 | Planificación deficiente del proyecto | 0,75 | 3 | Realizar una reunión para realizar una planificación en condiciones. Planificar de nuevo de manera más eficiente y que no consuma mucho tiempo. Consultar la opinión de expertos.
| 3| Tecnología inadecuada al contexto de la aplicación | 0,93 | 4 | Informarse sobre el funcionamiento de otras tecnologías y hacer el cambio. Evaluar si se puede seguir manteniendo parte del código realizado.
| 4| Repartición desequilibrada de tareas | 1,25 | 3 | Seccionar esa tarea en varias tareas más pequeñas. Cambiar tareas de un miembro a otro en caso de que la diferencia de carga de tareas sea grande. Asignar a un ayudante en alguna tarea para la persona que tenga más issues.
| 5| Falta de recursos durante la ejecución | 0,93 | 3 | Buscar alternativas a ese recurso que falta. Tener preparado un equipamiento secundario.
| 6| Aparición de nueva competencia promesa | 0,50 | 2 | Evaluar el impacto que tiene en el mercado y sus funcionalidades. Modificar el producto en caso de ser necesario.
| 7| Abandono de miembro del equipo | 0,75 | 2 | Consultarlo con el profesorado. Intentar minimizar el impacto con el trabajo de los demás integrantes.
| 8| Incumplimiento del acuerdo de compromiso por parte de algún miembro | 0,70 | 3 | Aplicar las consecuencias descrito en el Commitment Management. Dialogar con la persona y llegar a un acuerdo. Comentarlo al profesorado.
| 9| Calidad insuficiente del producto | 2,20 | 4 | Estudiar el producto y efectuar cambios en el mismo para mejorar la calidad. Pedir consejo de terceros para mejorar. Seguir los consejos de los usuarios pilotos. Seguir los consejos de la píldora teórica de UX.
| 10| Peticiones de cambio por parte del cliente o usuarios pilotos | 3,12 | 5 | Evaluar el impacto del cambio dentro de la planificación y determinar si tomarlo o no. Hacer nuevas tareas para el siguiente incremento y ejecutarlas las primeras.
| 11| Incapacidad de algún miembro del equipo |0,75 | 2 | Consultarlo con el profesorado. Intentar minimizar el impacto con el trabajo de los demás integrantes.
| 12| Objetivos y expectativas poco realistas| 3,03| 5 | Reunión grupal para determinar un alcance más realista del proyecto.
| 13| Conflicto en el grupo o equipo | 0,58 | 3 | Dialogar y hacer de intermediarios entre los afectados. Consultarlo con el profesorado en caso extremo. Separar a los implicados del grupo en caso de pertenecer a él.
| 14| La competencia agrega mejoras a su producto | 0,67 | 2 | Evaluar el impacto que tiene en el mercado y sus funcionalidades. Modificar el producto en caso de ser necesario.
| 15| Superar el plazo de entrega | 0,93 | 5 | Consultarlo con el profesorado si lo causan por un motivo de peso mayor.
| 16| Superar los costes planificados | 1,87 | 5 | Identificar la razón y actuar en consecuencia. Mejor repartición de tareas. Asignar tareas a más de una persona para reducir el tiempo de cumplimiento.
| 17| Usuarios pilotos no son capaces de encontrar fallos que sí existan | 0,82 | 3 | Probar la aplicación por nuestra cuenta para tener mayor seguridad. Explicarles el funcionamiento de la aplicación para reducir la incertidumbre de no entender el sistema. Solicitarles que revisen nuevamente
| 18| Dependencias de terceros según herramientas usadas | 1,75 | 3 | Estudiar el impacto de esas dependencias. Si se cae alguna herramienta utilizada, comentar al profesorado. Considerar alternativas a esa herramienta siempre que sea posible y existan.
| 19| Vulnerabilidades de seguridad dentro del producto | 1,20 | 3 | Dedicar tiempo en estudiar la seguridad del sistema y hacer pruebas para encontrar las vulnerabilidades. Arreglar las brechas identificadas.
| 20| Problemas de coordinación entre subgrupos o miembros | 1,20 | 3 | Mejorar la comunicación entre miembros y mediar la situación. Organización por parte de los coordinadores. Reasignación de tareas. 
| 21| Pérdida de datos o avances del producto | 1,00| 5 | Intentar rescatar la última versión de esos datos. Hacer copias de seguridad cada semana. En caso de no ser reversible, dedicar tiempo en volver a obtener las implementaciones de la última versión que se tenía.
| 22| Cambio o incumplimiento de normativas y regulaciones que afecten a la aplicación (GDPR) | 0,75 | 2 | Informarse sobre los cambios para comprobar que no se infringe ninguna ley.
| 23| Herramientas gratuitas dejan de serlo | 0,53 | 4 | Pagar el precio de la herramienta. Identificar y, en esencia, migrar a otra alternativa gratuita.
| 24| Alta innovación tecnológica | 1,98 | 5 | Dedicar tiempo a formación del equipo para poder ejecutar el proyecto con la tecnología que se va a usar.
| 25| Arquitectura del sistema mal planificada | 1,05 | 4 | Evaluar el sistema y generar una modificación del diseño de la aplicación.
| 26| Producto le queda grande al equipo de trabajo | 2,50 | 5 | Estudiar las razones y modificar el alcance del producto. Realización de tareas por pares si son complejas.
| 27| Ausencia de documentación o baja calidad de esta | 1,47 | 3 | Invertir tiempo en mejorar la calidad de la documentación, siguiendo unos patrones establecidos.
| 28| Insatisfacción de los usuarios sobre la aplicación | 1,20 | 5 | Estudiar las razones y ejecutar cambios en la aplicación. Recoger opiniones de los usuarios pilotos.
| 29| Catástrofe natural, pandemia o epidemia | 0,37 | 2 | Seguir los protocolos de recomendación por las organizaciones de salud, policía y gobierno.
| 30| Presencia de errores y bugs no detectados en una funcionalidad | 1,73 | 4 | Planificar sesiones de pruebas del sistema semanales. Dedicar más tiempo a la resolución de problemas. Comunicarse con los usuarios pilotos para comparar opiniones. Usar herramientas de evaluación del código que puedan ayudar a identificarlos. Automatizar las pruebas para evitar propagaciones de los errores.
| 31| Usuarios pilotos no participan en el proyecto | 1,20 | 3 | Buscar a nuevos participantes potenciales para que prueben y opinen sobre la aplicación. Se refuerza las pruebas que hacen los desarrolladores para mitigar la ausencia de usuarios pilotos. El equipo de calidad actúa como usuario piloto para probar la aplicación. Se aplican las cláusulas del Customer Agreement.
| 32| Usuarios pilotos no ofrecen feedback de la aplicación a tiempo          | 1,30          | 3         | Se aplican las cláusulas del Commitment Agreement. Según las circunstancias, alargar el plazo un día más como máximo. Poner en copia al profesorado de la situación. Si se tiene otro feedback, se debe depender de él. Contactar con otros usuarios pilotos.
| 33| Dependencias entre tareas que frenan el avance                          | 1,79          | 4         | Comunicación entre integrantes. En caso de que el integrante con la tarea frenadora necesite ayuda, otro integrante le ayuda. Avance y preparación del cambio por parte del miembro con la tarea en pausa.

## Monitorización de riesgos

Finalmente, una vez identificado, analizado, priorizado y mitigado los riesgos con los cuales el equipo de AparKing se puede encontrar, se establece un plan de monitoreo para determinar en qué estado se encuentran y así saber si hay que aplicar el plan de contingencia que tiene asociado. O si comprobar que el plan de contingencia funciona si se activa un riesgo.

Para ello, el equipo ha acordado que los riesgos se estudiarán manualmente, en donde 1 o 2 encargados analizarán las circunstancias actuales del proyecto y determinarán si se ha activado alguno o podría hacerlo en poco tiempo, para actuar en consecuencia. Ese análisis tendrá constancia en el siguiente apartado del documento y es deber de los miembros implicados el comunicarlo a los coordinadores, y, en esencia, al resto de los integrantes. Para monitorear los riesgos se destacan 4 estados principales:

- **En estudio:** El riesgo aún no ha sido evaluado ni tratado o está siendo analizado por el momento.
- **Evaluado:** El riesgo ha sido evaluado y no ha sido activado, por tanto, no se han tenido que aplicar ninguna medida.
- **Monitoreando:** Se han implementado los planes de contingencia para amortiguar el riesgo. En caso de que un riesgo esté en este estado, se debe documentar cada día el avance de este.
- **Mitigado:** El riesgo ha sido evaluado y mitigado tras aplicar los planes de contingencia. Es entonces cuando se confirma que el riesgo ha sido solucionado.


